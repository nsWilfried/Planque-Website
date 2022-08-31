<template lang="">
    <div>
        <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contactez-nous</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="w-full  mt-3 bg-green-" role="form">
                                <div v-for="(element, index) in formInputs" :key="index" class="mt-4 md:mt-8">
                                    <p class="text-gray-800  font-medium">{{ element.name }}</p>
                                    <input class="mt-3  border-2 lg:w-full w-full focus:border-red-400 "
                                        type="text" :placeholder="element.placeholder" />
                                </div>

                                <div class="mt-4 md:mt-8">
                                    <p class="text-gray-800  font-medium">Message</p>
                                    <textarea
                                        class="mt-3  border-2  lg:w-full w-full resize-none  focus:border-red-600  border-black xl:h-40 py-5 pl-4 text-gray-800 dark:text-white"
                                        type="text" placeholder="Entrez votre message"></textarea>
                                </div>
                                <div class="py-5 flex justify-center ">
                                    <button
                                        class="py-3 md:py-5 dark:bg-white dark:text-gray-800 px-5 md:px-10 bg-red-400 text-white hover:opacity-90 ease-in duration-150 text-sm md:text-lg tracking-wider font-semibold focus:border-4 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Envoyer</button>
                                </div>                    
        </div>
    </div>
  </div>
</section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formInputs: [
                {
                    name: "Nom",
                    placeholder: "Entrez votre nom"
                },
                {
                    name: "Email",
                    placeholder: "Entrez votre adresse mail"
                },
                {
                    name: "Objet",
                    placeholder: "Entrez l'objet du message"
                },

            ]
        }
    },
}
</script>
<style lang="scss">
</style>