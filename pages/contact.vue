<template>
    <div>
        <!-- banner -->
        <Banner bannerTitle="Nous Contactez" />


        <!-- contact -->

        <div class="py-4 lg:py-8 relative">
            <img src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png"
                class="h-2/5 lg:h-full w-full lg:w-1/2 absolute inset-0 object-cover object-center xl:block hidden"
                alt="map" />
            <div class="xl:mx-auto xl:container relative">
                <div class="flex flex-wrap xl:mx-auto xl:container">
                    <div class="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0">
                        <img src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png"
                            class="h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center xl:hidden" alt="map" />

                        <div
                            class="w-full flex flex-col items-start xl:justify-start relative z-20 xl:px-0 px-4 xl:py-0 py-4">
                            <div class="w-full 2xl:pl-48 xl:pt-1">
                                <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800">Nous
                                    sommes ici</h1>
                                <div class="w-full md:w-10/12 mt-3">
                                    <h2 class="text-gray-800 text-base md:text-lg leading-8 tracking-wider">Lorem ipsum
                                        dolor sit amet consectetur, adipisicing elit. Accusamus, dolore.</h2>
                                    <div v-for="(element, index) in contactInformations" :key="index"
                                        class="mt-4 md:mt-8">
                                        <h2 class="text-sm md:text-base text-red-500 font-semibold">{{ element.name }}
                                        </h2>

                                        <h2 class="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                                            {{ element.value }}</h2>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 xl:pt-10 lg:pl-24">
                        <div class="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
                            <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-red-500">Envoyer
                                nous un message</h1>
                            <div class="w-full">
                                
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- <div v-for="post in posts" :key='post.id'>
             {{post}}
        </div> -->

        <!-- <button @click="sendEmail()">J'envoie un mail enfoiré</button> -->
    </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import Banner from "../components/Banner.vue"
import ContactForm from "../components/ContactForm.vue"

export default {
    layout: "page",
    components: { Banner, ContactForm },
    // async asyncData({isDev, route, store, env, params,$sanity, req, res, redirect, error}) {
    //     const query = groq`*[_type=="post"]`
    //     const posts = await $sanity.fetch(query)

    //     return {
    //         posts
    //     }
    // },
    data() {
        return {
            loading: false, 
            name : "",
            email: "",
            object: "", 
            message: "", 
            contactInformations: [
                {
                    name: "Adresse Email",
                    value: "collegepereplanque@gmail.com"
                },
                {
                    name: "Téléphone",
                    value: "(+228) 22 20 55 40 / 91 15 97 09"
                },
                {
                    name: "Adresse",
                    value: "01 BP: 4796 , 488, rue KONDA Bè Kamalodo, Lomé,Togo."
                }
            ],
 
            formInputs: [
                {
                    name: "Nom",
                    placeholder: "Entrez votre nom", 
                    model: this.name,
                },
                {
                    name: "Email",
                    placeholder: "Entrez votre adresse mail", 
                    model: this.email, 

                },
                {
                    name: "Objet",
                    placeholder: "Entrez l'objet du message", 
                    model: this.object, 

                },

            ]
        }
    },

    methods: {
        sendEmail() {
            this.loading = true
            this.$mail.send({
                from: this.formInputs[1].model,
                subject: this.formInputs[2].model,
                text: this.message
            }).then(response => {
                this.loading = false
                // alert("le message est bien envoyé enfoiré")
                this.resetForm();
            })
        }, 
        resetForm(){
            this.name = "",
            this.email= "",
            this.object= "", 
            this.message= ""
        }
    }
}
</script>

<style lang="scss">
.contact {
    height: 700px;

    >div {
        width: 1320px;
        height: 600px;

    }

    &__title,
    &__content {
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