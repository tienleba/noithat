<template>
  <img
    class="banner w-100" src="https://file.hstatic.net/200000065946/collection/banner_web_1920x450-0410__1__6f2_c39476d703c04384bf6b292d1aef8d19_2048x2048.jpg" alt="Banner" width="100%" />
  <div class="container my-2 ">
    <div class="content" v-for="n in 1" :key="n">
      <div class="header-title d-flex justify-content-between align-items-center mb-4">
        <h4 class="title">Giới thiệu Moho</h4>
      </div>
      <p class="text-gray-700 leading-relaxed">
        Nội Thất MOHO là thương hiệu nội thất hiện đại, thân thiện với môi trường và an toàn cho sức khỏe.
        Chúng tôi cung cấp đa dạng sản phẩm nội thất cao cấp cho phòng khách, phòng ngủ, phòng ăn, văn phòng
        và không gian sống khác. Với phương châm “Chất lượng quốc tế – Giá thành hợp lý”, MOHO cam kết mang
        đến cho khách hàng trải nghiệm tốt nhất.
      </p>

      <p class="mt-3 text-gray-700 leading-relaxed">
        Đội ngũ thiết kế của MOHO luôn sáng tạo, cập nhật xu hướng mới nhất, kết hợp với vật liệu bền vững
        nhằm tạo ra các sản phẩm đẹp mắt, tinh tế và phù hợp với nhu cầu của gia đình Việt.
      </p>

    <div class="header-title d-flex justify-content-between align-items-center mb-4">
        <h4 class="title">Thông tin chi tiết</h4>
    </div>

    <ul class="text-gray-700 space-y-2">
        <li><strong>Tên công ty:</strong> Công Ty TNHH Nội Thất MOHO</li>
        <li><strong>Mã số thuế:</strong> 0123456789</li>
        <li><strong>Hotline:</strong> 1900 1234</li>
        <li><strong>Email:</strong> contact@moho.com.vn</li>
        <li><strong>Website:</strong> https://moho.com.vn</li>
        <li><strong>Địa chỉ:</strong>Số 26 nghách 487/7 Cổ Nhuế 2 , Bắc Từ Liêm , Hà Nội</li>
    </ul>
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
  </div>
   <div class="rounded-xl overflow-hidden shadow-lg">
        <iframe
        width="100%"
        height="700"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        style="border:0"
        loading="lazy"
        allowfullscreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.0905442824946!2d105.77468917503258!3d21.069045580590373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134552c314672e5%3A0xa10f1a48d5077c65!2zNDg3LzcgxJAuIEPhu5UgTmh14bq_LCBD4buVIE5odeG6vywgQuG6r2MgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1764249927560!5m2!1svi!2s"></iframe>
    </div>
</template>

<style lang="scss">
@use "~/assets/scss/pages/index.scss";
</style>

<script setup>
  useHead({
    title: 'Giớ thiệu Moho - Nội thất Moho',
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
