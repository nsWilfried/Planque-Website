<template>
  <div>
    <Banner bannerTitle="Inscription" />

    <!-- demarches inscription -->
    <section class=" w-full h-auto flex bg-red-">
      <section class="bg-green- mt-6 mb-6 container mx-auto py-8 inscription__page px-4">
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2
              class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span class="relative inline-block">
                <span class="relative">Les étapes d'admission au Collège Père Augustin Planque</span>
              </span>
            </h2>
            <p class="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque
              ipsa quae.
            </p>
          </div>
          <div class="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
            <div class="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
              <div class="w-px h-full bg-gray-300 lg:w-full lg:h-px"></div>
            </div>
            <div class="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
              <div class="flex items-center justify-between mb-2">
                <p class="text-lg font-bold leading-5">Believe</p>
                <p
                  class="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                  1
                </p>
              </div>
              <p class="text-sm text-gray-900">
                Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter flail 180 berm.
              </p>
            </div>
            <div class="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
              <div class="flex items-center justify-between mb-2">
                <p class="text-lg font-bold leading-5">Be yourself</p>
                <p
                  class="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                  2
                </p>
              </div>
              <p class="text-sm text-gray-900">
                A flower in my garden, a mystery in my panties. Heart attack never stopped.
              </p>
            </div>
            <div class="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
              <div class="flex items-center justify-between mb-2">
                <p class="text-lg font-bold leading-5">Just do it</p>
                <p
                  class="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                  3
                </p>
              </div>
              <p class="text-sm text-gray-900">
                Chase ball of string eat plants, meow, and throw up because I ate plants going.
              </p>
            </div>
            <div class="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
              <div class="flex items-center justify-between mb-2">
                <p class="text-lg font-bold leading-5">Eat that</p>
                <p
                  class="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                  4
                </p>
              </div>
              <p class="text-sm text-gray-900">
                Bro ipsum dolor sit amet gaper backside single track, manny Bike epic clipless.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>

    <!-- documents à fournir -->
    <section class="bg-red-400">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto inscription__documents bg-green- place-self-center lg:col-span-7">
          <!--title -->
          <div class="lg:w-full lg:h-auto lg:flex lg:justify-center lg:items-center">
            <h1 class="max-w-2xl mb-4 lg:text-center text-4xl font-extrabold tracking-tight leading-none">
              Pièces à fournir: 1 <sup>er</sup> & 2 <sup>er</sup> CYCLES
            </h1>
          </div>

          <!-- description -->
          <div class="lg:w-full lg:h-auto lg:flex lg:justify-center lg:items-center">
            <p
              class="max-w-2xl lg:text-center mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
          </div>

          <div class="lg:w-full lg:h-auto lg:flex lg:justify-center lg:items-center">
            <ul class="mb-8 space-y-4 text-left text-gray-500 ">
              <li v-for="(item, index) in pieces" :key="index" class="flex items-center space-x-3" style="width: 500px;background: ; ">
                <!-- Icon -->
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 bg-white " fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <span>{{item.text}}</span>
              </li>


            </ul>
          </div>
        </div>
      </div>
    </section>

    <!--formulaire d'inscription -->

      <inscription-form />
    <!-- call to action -->

    <!-- <CTA /> -->

    <!-- formulaire de contact -->
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contactez-nous</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon
          brooklyn asymmetrical gentrify.</p>
      </div>
      <contact-form />

    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import InscriptionForm from "../components/InscriptionForm.vue";
import CTA from "../components/CTA.vue";
import ContactForm from "../components/ContactForm.vue";

export default {
  layout: "page",
  components: { Banner, InscriptionForm, CTA, ContactForm },
  data() {
    return {
      pieces: [
        {
          text: "Trois (03) copies légalisées de l'acte de naissance"
        }, 
        {
          text: "Deux (02) copies légalisées du relevé de notes du CEPD(Pour le 1er cycle), du BEPC ou du BAC1(Pour le 2ème cycle)"
        },
        {
          text: "Deux (02) copies légalisées de l'attestation du CEPD(Pour le 1er cycle à partir de la classe de 5e)"
        },
        {
          text: "Les bulletins de note de l'année précédente"
        },
        {
          text: "Un certificat de scolarité"
        },
        {
          text: "Trois (03) photos d'identité"
        },
        {
          text: "Un certificat médical"
        },
        
      ]
    }
  },
};
</script>

<style lang="scss">
.inscription__documents {
  width: 1320px;
}

@media only screen and (min-width: 320px) and (max-width: 900px) {
  .inscription__documents {
    width: 100%;
  }
  .inscription__page{
    padding-top: 0px;
    padding-bottom: 0px;
  }
}
</style>