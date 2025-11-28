<template>
  <div class="container my-5 min-vh-100 d-flex justify-content-center align-items-center">
    <div class="card shadow p-4" style="max-width: 480px; width: 100%; border-radius: 16px;">
      <h4 class="text-center mb-4">Đăng ký tài khoản</h4>

      <!-- Thông báo lỗi -->
      <div v-if="errorMessage" class="alert alert-danger py-2">
        {{ errorMessage }}
      </div>

      <!-- Thông báo thành công -->
      <div v-if="successMessage" class="alert alert-success py-2">
        {{ successMessage }}
      </div>

      <form @submit.prevent="handleRegister">
        <div class="mb-3">
          <label class="form-label">Họ và tên</label>
          <input v-model="name" type="text" class="form-control" placeholder="Nhập họ tên" required />
        </div>

        <div class="mb-3">
          <label class="form-label">Email</label>
          <input v-model="email" type="email" class="form-control" placeholder="Nhập email" required />
        </div>

        <div class="mb-3">
          <label class="form-label">Năm sinh</label>
          <input v-model="birthyear" type="number" class="form-control" min="1900" max="2025" placeholder="VD: 2002" required />
        </div>

        <div class="mb-3">
          <label class="form-label">Số điện thoại</label>
          <input v-model="phone" type="text" class="form-control" placeholder="Nhập số điện thoại" required />
        </div>

        <div class="mb-3">
          <label class="form-label">Mật khẩu</label>
          <input v-model="password" type="password" class="form-control" placeholder="Nhập mật khẩu" required />
        </div>

        <div class="mb-3">
          <label class="form-label">Xác nhận mật khẩu</label>
          <input v-model="password_confirmation" type="password" class="form-control" placeholder="Nhập lại mật khẩu" required />
        </div>

        <button class="btn btn-dark w-100 mt-2" :disabled="loading">
          <span v-if="loading">Đang xử lý...</span>
          <span v-else>Đăng ký</span>
        </button>
      </form>

      <p class="text-center mt-3">
        Đã có tài khoản? <NuxtLink to="/login">Đăng nhập</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

useHead({
  title: "Đăng ký - Nội thất Moho",
});

const router = useRouter();

const name = ref("");
const email = ref("");
const birthyear = ref("");
const phone = ref("");
const password = ref("");
const password_confirmation = ref("");

const loading = ref(false);
const errorMessage = ref("");
const successMessage = ref("");

const handleRegister = async () => {
  errorMessage.value = "";
  successMessage.value = "";
  loading.value = true;

  if (password.value !== password_confirmation.value) {
    errorMessage.value = "Mật khẩu xác nhận không trùng khớp!";
    loading.value = false;
    return;
  }

  try {
    const { data, error } = await useFetch("https://your-laravel-domain.com/api/register", {
      method: "POST",
      body: {
        name: name.value,
        email: email.value,
        birthyear: birthyear.value,
        phone: phone.value,
        password: password.value,
        password_confirmation: password_confirmation.value,
      },
    });

    if (error.value) {
      errorMessage.value = error.value.data?.message || "Đăng ký thất bại!";
      loading.value = false;
      return;
    }

    successMessage.value = "Đăng ký thành công! Bạn có thể đăng nhập ngay.";
    
    setTimeout(() => {
      router.push("/login");
    }, 1200);

  } catch (err) {
    errorMessage.value = "Lỗi kết nối server!";
  }

  loading.value = false;
};
</script>
