<template>
  <div
    class="w-full flex bg-green-400 items-end justify-center"
    style="height: 400px"
  >
    <div class="flex bg-red- banner__info flex-col justify-center">
      <span
        class="text-white font-bold border-l-8 border- border-red-400 text-6xl pl-10 uppercase"
        >{{ bannerTitle }}</span
      >
      <Breadcrumbs class="ml-12" :link="route" />
    </div>
  </div>
</template>
<script>
import Breadcrumbs from "./Breadcrumbs.vue";
export default {
  props: {
    bannerTitle: String,
  },
  components: { Breadcrumbs },
  data() {
    return {
      route: this.$route.name,
    };
  },
};
</script>
<style lang="scss">
.banner__info {
  width: 1320px;
  height: 200px;
}
@media only screen and (min-width: 320px) and (max-width: 900px) {
    .banner__info{
        width: 90%;
        height: 200px;
        > span {
            font-size: 30px ;
        }
    }
}
</style>