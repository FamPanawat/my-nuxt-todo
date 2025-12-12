<script setup>
const taskLists = ref([])
const task = ref('')

const { data: serverTasks } = await useFetch('/api/tasks')

onMounted(() => {
  const savedTasks = localStorage.getItem("taskLists")
  if (savedTasks) {
    taskLists.value = JSON.parse(savedTasks)
  } else if (serverTasks.value) {
    taskLists.value = [...serverTasks.value]
  }
})



function addTask() {
  if (task.value.trim() === '') return

  taskLists.value.push({
    id: Date.now(),
    text: task.value,
    isDone: false
  })

  task.value = '';
}

const pendingTasks = computed(() => {
  return taskLists.value.filter(item => !item.isDone).length
})

watch(taskLists, (newValue) => {
  if (process.client) {
    localStorage.setItem("taskLists", JSON.stringify(newValue))
  }
}, { deep: true })


function removeTask(index) {
  // console.log(index)
  taskLists.value.splice(index, 1)
}

// ใช้ computed สร้างข้อความ Title แบบอัตโนมัติ
const pageTitle = computed(() => {
  return `เหลือ ${pendingTasks.value} งาน - My Super Do`
})

// ยัดใส่ useHead
useHead({
  title: pageTitle, // พอตัวแปรเปลี่ยน Title ก็เปลี่ยนตาม!
  meta: [
    { name: 'description', content: 'จดบันทึกงานของคุณได้ที่นี่ ง่ายและฟรี' }
  ]
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
      <TaskItem v-for="(item, index) in taskLists" :key="item.id" :task="item" @delete-me="removeTask(index)" />
    </ul>
  </div>
</template>