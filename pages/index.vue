<template>
  <div class="w-full h-auto">
    <!-- banner -->
    <div
      class="main w-full h-screen bg-blue-600 flex flex-col justify-center items-center relative"
    >
      <!-- swiper elements -->
      <div class="swiper w-full h-full">
        <!-- overlay -->
        <div class="overlay w-full h-full bg-black text-white"></div>

        <div class="swiper-wrapper swiper_content_zindex">
          <div
            v-for="i in 6"
            :key="i"
            class="swiper-slide"
            :class="`slide--${i}`"
          >
            <div class="w-full h-full flex justify-center items-center">
              <div
                class="bg- h-full flex justify-center items-center"
                style="width: 1320px"
              >
                <div class="w-full bg-green-" style="height: 400px">
                  <!-- title -->
                  <div
                    class="swiper_title w-full bg-yellow- flex justify-center items-center p-5"
                  >
                    <span
                      class="text-4xl font font-bold tracking-tight text-white sm:tracking-tight sm:text-7xl text-center"
                      >Bienvenue sur le site du CPAP {{ i }}</span
                    >
                  </div>

                  <!-- description -->
                  <div
                    class="swiper_description bg-red- flex justify-center w-full p-5"
                  >
                    <span class="mt-4 text-xl text-white text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur dicta odit veniam ullam sint cum laboriosam nemo
                      quod nihil saepe ab laudantium molestiae consectetur
                      accusamus, vel ducimus doloribus quaerat deleniti.
                    </span>
                  </div>

                  <!-- call to action -->
                  <div
                    class="swiper_description bg-violet-200 flex justify-center w-full p-5"
                  >
                    <button
                      style="
                        width: 230px;
                        background: #bb1e32;
                        padding: 20px 30px;
                      "
                      class="inline-block text-center border border-transparent py-3 px-8 text-white font-bold uppercase"
                    >
                      Inscrivez-vous
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- navigation -->
        <div
          class="swiper-button-prev bg-white ml-10 p-8 swiper_content_zindex"
        ></div>
        <div
          class="swiper-button-next bg-white p-8 mr-10 swiper_content_zindex"
        ></div>
      </div>
      <!-- swiper elements -->
    </div>

    <!-- banner informations -->
    <div
      class="w-full relative banner__informations bg-green- flex justify-center items-center"
    >
      <div class="bg-white shadow-lg h-full flex banner__informations__content">
        <!--college-->
        <div
          class="flex banner__info justify-center items-center bg-blue- w-1/3 p-6"
        >
          <div class="grid grid-rows-3">
            <div class="w-full flex items-center bg-red-">
              <h2 class="text-3xl capitalize">collège</h2>
            </div>

            <div class="bg-green-">
              <span
                >Lorem ipsum, dolor sit amet consectetur adipisicing elit.is
                illo nesciunt culpa possimus.
              </span>
            </div>

            <div class="flex items-center bg-red-">
              <button
                class="w-32 bg-transparent border-white border border-3 bg-white text-black p-3"
              >
                En lire plus
              </button>
            </div>
          </div>
        </div>

        <!-- information urgente -->
        <div
          class="flex banner__info justify-center items-center w-2/3 shadow-inner text-white p-5"
          style="background: #1c2e5e"
        >
          <div class="w-2/3 bg-blue text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            aspernatur rerum quae illum aliquid iste a, iusto quisquam
            praesentium corrupti. In asperiores sapiente sint totam ipsa
            officiis dolore necessitatibus soluta!
          </div>
        </div>

        <!-- lycee -->

        <div
          class="flex banner__info justify-center items-center bg-blue- w-1/3 p-6"
        >
          <div class="grid grid-rows-3">
            <div class="w-full flex items-center bg-red-">
              <h2 class="text-3xl capitalize">Lycée</h2>
            </div>

            <div class="bg-green-">
              <span
                >Lorem ipsum, dolor sit amet consectetur adipisicing elit.is
                illo nesciunt culpa possimus.
              </span>
            </div>

            <div class="flex items-center bg-red-">
              <button
                class="w-32 bg-transparent border-white border border-3 bg-white text-black p-3"
              >
                En lire plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- introduction -->
    <div
      class="bg-red- introduction container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8"
    >
      <!-- image -->
      <div class="bg-gradient-to-r from-red- to-transparent">
        <section class="text-gray-600 body-font">
          <div
            class="container introduction__image px-5 py-24 mx-auto flex flex-wrap"
          >
            <div class="lg:w-2/3 mx-auto">
              <div
                class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4"
              >
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src="../assets/imgs/banner.jpg"
                />
                <div class="text-center relative z-10 w-full">
                  <h2
                    class="text-2xl text-gray-900 font-medium title-font mb-2"
                  >
                    Shooting Stars
                  </h2>
                  <p class="leading-relaxed">
                    Skateboard +1 mustache fixie paleo lumbersexual.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- stepper -->
      <div class="rounded border-gray- flex justify-center items-center h-full">
        <div class="introduction__stepper">
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li
              v-for="element of presentation"
              :key="element.name"
              class="mb-10 ml-6"
            >
              <span
                class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-red-400 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
              >
                {{ element.icon }}
              </span>
              <h3
                class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
              >
                {{ element.title }}
              </h3>

              <p
                class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
              >
                {{ element.description }}
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>

    <!-- atouts -->

    <section class="mx-auto container bg-white dark:bg-gray-900 pt-16">
      <div class="px-4 lg:px-0">
        <div role="contentinfo" class="flex items-center flex-col px-4">
          <h1
            tabindex="0"
            class="text-4xl lg:text-4xl pt-4 font-extrabold text-center leading-tight text-gray-800 dark:text-white lg:w-7/12 md:w-9/12 xl:w-5/12"
          >
            Nos atouts
          </h1>
        </div>
      </div>
    </section>
    <section class="bg-indigo-700 py-12 mt-20">
      <div class="px-4 lg:px-0">
        <div class="mx-auto container flex flex-wrap px-2 md:px-24">
          <div
            class="flex sm:w-full md:w-1/2 lg:border-r md:border-r sm:border-r-0 border-indigo-400 pb-10 lg:pt-10"
          >
            <div class="mr-5 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="3" y="4" width="18" height="4" rx="2" />
                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                <line x1="10" y1="12" x2="14" y2="12" />
              </svg>
            </div>
            <div class="md:w-9/12 lg:w-9/12 mt-1">
              <h4 class="text-lg font-bold leading-tight text-white">
                Ready to use components
              </h4>
              <p class="text-base text-white leading-normal xl:w-10/12 pt-2">
                It provides a very simple start, no need to write a lot of code,
                you just import it and start the primitive components and create
                the ones you need.
              </p>
            </div>
          </div>
          <div class="flex sm:w-full md:w-1/2 lg:pb-10 lg:pt-10">
            <div class="sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2l4 -4" />
              </svg>
            </div>
            <div class="md:w-9/12 lg:w-9/12 mt-1">
              <h4 class="text-lg font-bold leading-tight text-white">
                Hight Quality UI you can reply on
              </h4>
              <p class="text-base text-white leading-normal xl:w-10/12 pt-2">
                Modify the visual appearance of your site – including colors,
                fonts, margins and other style-related properties – with a
                sophisticated style.
              </p>
            </div>
          </div>
          <div
            class="flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 lg:border-r md:border-r sm:border-r-0 border-indigo-400 pt-10 lg:pb-20"
          >
            <div class="mr-5 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="7 8 3 12 7 16" />
                <polyline points="17 8 21 12 17 16" />
                <line x1="14" y1="4" x2="10" y2="20" />
              </svg>
            </div>
            <div class="md:w-9/12 lg:w-9/12 mt-1">
              <h4 class="text-lg font-bold leading-tight text-white">
                Coded by Developers for Developers
              </h4>
              <p class="text-base text-white leading-normal xl:w-10/12 pt-2">
                Instead of just giving you the tools to create your own site,
                they offer you a list of themes you can choose from. Thus a
                handy product.
              </p>
            </div>
          </div>
          <div
            class="flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 border-indigo-400 pt-10 lg:pb-20"
          >
            <div class="sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="3" y="4" width="18" height="12" rx="1" />
                <line x1="7" y1="20" x2="17" y2="20" />
                <line x1="9" y1="16" x2="9" y2="20" />
                <line x1="15" y1="16" x2="15" y2="20" />
              </svg>
            </div>
            <div class="md:w-9/12 lg:w-9/12 mt-1">
              <h4 class="text-lg font-bold leading-tight text-white">
                The Last UI kit you’ll ever need
              </h4>
              <p class="text-base text-white leading-normal xl:w-10/12 pt-2">
                We have chosen the bright color palettes that arouse the only
                positive emotions. The kit that simply assures to be loved by
                everyone.
              </p>
            </div>
          </div>
          <div
            class="flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 border-indigo-400 pt-10 lg:pb-20"
          >
            <div class="sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="3" y="4" width="18" height="12" rx="1" />
                <line x1="7" y1="20" x2="17" y2="20" />
                <line x1="9" y1="16" x2="9" y2="20" />
                <line x1="15" y1="16" x2="15" y2="20" />
              </svg>
            </div>
            <div class="md:w-9/12 lg:w-9/12 mt-1">
              <h4 class="text-lg font-bold leading-tight text-white">
                The Last UI kit you’ll ever need
              </h4>
              <p class="text-base text-white leading-normal xl:w-10/12 pt-2">
                We have chosen the bright color palettes that arouse the only
                positive emotions. The kit that simply assures to be loved by
                everyone.
              </p>
            </div>
          </div>
          <div
            class="flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 border-indigo-400 pt-10 lg:pb-20"
          >
            <div class="sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="3" y="4" width="18" height="12" rx="1" />
                <line x1="7" y1="20" x2="17" y2="20" />
                <line x1="9" y1="16" x2="9" y2="20" />
                <line x1="15" y1="16" x2="15" y2="20" />
              </svg>
            </div>
            <div class="md:w-9/12 lg:w-9/12 mt-1">
              <h4 class="text-lg font-bold leading-tight text-white">
                The Last UI kit you’ll ever need
              </h4>
              <p class="text-base text-white leading-normal xl:w-10/12 pt-2">
                We have chosen the bright color palettes that arouse the only
                positive emotions. The kit that simply assures to be loved by
                everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- quelques chiffres  -->

    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">400</h6>
          <p
            class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base"
          >
            Elèves
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">20</h6>
          <p
            class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base"
          >
            salles de classe
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">90%</h6>
          <p
            class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base"
          >
            réussite au bac
          </p>
        </div>
        <div class="text-center">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">24.5K</h6>
          <p
            class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base"
          >
            Cookies
          </p>
        </div>
      </div>
    </div>

    <!-- actualités -->
    <section class="pt-20 bg-red- overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="md:max-w-lg mx-auto text-center mb-20">
          <h2 class="mb-4 font-heading font-semibold text-6xl sm:text-7xl">
            Actualités
          </h2>
          <p class="text-lg text-gray-400">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim.
          </p>
        </div>
        <div
          class="px-4 bg-green- mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
        >
          <div
            class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
          >
            <div
              class="overflow-hidden transition-shadow duration-300 bg-white rounded"
            >
              <a href="/" aria-label="Article"
                ><img
                  src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  class="object-cover w-full h-64 rounded"
                  alt=""
              /></a>
              <div class="py-5">
                <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
                  13 Jul 2020
                </p>
                <a
                  href="/"
                  aria-label="Article"
                  class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p class="text-2xl font-bold leading-5">Diving to the deep</p>
                </a>
                <p class="mb-4 text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit sed quia
                  consequuntur magni voluptatem doloremque.
                </p>
              </div>
            </div>
            <div
              class="overflow-hidden transition-shadow duration-300 bg-white rounded"
            >
              <a href="/" aria-label="Article"
                ><img
                  src="https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                  class="object-cover w-full h-64 rounded"
                  alt=""
              /></a>
              <div class="py-5">
                <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
                  4 Nov 2020
                </p>
                <a
                  href="/"
                  aria-label="Article"
                  class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p class="text-2xl font-bold leading-5">Conquer the World</p>
                </a>
                <p class="mb-4 text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit sed quia
                  consequuntur magni voluptatem doloremque.
                </p>
              </div>
            </div>
            <div
              class="overflow-hidden transition-shadow duration-300 bg-white rounded"
            >
              <a href="/" aria-label="Article"
                ><img
                  src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  class="object-cover w-full h-64 rounded"
                  alt=""
              /></a>
              <div class="py-5">
                <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
                  28 Dec 2020
                </p>
                <a
                  href="/"
                  aria-label="Article"
                  class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p class="text-2xl font-bold leading-5">
                    Explore the beautiful
                  </p>
                </a>
                <p class="mb-4 text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit sed quia
                  consequuntur magni voluptatem doloremque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- citation  -->
    <div class="w-full h-auto flex bg-green-">
      <figure
        class="mx-auto citation bg-red- mt-3 mb-3 max-w-screen-md flex flex-col justify-center items-center text-center"
      >
        <svg
          aria-hidden="true"
          class="mx-auto mb-3 w-12 h-12 text-gray-400 dark:text-gray-600"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <blockquote>
          <p class="text-2xl italic font-medium text-gray-900 dark:text-white">
            "Flowbite is just awesome. It contains tons of predesigned
            components and pages starting from login screen to complex
            dashboard. Perfect choice for your next SaaS application."
          </p>
        </blockquote>
        <figcaption class="flex justify-center items-center mt-6 space-x-3">
          <img
            class="w-6 h-6 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            alt="profile picture"
          />
          <div
            class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700"
          >
            <cite class="pr-3 font-medium text-gray-900 dark:text-white"
              >Micheal Gough</cite
            >
            <cite
              class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400"
              >CEO at Google</cite
            >
          </div>
        </figcaption>
      </figure>
    </div>

    <CTA />
    <contact-form />
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import ContactForm from "../components/ContactForm.vue";

