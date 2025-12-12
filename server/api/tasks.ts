// defineEventHandler เป็นคำสั่งมาตรฐานของ Nuxt ในการสร้าง API
export default defineEventHandler((event) => {
    
  const mockTasks = [
    { id: 111, text: 'เรียนรู้ Nuxt Server API', isDone: false },
    { id: 222, text: 'ลองยิง API ด้วย useFetch', isDone: false },
    { id: 333, text: 'กินข้าวผัดกะเพรา', isDone: true }
  ]

  
  return mockTasks
})