// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],

  supabase: {
    // ลบบรรทัด redirect: false ทิ้งไปเลย หรือแก้เป็น true
    redirectOptions: {
      login: '/login', // บอก Nuxt ว่าถ้ายังไม่ล็อกอิน ให้ดีดมาหน้านี้
      callback: '/confirm', // หน้าสำหรับยืนยันตัวตน (ไม่ต้องสร้างไฟล์ก็ได้ เดี๋ยว Nuxt จัดการให้)
      exclude: [] // หน้าที่ยกเว้น (ถ้ามี)
    }
  }

})