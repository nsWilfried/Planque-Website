<template>
    <div>

        <Banner bannerTitle="Nous Contactez"/>


        <!-- <div v-for="post in posts" :key='post.id'>
             {{post}}
        </div> -->
    </div>
</template>

<script>
import {groq} from '@nuxtjs/sanity'
import Banner from "../components/Banner.vue"
export default {
    layout: "page", 
    componets: {Banner}, 
    // async asyncData({isDev, route, store, env, params,$sanity, req, res, redirect, error}) {
    //     const query = groq`*[_type=="post"]`
    //     const posts = await $sanity.fetch(query)
       
    //     return {
    //         posts
    //     }
    // },
}
</script>