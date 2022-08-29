<template>
  <div>
    <Banner bannerTitle="Réinscription" />


    <!-- formulaire de réinscription -->
    <section class="bg-red-">
      <div
        class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      >
        <div
          style="width: 1320px"
          class="mr-auto bg-green- place-self-center lg:col-span-7"
        >


          <div
            class="lg:w-full lg:h-auto lg:flex lg:justify-center lg:items-center"
          >
          <inscription-form/>
          </div>
        </div>
      </div>
    </section>

    <!-- call to action -->
    <CTA/>

    <!-- formulaire de contact -->
    <contact-form/>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import InscriptionForm from "../components/InscriptionForm.vue";
import CTA from "../components/CTA.vue";
import ContactForm from "../components/ContactForm.vue";

export default {
  layout: "page",
  components: { Banner, InscriptionForm, CTA , ContactForm},
};
</script>