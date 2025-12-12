<script setup>
const client = useSupabaseClient()
const user = useSupabaseUser()

const logout = async () => {
  await client.auth.signOut()
  navigateTo('/login')
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 font-sans text-gray-900">

    <header class="bg-gray-700 text-white shadow-md mb-8">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <h1 class="text-xl font-bold text-white">📝 My Super Do</h1>
        
        <ClientOnly>
          <nav class="flex items-center gap-4">
            
            <template v-if="user">
              <div class="space-x-4">
                <NuxtLink to="/" class="hover:text-green-400 transition" active-class="text-green-400 font-bold">
                  หน้าแรก
                </NuxtLink>
                <NuxtLink to="/about" class="hover:text-green-400 transition" active-class="text-green-400 font-bold">
                  เกี่ยวกับเรา
                </NuxtLink>
              </div>

              <div class="border-l border-gray-500 h-6 mx-2 hidden sm:block"></div>

              <div class="flex items-center gap-3">
                <span class="text-sm text-gray-300 hidden sm:block">{{ user.email }}</span>
                <button 
                  @click="logout" 
                  class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition shadow-md text-sm"
                >
                  Logout
                </button>
              </div>
            </template>

            <template v-else>
              <NuxtLink 
                to="/login" 
                class="text-white hover:text-green-400 font-bold transition"
              >
                เข้าสู่ระบบ
              </NuxtLink>
            </template>

          </nav>
        </ClientOnly>
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