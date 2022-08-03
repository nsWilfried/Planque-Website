<template>
    <div>


        <div v-for="post in posts" :key='post.id'>
             {{post}}
        </div>
    </div>
</template>

<script>
import {groq} from '@nuxtjs/sanity'
export default {
    async asyncData({isDev, route, store, env, params,$sanity, req, res, redirect, error}) {
        const query = groq`*[_type=="post"]`
        const posts = await $sanity.fetch(query)
       
        return {
            posts
        }
    },
}
</script>