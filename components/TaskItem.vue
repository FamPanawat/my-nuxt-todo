<script setup>
defineProps({ task: Object })
const emit = defineEmits(['delete-me'])
</script>

<template>
  <li class="flex justify-between items-center bg-gray-50 hover:bg-white p-3 rounded-md border border-gray-100 hover:shadow-md transition duration-200 group">
    
    <div class="flex items-center gap-3">
      <input 
        type="checkbox" 
        :id="'chk-' + task.id" 
        v-model="task.isDone"
        class="w-5 h-5 text-green-500 rounded focus:ring-green-500 cursor-pointer"
      >
      
      <label 
        :for="'chk-' + task.id" 
        class="cursor-pointer select-none text-lg transition-colors"
        :class="{ 'text-gray-400 line-through decoration-gray-400': task.isDone, 'text-gray-700': !task.isDone }"
      >
        {{ task.text }}
      </label>
    </div>

    <button 
      @click="$emit('delete-me')"
      class="text-red-400 hover:text-red-600 hover:bg-red-50 p-1 rounded transition opacity-0 group-hover:opacity-100"
      title="ลบทิ้ง"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </button>
  </li>
</template>