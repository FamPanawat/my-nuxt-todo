<script setup>
// กำหนด Title และ Meta Description ของหน้านี้
useHead({
  title: 'เกี่ยวกับเรา | My Super Do',
  meta: [
    { name: 'description', content: 'รายละเอียดเกี่ยวกับแอป To-Do List สุดเทพ' }
  ]
})
</script>

<template>
    <div>
        <h1>เกี่ยวกับเรา</h1>
        <p>นี่คือแอป To-Do List ขั้นเทพที่สร้างด้วย Nuxt.js</p>

        <NuxtLink to="/">กลับหน้าหลัก</NuxtLink>
    </div>
</template>