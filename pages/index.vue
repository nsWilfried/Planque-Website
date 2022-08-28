<template>

  <div class="w-full h-auto ">

    <!-- banner -->
    <div class="main w-full h-screen flex flex-col justify-center items-center relative">



      <!-- swiper elements -->
      <div class="swiper  w-full h-full">

        <!-- overlay -->
        <div class="overlay w-full h-full bg-black text-white "></div>


        <div class="swiper-wrapper swiper_content_zindex">

          <div v-for="i in 6" :key="i" class="swiper-slide" :class="`slide--${i}`">

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
                    <span class="mt-4 text-xl text-white text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta odit veniam ullam sint cum
                      laboriosam nemo quod nihil saepe ab laudantium molestiae consectetur accusamus, vel ducimus
                      doloribus quaerat deleniti.
                    </span>
                  </div>



                  <!-- call to action -->
                  <div class="swiper_description bg-violet-200 flex justify-center  w-full p-5">
                    <button style="width: 230px;background:#bb1e32; padding: 20px 30px; "
                      class="inline-block text-center border border-transparent  py-3 px-8  text-white font-bold uppercase">Inscrivez-vous</button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        <!-- navigation -->
        <div class="swiper-button-prev bg-white ml-20 p-10 swiper_content_zindex"></div>
        <div class="swiper-button-next bg-white p-10 mr-20 swiper_content_zindex"></div>



      </div>
      <!-- swiper elements -->

      <!-- banner informations -->
      <div class="w-full relative  bg-green- flex justify-center items-center" style="height: 200px;">
        <div class="bg-white shadow-lg h-full flex" style="width: 1320px;position: absolute;top:-40%; z-index: 10000; ">
          <div class="flex justify-center items-center bg-blue- w-1/3">college</div>
          <div class="flex justify-center items-center bg-pink- w-1/3">lycee</div>
          <div class="hello flex justify-center items-center w-2/3  shadow-inner text-white p-5"
            style="background-color: #bb1e32;">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident aspernatur rerum quae illum aliquid iste
            a, iusto quisquam praesentium corrupti. In asperiores sapiente sint totam ipsa officiis dolore
            necessitatibus soluta!
          </div>
        </div>
      </div>
    </div>


    <div style="height: 600px; width: 1320px;"
      class="bg-red-300 container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
      <div class="  bg-gradient-to-r from-red- to-transparent">
        <div class="nobody">
          nobody
        </div>
      </div>
      <div class="rounded border-gray- h-24">
        hello mina
      </div>
    </div>


    <!-- atouts -->

    <section class="mx-auto container bg-white dark:bg-gray-900 pt-16">
      <div class="px-4 lg:px-0">
        <div role="contentinfo" class="flex items-center flex-col px-4">
          <h1 tabindex="0"
            class=" text-4xl lg:text-4xl pt-4 font-extrabold text-center leading-tight text-gray-800 dark:text-white lg:w-7/12 md:w-9/12 xl:w-5/12">
           Nos atouts</h1>
        </div>
      </div>
    </section>
    <section class="bg-indigo-700 py-12 mt-12">
      <div tabindex="0" aria-label="group of cards" class=" px-4 lg:px-0">
        <div class="mx-auto container flex flex-wrap px-2 lg:px-24">
          <div tabindex="0" aria-label="card 1"
            class=" flex sm:w-full md:w-1/2 lg:border-r md:border-r sm:border-r-0 border-indigo-400 pb-10 lg:pt-10">
            <div class=" flex flex-shrink-0 mr-5 text-white">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/indigo_bg_with_divider-svg1.svg" alt="drawer">
            </div>
            <div class="md:w-9/12 lg:w-9/12">
              <h2 tabindex="0" class=" text-lg font-semibold leading-5 text-white">Ready to use
                components</h2>
              <p tabindex="0" class=" text-base text-white leading-normal xl:w-10/12 pt-2">It provides
                a very simple start, no need to write a lot of code, you just import it and start the primitive
                components and create the ones you need.</p>
            </div>
          </div>
          <div tabindex="0" aria-label="card 2" class=" flex sm:w-full md:w-1/2 lg:pb-10 lg:pt-10">
            <div class=" flex flex-shrink-0 sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/indigo_bg_with_divider-svg2.svg" alt="check">
            </div>
            <div class="md:w-9/12 lg:w-9/12 ">
              <h2 tabindex="0" class=" text-lg font-semibold leading-5 text-white">Hight Quality UI
                you can reply on</h2>
              <p tabindex="0" class=" text-base text-white leading-normal xl:w-10/12 pt-2">Modify the
                visual appearance of your site – including colors, fonts, margins and other style-related properties –
                with a sophisticated style.</p>
            </div>
          </div>
          <div tabindex="0" aria-label="card 3"
            class=" flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 lg:border-r md:border-r sm:border-r-0 border-indigo-400 pt-10 lg:pb-20">
            <div class=" flex flex-shrink-0 mr-5 text-white">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/indigo_bg_with_divider-svg3.svg" alt="html-tag">
            </div>
            <div class="md:w-9/12 lg:w-9/12 ">
              <h2 tabindex="0" class=" text-lg font-semibold leading-5 text-white">Coded by Developers
                for Developers</h2>
              <p tabindex="0" class=" text-base text-white leading-normal xl:w-10/12 pt-2">Instead of
                just giving you the tools to create your own site, they offer you a list of themes you can choose from.
                Thus a handy product.</p>
            </div>
          </div>
          <div tabindex="0" aria-label="card 4"
            class=" flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 border-indigo-400 pt-10 lg:pb-20">
            <div class=" flex flex-shrink-0 sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/indigo_bg_with_divider-svg4.svg" alt="display">
            </div>
            <div class="md:w-9/12 lg:w-9/12 ">
              <h2 tabindex="0" class=" text-lg font-semibold leading-5 text-white">The Last UI kit
                you’ll ever need</h2>
              <p tabindex="0" class=" text-base text-white leading-normal xl:w-10/12 pt-2">We have
                chosen the bright color palettes that arouse the only positive emotions. The kit that simply assures to
                be loved by everyone.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- quelques chiffres  -->

    <div class="mx-auto container py-12">
      <div role="list" aria-label="Our stats."
        class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div role="listitem" class="flex justify-center w-full lg:border-r border-gray-300 py-6">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4_col_with%20_icons-svg1.svg" alt="profile" />

          <div class="text-gray-800 dark:text-white pl-12 w-1/2">
            <h1 class="font-bold text-2xl lg:text-5xl tracking-1px">450</h1>
            <h2 class="text-base lg:text-lg mt-4 leading-8 tracking-wide">Happy Clients.</h2>
          </div>
        </div>
        <div role="listitem" class="flex justify-center w-full lg:border-r border-gray-300 py-6">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4_col_with%20_icons-svg2.svg" alt="ambulance" />

          <div class="text-gray-800 dark:text-white w-1/2 pl-12">
            <h1 class="font-bold text-2xl lg:text-5xl tracking-1px">10+</h1>
            <h2 class="text-base lg:text-lg mt-4 leading-8 tracking-wide">Insurance Solutions</h2>
          </div>
        </div>
        <div role="listitem" class="flex justify-center w-full lg:border-r border-gray-300 py-6">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4_col_with%20_icons-svg3.svg" alt="clock" />

          <div class="text-gray-800 dark:text-white w-1/2 pl-12">
            <h1 class="font-bold text-2xl lg:text-5xl tracking-1px">35</h1>
            <h2 class="text-base lg:text-lg mt-4 leading-8 tracking-wide">Years of Experience</h2>
          </div>
        </div>
        <div role="listitem" class="flex justify-center w-full py-6">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4_col_with%20_icons-svg4.svg" alt="cube" />

          <div class="text-gray-800 dark:text-white w-1/2 pl-12">
            <h1 class="font-bold text-2xl lg:text-5xl tracking-1px">530</h1>
            <h2 class="text-base lg:text-lg mt-4 leading-8 tracking-wide">Projects Completed</h2>
          </div>
        </div>
      </div>
    </div>


    <!-- actualités -->
    <section class="pt-20 pb-36 bg-red-400 overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="md:max-w-lg mx-auto text-center mb-20">
          <h2 class="mb-4 font-heading font-semibold text-white text-6xl sm:text-7xl">Actualités</h2>
          <p class="text-lg text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim.</p>
        </div>
        <div class="flex flex-wrap -m-3">
          <div class="w-full md:w-1/2 xl:w-1/4 p-3">
            <a class="group" href="#">
              <div class="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
                <img class="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500"
                  src="gradia-assets/images/blog/blog1.png" alt="">
                <div class="absolute bottom-0 left-0 w-full p-2.5">
                  <div class="p-5 w-full bg-black bg-opacity-80 rounded-md">
                    <h2 class="mb-2 font-heading font-medium text-xs uppercase text-gray-400 tracking-px">Technology . 4
                      min read</h2>
                    <p class="font-heading font-semibold text-lg text-white group-hover:underline">You will never
                      believe these bizarre truth of travel.</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/4 p-3">
            <a class="group" href="#">
              <div class="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
                <img class="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500"
                  src="gradia-assets/images/blog/blog2.png" alt="">
                <div class="absolute bottom-0 left-0 w-full p-2.5">
                  <div class="p-5 w-full bg-black bg-opacity-80 rounded-md">
                    <h2 class="mb-2 font-heading font-medium text-xs uppercase text-gray-400 tracking-px">Technology . 4
                      min read</h2>
                    <p class="font-heading font-semibold text-lg text-white group-hover:underline">You will never
                      believe these bizarre truth of travel.</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/4 p-3">
            <a class="group" href="#">
              <div class="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
                <img class="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500"
                  src="gradia-assets/images/blog/blog3.png" alt="">
                <div class="absolute bottom-0 left-0 w-full p-2.5">
                  <div class="p-5 w-full bg-black bg-opacity-80 rounded-md">
                    <h2 class="mb-2 font-heading font-medium text-xs uppercase text-gray-400 tracking-px">Technology . 4
                      min read</h2>
                    <p class="font-heading font-semibold text-lg text-white group-hover:underline">You will never
                      believe these bizarre truth of travel.</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/4 p-3">
            <a class="group" href="#">
              <div class="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
                <img class="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500"
                  src="gradia-assets/images/blog/blog4.png" alt="">
                <div class="absolute bottom-0 left-0 w-full p-2.5">
                  <div class="p-5 w-full bg-black bg-opacity-80 rounded-md">
                    <h2 class="mb-2 font-heading font-medium text-xs uppercase text-gray-400 tracking-px">Technology . 4
                      min read</h2>
                    <p class="font-heading font-semibold text-lg text-white group-hover:underline">You will never
                      believe these bizarre truth of travel.</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- citation  -->
    <div class="w-full h-auto flex bg-green-">
      <figure class="mx-auto citation bg-red- mt-3 mb-3 max-w-screen-md flex flex-col  justify-center items-center text-center">
        <svg aria-hidden="true" class="mx-auto mb-3 w-12 h-12 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor" />
        </svg>
        <blockquote>
          <p class="text-2xl italic font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains
            tons
            of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your
            next SaaS application."</p>
        </blockquote>
        <figcaption class="flex justify-center items-center mt-6 space-x-3">
          <img class="w-6 h-6 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture">
          <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
            <cite class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</cite>
          </div>
        </figcaption>
      </figure>
    </div>


    <CTA />

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
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.swiper_content_zindex {
  z-index: 50000000;
}

.nobody {

  // background:
    // url("~assets/imgs/pereplanque.png");
  background-size: cover;
  width: 100%;
  height: 100%;
  color: white;
}

.citation {
  height: 500px;
}
</style>