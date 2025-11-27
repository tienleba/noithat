<template>
  <swiper
    :spaceBetween="30"
    :effect="'fade'"
    :loop="true"
    :navigation="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <a href="#">
        <img src="https://theme.hstatic.net/200000065946/1001264503/14/slideshow_3.jpg?v=1347" class="desk"/>
        <img src="https://theme.hstatic.net/200000065946/1001264503/14/slideshow_mb_4.jpg?v=1347" class="mob"/>
      </a>
    </swiper-slide>

    <swiper-slide>
      <a href="#">
        <img src="https://theme.hstatic.net/200000065946/1001264503/14/slideshow_4.jpg?v=1347" class="desk"/>
        <img src="https://theme.hstatic.net/200000065946/1001264503/14/slideshow_mb_8.jpg?v=1347" class="mob"/>
      </a>
    </swiper-slide>

    <swiper-slide>
      <a href="#">
        <img src="https://theme.hstatic.net/200000065946/1001264503/14/slideshow_3.jpg?v=1347" class="desk"/>
        <img src="https://theme.hstatic.net/200000065946/1001264503/14/slideshow_mb_3.jpg?v=1347" class="mob"/>
      </a>
    </swiper-slide>

    <swiper-slide>
      <a href="#">
        <img src="https://theme.hstatic.net/200000065946/1001264503/14/slideshow_8.jpg?v=1347" class="desk"/>
        <img src="https://theme.hstatic.net/200000065946/1001264503/14/slideshow_mb_8.jpg?v=1347" class="mob"/>
      </a>
    </swiper-slide>
  </swiper>
  <div class="container my-2 ">
    <div class="content" v-for="n in 1" :key="n">
      <div class="header-title d-flex justify-content-between align-items-center">
        <h4 class="title">Giá Siêu Tốt</h4>
        <a href="#" class="see-more">Xem thêm</a>
      </div>
      <div class="product-list row">
        <a href="#" class="product-item col-xl-3 col-lg-4 col-6" v-for="n in 4" :key="n">
          <div class="product-image">
            <img
              src="https://cdn.hstatic.net/products/200000065946/pro_nau_tu_ke_ngan_grenaa_noi_that_moho_641c8099c60f4a8181e5f3d5951b42b8_large.png"
              alt="Product Image" width="100%"
            />
          </div>
          <div class="product-info">
            <h5 class="product-name my-2">Sofa hiện đại</h5>
            <div class="price d-flex align-items-center">
               <p class="product-price">5,000,000 VND</p>
               <p class="original-price">7,000,000 VND</p>
            </div>
            <div class="vote-sold d-flex justify-content-between align-items-center">
              <div class="vote">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                (4.5)
              </div>
              <div class="sold">Đã bán : 100</div>
            </div>
          </div>
          <p class="sale">37%</p>
        </a>
      </div>
    </div>
    <div class="content" v-for="n in 1" :key="n">
      <div class="header-title d-flex justify-content-between align-items-center">
        <h4 class="title">Bán chạy</h4>
        <a href="#" class="see-more">Xem thêm</a>
      </div>
      <div class="product-list row">
        <a href="#" class="product-item col-xl-3 col-lg-4 col-6" v-for="n in 16" :key="n">
          <div class="product-image">
            <img
              src="https://cdn.hstatic.net/products/200000065946/pro_nau_tu_ke_ngan_grenaa_noi_that_moho_641c8099c60f4a8181e5f3d5951b42b8_large.png"
              alt="Product Image" width="100%"
            />
          </div>
          <div class="product-info">
            <h5 class="product-name my-2">Sofa hiện đại</h5>
            <div class="price d-flex align-items-center">
               <p class="product-price">5,000,000 VND</p>
               <p class="original-price">7,000,000 VND</p>
            </div>
            <div class="vote-sold d-flex justify-content-between align-items-center">
              <div class="vote">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                (4.5)
              </div>
              <div class="sold">Đã bán : 100</div>
            </div>
          </div>
          <p class="sale">37%</p>
        </a>
      </div>
    </div>
    <div class="info-1 d-flex justify-content-between my-4">
      <img src="https://theme.hstatic.net/200000065946/1001264503/14/background_banner_1.jpg?v=1347" alt="info-1" width="30%"/>
      <img src="https://theme.hstatic.net/200000065946/1001264503/14/background_banner_2.jpg?v=1347" alt="info-1" width="30%"/>
      <img src="https://theme.hstatic.net/200000065946/1001264503/14/background_banner_3.jpg?v=1347" alt="info-1" width="30%"/>
    </div>
    <div class="content" v-for="n in 1" :key="n">
      <div class="header-title d-flex justify-content-between align-items-center">
        <h4 class="title">Gợi ý</h4>
        <a href="#" class="see-more">Xem thêm</a>
      </div>
      <div class="product-list row">
        <a href="#" class="product-item col-xl-3 col-lg-4 col-6" v-for="n in 8" :key="n">
          <div class="product-image">
            <img
              src="https://cdn.hstatic.net/products/200000065946/pro_nau_tu_ke_ngan_grenaa_noi_that_moho_641c8099c60f4a8181e5f3d5951b42b8_large.png"
              alt="Product Image" width="100%"
            />
          </div>
          <div class="product-info">
            <h5 class="product-name my-2">Tủ Quần Áo Ubeda Ngăn Kệ 201 Có Gương Nhiều Kích Thước </h5>
            <div class="price d-flex align-items-center">
               <p class="product-price">5,000,000 VND</p>
               <p class="original-price">7,000,000 VND</p>
            </div>
            <div class="vote-sold d-flex justify-content-between align-items-center">
              <div class="vote">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                (4.5)
              </div>
              <div class="sold">Đã bán : 100</div>
            </div>
          </div>
          <p class="sale">37%</p>
        </a>
      </div>
    </div>
    <div class="info-2 d-flex justify-content-around my-4">
      <div class="info-item align-items-center d-flex flex-column">
        <img src="https://theme.hstatic.net/200000065946/1001264503/14/vice_item_1_thumb.png?v=1347" alt="service-1" width="50"/>
        <h5 class="mt-2">Giao hàng và lắp đặt</h5>
        <p>Miễn phí</p>
      </div>
      <div class="info-item align-items-center d-flex flex-column">
        <img src="https://theme.hstatic.net/200000065946/1001264503/14/vice_item_2_thumb.png?v=1347" alt="service-1" width="50"/>
        <h5 class="mt-2">Đổi trả 1 - 1</h5>
        <p>Miễn phí</p>
      </div>
      <div class="info-item align-items-center d-flex flex-column">
        <img src="https://theme.hstatic.net/200000065946/1001264503/14/vice_item_3_thumb.png?v=1347" alt="service-1" width="50"/>
        <h5 class="mt-2">Bảo hành lên đến 5 năm</h5>
        <p>Miễn phí</p>
      </div>
      <div class="info-item align-items-center d-flex flex-column">
        <img src="https://theme.hstatic.net/200000065946/1001264503/14/vice_item_4_thumb.png?v=1347" alt="service-1" width="50"/>
        <h5 class="mt-2">Tư vấn và thiết kế</h5>
        <p>Miễn phí</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "~/assets/scss/pages/index.scss";
</style>

<script setup>
  useHead({
    title: 'Nội thất Moho - Nội thất an toàn, tiện nghi , bảo hành 5 năm',
    meta: [
      { name: 'description', content: 'Oktaku' }
    ]
  })

  //swiper slider imports
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/css';

  import 'swiper/css/effect-fade';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  // import required modules
  import { EffectFade, Navigation, Autoplay, Pagination } from 'swiper/modules';
  const modules = [EffectFade, Navigation, Pagination , Autoplay];
</script>
