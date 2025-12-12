<template>
  <div class="min-h-screen bg-gray-100 font-sans text-gray-900">
    
    <header class="bg-gray-700 text-white shadow-sm mb-8">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-xl font-bold text-green-600">📝 My Super Do</h1>
        <nav class="space-x-4">
          <NuxtLink to="/" class="hover:text-green-600 transition">หน้าแรก</NuxtLink>
          <NuxtLink to="/about" class="hover:text-green-600 transition">เกี่ยวกับเรา</NuxtLink>
        </nav>
      </div>
    </header>

    <main class="container mx-auto px-4 max-w-lg">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <slot />
      </div>
      
      <footer class="text-center text-gray-400 text-sm mt-8 pb-4">
        &copy; 2025 - Panawat
      </footer>
    </main>
  </div>
</template>