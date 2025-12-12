<script setup>
const user = useSupabaseUser()

watch(user, () => {
  if (user.value) {
    return navigateTo('/')
  }
}, { immediate: true })

// (Optional) กรณีรอนานเกินไป (เช่น 5 วินาที) ให้ดีดกลับหน้า Login
// กัน User ค้างหน้านี้นานๆ

onMounted(() => {
  setTimeout(() => {
    if (!user.value) {
      alert('ยืนยันตัวตนไม่สำเร็จ หรือหมดเวลา กรุณาลองใหม่')
      navigateTo('/login')
    }
  }, 5000) // รอ 5 วินาที
})

</script>

<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-gray-50">
    <div class="text-center bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
      
      <h2 class="text-2xl font-bold text-gray-800 mb-2">กำลังยืนยันตัวตน... 🔐</h2>
      <p class="text-gray-500 mb-6">กรุณารอสักครู่ ระบบกำลังพาคุณเข้าสู่ระบบ</p>
      
      <div class="flex justify-center">
        <div class="animate-spin rounded-full h-10 w-10 border-4 border-gray-200 border-t-orange-500"></div>
      </div>

    </div>
  </div>
</template>