<template>
  <div class="container my-5 ">

    <h3 class="mb-4 title">Giỏ hàng của bạn</h3>

    <!-- Nếu giỏ hàng trống -->
    <div v-if="cartItems.length === 0" class="text-center py-5">
      <h5>Giỏ hàng đang trống!</h5>
      <NuxtLink to="/" class="btn btn-dark mt-3">Tiếp tục mua sắm</NuxtLink>
    </div>

    <!-- Danh sách sản phẩm -->
    <div v-else class="row">
      <div class="col-lg-8">

        <div
          class="card mb-3 shadow-sm"
          v-for="item in cartItems"
          :key="item.id"
        >
          <div class="row g-0">
            <div class="col-md-3">
              <img
                :src="item.image"
                class="img-fluid rounded-start"
                alt="product"
              />
            </div>

            <div class="col-md-9">
              <div class="card-body">

                <div class="d-flex justify-content-between align-items-start">
                  <h5 class="card-title">{{ item.name }}</h5>
                  <button class="btn btn-sm btn-outline-danger" @click="removeItem(item.id)">
                    X
                  </button>
                </div>

                <p class="text-muted mb-2">
                  {{ formatPrice(item.price) }}
                </p>

                <!-- Nút tăng giảm -->
                <div class="d-flex align-items-center">
                  <button class="btn btn-outline-secondary btn-sm" @click="changeQty(item.id, -1)">
                    -
                  </button>

                  <span class="mx-3">{{ item.qty }}</span>

                  <button class="btn btn-outline-secondary btn-sm" @click="changeQty(item.id, 1)">
                    +
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Thanh toán -->
      <div class="col-lg-4">
        <div class="card shadow p-3">
          <h5>Tổng thanh toán</h5>
          <hr />

          <div class="d-flex justify-content-between">
            <span>Tạm tính:</span>
            <strong>{{ formatPrice(subtotal) }}</strong>
          </div>

          <div class="d-flex justify-content-between mt-2">
            <span>Phí vận chuyển:</span>
            <strong>0₫</strong>
          </div>

          <hr />

          <div class="d-flex justify-content-between fs-5">
            <strong>Tổng:</strong>
            <strong>{{ formatPrice(subtotal) }}</strong>
          </div>

          <button class="btn btn-dark w-100 mt-4" @click="goCheckout">
            Tiến hành thanh toán
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// GIỎ HÀNG
const cartItems = ref([]);

// Load giỏ hàng từ localStorage
onMounted(() => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cartItems.value = JSON.parse(savedCart);
  }
});

// Lưu lại mỗi khi thay đổi
watch(cartItems, (newVal) => {
  localStorage.setItem("cart", JSON.stringify(newVal));
}, { deep: true });


// Format tiền
const formatPrice = (price) => {
  return price.toLocaleString("vi-VN") + "₫";
};


// Tăng / giảm số lượng
const changeQty = (id, amount) => {
  const item = cartItems.value.find((i) => i.id === id);

  if (!item) return;

  item.qty += amount;

  if (item.qty < 1) item.qty = 1;
};


// Xóa sản phẩm
const removeItem = (id) => {
  cartItems.value = cartItems.value.filter((i) => i.id !== id);
};


// Tính tổng tiền
const subtotal = computed(() => {
  return cartItems.value.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);
});


// Chuyển sang trang thanh toán
const goCheckout = () => {
  router.push("/checkout");
};
</script>