export default {
  name: "IndexPage",
  components: {
    Swiper,
    ContactForm,
  },
  layout: "page",
  mounted() {
    Swiper.use([Navigation, Pagination, Autoplay]);

    //swiper config
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      direction: "horizontal",
      loop: true,
      // remove unused modules if needed
      modules: [Navigation, Pagination, Autoplay],
      // Pagination if needed
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      // Autoplay if needed
      autoplay: {
        delay: 3000,
      },
      // Navigation arrows if needed
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // Configure other options. Not tested
    });
  },

  data() {
    return {
      presentation: [
        {
          title: "Objectif",

          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestiae earum molestias labore ipsa, ad, velit error doloremque neque id corrupti perferendis! Nisi totam autem quos eaque! Deserunt, voluptas earum.",
          icon: "",
        },
        {
          title: "Identité",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestiae earum molestias labore ipsa, ad, velit error doloremque neque id corrupti perferendis! Nisi totam autem quos eaque! Deserunt, voluptas earum.",
          icon: "",
        },
        {
          title: "Devise",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestiae earum molestias labore ipsa, ad, velit error doloremque neque id corrupti perferendis! Nisi totam autem quos eaque! Deserunt, voluptas earum.",
          icon: "",
        },
      ],
    };
  },
};
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
  background: url("~assets/imgs/banner.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
  color: white;
}

.citation {
  height: 500px;
}

.banner__informations {
  height: 250px;
  &__content {
    width: 1320px;
    position: absolute;
    top: -30%;
    z-index: 10000;
    background: #bb1e32;
    color: white;
  }
}

.introduction {
  height: 600px;
  width: 1320px;
}

@media only screen and (min-width: 320px) and (max-width: 900px) {
  .banner__informations {
    //background: blue;
    height: auto;

    &__content {
      width: 100%;

      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      //background: violet;
    }
  }
}

@media only screen and (min-width: 320px) and (max-width: 500px) {
  .banner__informations {
    &__content {
      flex-direction: column;
    }
  }

  .banner__info {
    //background: blue;
    width: 80%;
  }

  .introduction {
    width: 100%;
    height: auto;
    &__stepper {
      width: 80%;
    }
    &__image {
      padding: 0px;
    }
  }
  .swiper-button-prev {
    display: none;
  }
  .swiper-button-next {
    display: none;
  }
}
</style>