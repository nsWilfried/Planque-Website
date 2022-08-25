<template>
    <div class="w-full flex bg-green-300 items-end justify-center" style="height: 400px">
        <div class="bg-red- flex flex-col justify-center " style="width: 90%; height:200px">
            <span class="text-white font-bold border-l-8 border- border-red-400  text-6xl pl-10 uppercase">{{bannerTitle}}</span>
            <Breadcrumbs class="ml-12" :link="route"/>
        
        </div>
    </div>
</template>
<script>
import Breadcrumbs from './Breadcrumbs.vue';
export default {
    props: {
        bannerTitle: String
    },
    components: { Breadcrumbs }, 
    data() {
        return {
            route: this.$route.name
        }
    },
}
</script>
<style lang="">
    
</style>