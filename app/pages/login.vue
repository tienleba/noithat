<template>
  <div class="container my-5 min-vh-100 d-flex justify-content-center align-items-center">
    <div class="card shadow p-4" style="max-width: 420px; width: 100%; border-radius: 16px;">
      <h4 class="text-center mb-4">Đăng nhập</h4>

      <!-- Thông báo lỗi -->
      <div v-if="errorMessage" class="alert alert-danger py-2">
        {{ errorMessage }}
      </div>

      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            placeholder="Nhập email của bạn"
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Mật khẩu</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            placeholder="Nhập mật khẩu"
            required
          />
        </div>

        <button class="btn btn-dark w-100 mt-2" :disabled="loading">
          <span v-if="loading">Đang đăng nhập...</span>
          <span v-else>Đăng nhập</span>
        </button>
      </form>

      <p class="text-center mt-3">
        Chưa có tài khoản? <NuxtLink to="/register">Đăng ký ngay</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

useHead({
  title: "Đăng nhập - Nội thất Moho",
  meta: [{ name: "description", content: "Trang đăng nhập người dùng" }],
});

const router = useRouter();

const email = ref("");
const password = ref("");
const loading = ref(false);
const errorMessage = ref("");

const handleLogin = async () => {
  loading.value = true;
  errorMessage.value = "";

  try {
    const { data, error } = await useFetch("https://your-laravel-domain.com/api/login", {
      method: "POST",
      body: {
        email: email.value,
        password: password.value,
      },
    });

    if (error.value) {
      errorMessage.value = "Sai email hoặc mật khẩu!";
      loading.value = false;
      return;
    }

    localStorage.setItem("token", data.value.token);

    router.push("/");
  } catch (err) {
    errorMessage.value = "Lỗi kết nối tới server!";
  }

  loading.value = false;
};
</script>
