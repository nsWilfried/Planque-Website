<template>
    <div class="w-full flex bg-green-300 items-end justify-center" style="height: 400px">
        <div class="bg-red- flex items-center border-l-8 border- border-red-400" style="width: 90%; height:200px">
            <span class="text-white font-bold  text-6xl pl-10 ">{{bannerTitle}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        bannerTitle: String
    }
}
</script>
<style lang="">
    
</style>