<template>

  <div class="main w-full h-screen bg-red-400 flex justify-center items-center ">
    <div class="swiper bg-red-400 w-full h-full">
    <div class="swiper-wrapper">
      <div v-for="i in 6" :key="i" class="swiper-slide" :class="`slide--${i}`">
      <div class="w-full h-full flex justify-center items-center">
        <div class="bg- h-full flex justify-center items-center" style="width:1320px;">

        <div class="w-full bg-green-" style="height:400px;">
          <!-- title -->
          <div class="swiper_title w-full bg-yellow- flex justify-center items-center p-5">
            <span class="text-4xl font font-bold tracking-tight text-gray-900 sm:tracking-tight sm:text-7xl text-center">Bienvenue sur le site du CPAP {{i}}</span>
          </div>

          <!-- description -->
          <div class="swiper_description bg-red- flex justify-center  w-full p-5">
            <span class="mt-4 text-xl text-gray-500 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta odit veniam ullam sint cum laboriosam nemo quod nihil saepe ab laudantium molestiae consectetur accusamus, vel ducimus doloribus quaerat deleniti.
            </span>
          </div>

          <!-- call to action -->
          <div class="swiper_description bg-violet-200 flex justify-center  w-full p-5">
            <button class="inline-block text-center bg-indigo-600 border border-transparent rounded-lg  py-3 px-8 font-medium text-white font-bold">Inscrivez-vous dès maintenant</button>
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

</style>