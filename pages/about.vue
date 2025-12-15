<script setup>
// กำหนด Meta Tags สำหรับ SEO
useHead({
  title: 'เกี่ยวกับเรา | My Super Do',
  meta: [
    { name: 'description', content: 'เบื้องหลังการพัฒนาแอป My Super Do ด้วย Nuxt 3 และ Supabase' }
  ]
})
</script>

<template>
  <div class="space-y-8">
    
    <section class="text-center space-y-4">
      <div class="inline-block p-3 bg-green-100 rounded-full mb-2">
        <span class="text-4xl">🚀</span>
      </div>
      <h1 class="text-3xl font-bold text-gray-800">เบื้องหลัง My Super Do</h1>
      <p class="text-gray-600 leading-relaxed max-w-lg mx-auto">
        My Super Do คือโปรเจกต์ "To-Do List" ที่พัฒนาขึ้นเพื่อฝึกฝนทักษะการทำเว็บแบบ 
        <strong class="text-green-600">Full-Stack Modern Web</strong> 
      </p>
    </section>

    <hr class="border-gray-100">

    <section>
      <h2 class="text-xl font-bold text-gray-700 mb-6 flex items-center gap-2">
        🛠️ Tech Stack ที่ใช้
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        <div class="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-green-50 transition border border-gray-100">
          <div class="text-3xl">💚</div>
          <div>
            <h3 class="font-bold text-gray-800">Nuxt 3</h3>
            <p class="text-sm text-gray-500">ใช้เป็น Core Framework หลัก ทำงานแบบ SSR (Server-Side Rendering) เพื่อ SEO ที่ดีเยี่ยม</p>
          </div>
        </div>

        <div class="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition border border-gray-100">
          <div class="text-3xl">🎨</div>
          <div>
            <h3 class="font-bold text-gray-800">Tailwind CSS</h3>
            <p class="text-sm text-gray-500">ตกแต่งหน้าตาเว็บไซต์ให้สวยงาม ทันสมัย และรองรับการแสดงผลบนมือถือ (Responsive)</p>
          </div>
        </div>

        <div class="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-emerald-50 transition border border-gray-100">
          <div class="text-3xl">⚡</div>
          <div>
            <h3 class="font-bold text-gray-800">Supabase</h3>
            <p class="text-sm text-gray-500">ฐานข้อมูล PostgreSQL ระดับโลก ใช้เก็บข้อมูล Task และจัดการระบบล็อกอิน (Auth)</p>
          </div>
        </div>

        <div class="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition border border-gray-100">
          <div class="text-3xl">🚀</div>
          <div>
            <h3 class="font-bold text-gray-800">Vercel</h3>
            <p class="text-sm text-gray-500">ระบบ Cloud Hosting ที่ทำให้เว็บนี้ออนไลน์ได้จริง รวดเร็วและเสถียร</p>
          </div>
        </div>

      </div>
    </section>

    <hr class="border-gray-100">

    <section>
      <h2 class="text-xl font-bold text-gray-700 mb-4">✨ ความสามารถหลัก</h2>
      <ul class="space-y-2 text-gray-600 list-disc list-inside bg-yellow-50 p-5 rounded-lg border border-yellow-100">
        <li>ระบบสมาชิก (Authentication) ผ่าน <strong>GitHub</strong></li>
        <li>ความปลอดภัยข้อมูลระดับสูงด้วย <strong>Row Level Security (RLS)</strong></li>
        <li>ข้อมูลส่วนตัว (งานของใครของมัน คนอื่นมองไม่เห็น)</li>
        <li>ป้องกันการลบข้อมูลผิดพลาดด้วย <strong>Confirmation Alert</strong></li>
        <li>รองรับการแสดงผลทุกหน้าจอ (Responsive Design)</li>
      </ul>
    </section>

    <section class="bg-gray-800 text-white p-6 rounded-xl text-center">
      <h2 class="text-lg font-bold mb-2">พัฒนาโดย 👨‍💻</h2>
      <p class="text-gray-300 mb-4">Panawat (Full-Stack Developer)</p>
      
      <div class="flex justify-center gap-3">
        <a href="https://github.com/FamPanawat" target="_blank" class="flex items-center gap-2 bg-white text-gray-800 px-4 py-2 rounded-full font-bold hover:bg-gray-200 transition text-sm">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          ติดตามผลงาน
        </a>
      </div>
    </section>

  </div>
</template>