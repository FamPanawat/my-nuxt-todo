<script setup>
const client = useSupabaseClient()
const user = useSupabaseUser()

const task = ref('')
const taskLists = ref([])

const userId = user.value?.id || user.value?.sub

async function fetchTasks() {
  if (!userId) {
    taskLists.value = []
    return
  }

  const { data, error } = await client
    .from('tasks')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (data) {
    taskLists.value = data
  }
}

watch(user, () => {
  if (userId) {
    fetchTasks()
  } else {
    taskLists.value = []
  }
}, { immediate: true })

// ฟังก์ชันเพิ่มงาน
async function addTask() {
  if (task.value.trim() === '') return

  if (!userId) {
    console.log('User ID หาไม่เจอเลย (ทั้ง id และ sub)')
    return
  }

  const newTask = {
    text: task.value,
    is_done: false,
    user_id: userId
  }

  const { error } = await client
    .from('tasks')
    .insert(newTask)

  if (error) {
    console.error('Save Error:', error)
    alert('บันทึกไม่ได้: ' + error.message) // เด้งเตือนที่หน้าจอ
    return
  }

  // ถ้าผ่าน
  task.value = ''
  fetchTasks()
}

// Computed
const pendingTasks = computed(() => {
  return taskLists.value.filter(item => !item.is_done).length
})

// ฟังก์ชันลบงาน
async function removeTask(index, id) {
  await client.from('tasks').delete().eq('id', id)
  fetchTasks()
}

// ฟังก์ชันอัปเดตสถานะ
async function updateTask(task) {
  await client
    .from('tasks')
    .update({ is_done: task.is_done })
    .eq('id', task.id)
}

// SEO
const pageTitle = computed(() => {
  return `เหลือ ${pendingTasks.value} งาน - My Super Do`
})
useHead({
  title: pageTitle,
  meta: [{ name: 'description', content: 'จดบันทึกงานของคุณได้ที่นี่' }]
})
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-4 text-gray-800">รายการสิ่งที่ต้องทำ</h2>

    <div class="flex gap-2 mb-6">
      <input v-model="task" @keyup.enter="addTask" placeholder="วันนี้จะทำอะไรดี..."
        class="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
      <button @click="addTask"
        class="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-lg font-medium transition shadow-md">
        เพิ่ม
      </button>
    </div>

    <div class="flex justify-between items-center mb-4 text-sm text-gray-500">
      <span>ภารกิจคงเหลือ: <strong class="text-green-600">{{ pendingTasks }}</strong> งาน</span>
      <NuxtLink to="/about" class="text-blue-400 hover:underline">อ่านกติกา</NuxtLink>
    </div>

    <ul class="space-y-2">
      <TaskItem v-for="(item, index) in taskLists" :key="item.id" :task="item" @delete-me="removeTask(index, item.id)"
        @change="updateTask(item)" />
    </ul>
  </div>
</template>