<template>
  <img
    class="banner w-100" src="https://file.hstatic.net/200000065946/collection/banner_web_1920x450-0410__1__6f2_c39476d703c04384bf6b292d1aef8d19_2048x2048.jpg" alt="Banner" width="100%" />
  <div class="container my-2 ">
    <div class="content" v-for="n in 1" :key="n">
      <div class="header-title d-flex justify-content-between align-items-center mb-4">
        <h4 class="title">Tất cả sản phẩm Moho</h4>
        <div class="sort d-flex align-items-center">
          <label for="sort-by" class="me-2 w-100">Sắp xếp theo:</label>
          <select name="sort-by" id="sort-by" class="form-select">
            <option value="default">Mặc định</option>
            <option value="price-asc">Giá: Thấp đến cao</option>
            <option value="price-desc">Giá: Cao đến thấp</option>
            <option value="name-asc">Sản phẩm mới nhất</option>
            <option value="name-desc">Sản phẩm bán chạy</option>
          </select>
        </div>  
      </div>
      <div class="product-list row">
        <a href="#" class="product-item col-xl-3 col-lg-4 col-6" v-for="n in 12" :key="n">
          <div class="product-image">
            <img
              src="https://cdn.hstatic.net/products/200000065946/pro_nau_tu_ke_ngan_grenaa_noi_that_moho_641c8099c60f4a8181e5f3d5951b42b8_large.png"
              alt="Product Image" width="100%"
            />
          </div>
          <div class="product-info">
            <h5 class="product-name my-2">Sofa hiện đại</h5>
            <div class="price d-flex align-items-center flex-wrap">
               <p class="product-price">5,000,000 VND</p>
               <p class="original-price">7,000,000 VND</p>
            </div>
            <div class="flex-wrap vote-sold d-flex justify-content-between align-items-center">
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
    <div class="info-2 d-flex flex-wrap justify-content-around my-4">
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
    <p>Nội Thất MOHO mang đến không gian sống hiện đại, tiện nghi và đầy cảm hứng với các sản phẩm nội thất thân thiện với môi trường, an toàn cho sức khỏe người sử dụng và đạt tiêu chuẩn chất lượng quốc tế. Chúng tôi cung cấp đa dạng các loại đồ nội thất cho mọi không gian: phòng khách sang trọng với sofa và bàn trà tinh tế, phòng ăn ấm cúng với bộ bàn ghế tiện lợi, phòng ngủ thư giãn với giường và tủ đa năng, phòng làm việc và văn phòng tối ưu hóa công năng, cùng các giải pháp tủ bếp thông minh giúp tổ chức không gian gọn gàng, tiện lợi.<br></br>

      Với MOHO, mỗi sản phẩm đều được thiết kế tỉ mỉ, chất liệu cao cấp, bền đẹp theo thời gian, mang lại sự hài lòng tuyệt đối cho khách hàng. Chúng tôi luôn đặt trải nghiệm người dùng lên hàng đầu, cam kết mang đến giải pháp nội thất vừa thẩm mỹ, vừa tiện ích, giúp không gian sống và làm việc của bạn trở nên hoàn hảo hơn.
    </p>
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
