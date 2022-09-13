<template>
    <div>
        <Banner bannerTitle="Blog" />


        <!-- blog -->
        <section class="blog w-full h-auto flex bg-red-">
            <section class="bg-green- mt-6 mb-6  mx-auto py-8 px-4">
                <div class="md:max-w-lg mx-auto text-center mb-20">
                    <h2 class="mb-4 font-heading font-semibold text-6xl sm:text-7xl">Actualités</h2>
                    <p class="text-lg text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                        sint. Velit offhellicia consequat duis enim.</p>
                </div>
                <div class="pt-14 xl:px-0 px-4">
                    <div class="w-full lg:flex">
                        <div class="lg:w-1/2">
                            <img tabindex="0" role="img" aria-label=" Beautiful italy street"
                                src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog1.png" class=" w-full"
                                alt="Beautiful italy street" />
                            <div class="mt-8 lg:mb-0 mb-8">
                                <h2 tabindex="0" class=" dark:text-white f-m-m text-2xl font-semibold leading-7">
                                  {{posts[posts.length - 1].title}} </h2>
                                  <p class="mb-2 mt-2 text-xs font-semibold text-gray-600">
                                        {{$moment(posts[posts.length - 1].created_at)}}
                                    </p>
                                <p tabindex="0" class=" dark:text-white text-base f-m-m leading-loose mt-2">Lorem
                                    {{posts[posts.length - 1].description[0].children[0].text}}</p>

                            </div>
                        </div>
                        <div class="lg:w-1/2 lg:ml-8">
                            <div v-for="(post, index) in random" :key="index" class="lg:flex items-start mb-8">
                                <img tabindex="0" role="img" aria-label="bag on a table" alt="bag on table"
                                    src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog2.png"
                                    class=" w-full" />
                                <div class="lg:ml-6">
                                    <h3 tabindex="0"
                                        class=" dark:text-white f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                                        {{post.title}}</h3>
                                    <p class="mb-2 mt-2 text-xs font-semibold text-gray-600">
                                        {{$moment(post.created_at)}}
                                    </p>
                                    <p tabindex="0" class=" dark:text-white text-base f-m-m leading-loose mt-2">
                                        {{post.description[0].children[0].text}}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
import Banner from "../components/Banner.vue"
import CTA from "../components/CTA.vue"
import ContactForm from "../components/ContactForm.vue";
import { groq } from '@nuxtjs/sanity'
export default {
    layout: "page",
    components: { Banner, CTA, ContactForm },
    async asyncData({ isDev, route, store, env, params, $sanity, req, res, redirect, error }) {
        const queryPost = groq`*[_type=="post"]`
        const posts = await $sanity.fetch(queryPost)
        const random = posts.slice(0, posts.length - 1)
        return {
            posts, random 
        }
    },
    data() {
        return {

        }
    }

}
</script>

<style lang="scss">
.blog {
    >section {
        width: 1320px;

    }
}
</style>