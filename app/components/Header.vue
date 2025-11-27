<template>
  <header class="site-header">
    <div class="container">
      <NuxtLink to="/" class="logo">
        <img src="https://theme.hstatic.net/200000065946/1001264503/14/logo.png?v=1347" alt="Logo" />
      </NuxtLink>

      <!-- Hamburger -->
      <div class="menu-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav class="nav-menu" :class="{ active: menuOpen }">
        <NuxtLink to="/" class="nav-item">Trang chủ</NuxtLink>
        <NuxtLink to="/products" class="nav-item">Sản phẩm</NuxtLink>
        <NuxtLink to="/about" class="nav-item">Về chúng tôi</NuxtLink>
        <NuxtLink to="/contact" class="nav-item">Liên hệ</NuxtLink>
        <NuxtLink to="/login" class="btn btn-success">Đăng nhập</NuxtLink>
        <NuxtLink to="/cart" class="btn btn-primary">Giỏ hàng</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>
