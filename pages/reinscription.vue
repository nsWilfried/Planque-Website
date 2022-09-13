<template>
  <div>
    <Banner bannerTitle="Réinscription" />

    <!-- formulaire de réinscription -->
    <section class="bg-red-">
      <div
        class=" max-w-screen-xl px-4 py-8 mx-auto "
      >
        <div
          class="mr-auto bg-green- formulaire__inscription place-self-center lg:col-span-7"
        >
          <div
            class="lg:w-full lg:h-auto lg:flex lg:justify-center lg:items-center"
          >
            <inscription-form />
          </div>
        </div>
      </div>
    </section>

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
};
</script>


<style lang="scss">

.formulaire__inscription{
  width:1320px;
}
@media only screen and (min-width: 320px) and (max-width: 900px) {
  .formulaire__inscription {
    width: 100%;
    //background: red;
  }
}
</style>