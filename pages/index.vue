<template>

  <div class="w-full h-auto">
    <div class="main w-full h-screen flex flex-col justify-center items-center " >

      <!-- swiper elements -->
      <div class="swiper  w-full h-full">

        <div class="swiper-wrapper ">

          <div v-for="i in 6" :key="i" class="swiper-slide" :class="`slide--${i}`">
        <!-- <div class="overlay w-full h-full bg-black text-white "> </div> -->

            <div class="w-full h-full flex justify-center items-center">
              <div class="bg- h-full flex justify-center items-center" style="width:1320px;">

                <div class="w-full bg-green-" style="height:400px;">
                  <!-- title -->
                  <div class="swiper_title w-full bg-yellow- flex justify-center items-center p-5">
                    <span
                      class="text-4xl font font-bold tracking-tight text-white sm:tracking-tight sm:text-7xl text-center">Bienvenue
                      sur le site du CPAP {{ i }}</span>
                  </div>

                  <!-- description -->
                  <div class="swiper_description bg-red- flex justify-center  w-full p-5">
                    <span class="mt-4 text-xl text-gray-500 text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta odit veniam ullam sint cum
                      laboriosam nemo quod nihil saepe ab laudantium molestiae consectetur accusamus, vel ducimus
                      doloribus quaerat deleniti.
                    </span>
                  </div>

                  

                  <!-- call to action -->
                  <div class="swiper_description bg-violet-200 flex justify-center  w-full p-5">
                    <button
                    style="width: 200px;background:#bb1e32;border-radius: 20px;"
                      class="inline-block text-center border border-transparent  py-3 px-8  text-white font-bold">Inscrivez-vous</button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        <!-- If navigation buttons are needed -->
        <div class="swiper-button-prev bg-white p-10"></div>
        <div class="swiper-button-next bg-white p-10"></div>



      </div>
      <!-- swiper elements -->

      <!-- banner informations -->
      <div class="w-full relative  bg-green- flex justify-center items-center" style="height: 200px;">
        <div class="bg-white shadow-lg h-full flex" style="width: 1320px;position: absolute;top:-40%; z-index: 10000; ">
          <div class="flex justify-center items-center bg-blue- w-1/3">college</div>
          <div  class="flex justify-center items-center bg-pink- w-1/3">lycee</div>
          <div class="hello flex justify-center items-center w-2/3 p-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident aspernatur rerum quae illum aliquid iste a, iusto quisquam praesentium corrupti. In asperiores sapiente sint totam ipsa officiis dolore necessitatibus soluta!
          </div>
        </div>
      </div>
    </div>


  </div>


</template>

<script>
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'IndexPage',
  components: {
    Swiper,
  },
  layout: 'page',
  mounted() {
    Swiper.use([Navigation, Pagination, Autoplay])

    //swiper config
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      direction: 'horizontal',
      loop: true,
      // remove unused modules if needed
      modules: [Navigation, Pagination, Autoplay],
      // Pagination if needed
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      // Autoplay if needed
      autoplay: {
        delay: 3000
      },
      // Navigation arrows if needed
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
      // Configure other options. Not tested
    })
  },

  data() {
    return {

    }
  },
}
</script>

<style lang="scss">
.swiper {
  background-image: url("../assets/imgs/banner.jpg");
  background-size: cover;
  background-position: center;
}
.overlay {
  opacity: 0.3;
}
</style>