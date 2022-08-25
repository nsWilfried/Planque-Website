<template>
    <div>
        <!-- banner -->
        <Banner bannerTitle="Nous Contactez" />


        <!-- contact -->
        <div class="contact flex justify-center items-center w-full bg-red- ">
            <div class="flex ">
                <!-- contact informations -->
                <div class="bg-yellow- w-1/2">

                    <div class="">
                        <div class="contact__title w-full ">
                            <span class="font-bold">
                                Nous trouver
                            </span>
                        </div>

                        <div class="contact__content">
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quia!</span>
                        </div>
                    </div>

                    <!-- contact informations  -->
                    <div class="w-full">
                        <div class="w-full bg-green- flex mt-4 h-14" v-for="(element, index) in contactInformations"
                            :key="index">

                            <!-- icon -->
                            <div class=" bg-yellow-300 h-full  flex justify-center items-center contact__info__icon">
                                <span>x</span>
                            </div>

                            <!-- information -->
                            <div class="flex w-full flex-col">
                                <div class="w-full bg-green-">
                                    <span class="font-bold underline">{{ element.name }}</span>
                                </div>

                                <div>
                                    <span>{{ element.value }}</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <!-- formulaire de contact -->
                <div class="bg-yellow- w-1/2">
                    <div>
                        <!-- title -->
                        <div class="contact__title contact__form__title">
                            <span class="font-bold">Nous écrire</span>
                        </div>

                        <!-- description -->
                        <div class="contact__content contact__form__content">
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quia!</span>
                        </div>

                        <form >

                            <!-- email -->
                            <div class="mb-6">
                                <input type="email" 
                                    class="shadow-inner bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm  focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Entrer l'email" required>
                            </div>

                            <!-- objett -->
                            <div class="mb-6">
                                <input type="text"
                                placeholder="Entrer l'objet du message" 
                                    class="shadow-inner bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm  focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    required>
                            </div>

                            <!-- message -->
                            <div>
                                <textarea name="message"
                                    class="block shadow-inner p-2.5 w-full border outline-none text-sm text-gray-900 bg-gray-50  border-6 border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                                    placeholder="Entrer le message" style="height: 270px; resize: none; "></textarea>

                            </div>

                            <!-- submit button -->
                            <button type="submit"
                                class="text-white bg-red-500 font-bold focus:ring-4 focus:outline-none focus:ring-red-300  mt-4 text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div v-for="post in posts" :key='post.id'>
             {{post}}
        </div> -->
    </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import Banner from "../components/Banner.vue"
export default {
    layout: "page",
    componets: { Banner },
    // async asyncData({isDev, route, store, env, params,$sanity, req, res, redirect, error}) {
    //     const query = groq`*[_type=="post"]`
    //     const posts = await $sanity.fetch(query)

    //     return {
    //         posts
    //     }
    // },
    data() {
        return {
            contactInformations: [
                {
                    name: "Adresse Email",
                    value: "collegepereplanque@gmail.com"
                },
                {
                    name: "Téléphone",
                    value: "555-555-5555"
                },
                {
                    name: "Adresse",
                    value: "B.P. : 20259 Lomé-TOGO Agoè réserve, 500m à l'Est du Lycée d'agoè."
                }
            ]
        }
    },
}
</script>

<style lang="scss">
.contact {
    height: 700px;

    >div {
        width: 1320px;
        height: 600px;

    }
    &__title, &__content  {
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        // background: violet; 
        font-size: 35px;
    }
    &__content {
        font-size: 16px;
    }

    &__info__icon {
        width: 100px; 
        height: 100px;
    }
}


</style>