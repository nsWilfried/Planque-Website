<template>
    <div>
        <Banner bannerTitle="Blog" />


        <!-- blog -->
        <section class="blog w-full h-auto flex bg-red-">
            <section role="article" tabindex="0" class="bg-green- mt-6 mb-6  container mx-auto py-8 px-4">
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
                                    Beautiful Italy, Travel Blog</h2>
                                <p tabindex="0" class=" dark:text-white text-base f-m-m leading-loose mt-2">Lorem
                                    Ipsum is simply dummy text of the printing and typesetting industry. It has survived
                                    not only five centuries. Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry.</p>

                            </div>
                        </div>
                        <div class="lg:w-1/2 lg:ml-8">
                            <div class="lg:flex items-start mb-8">
                                <img tabindex="0" role="img" aria-label="bag on a table" alt="bag on table"
                                    src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog2.png"
                                    class=" w-full" />
                                <div class="lg:ml-6">
                                    <h3 tabindex="0"
                                        class=" dark:text-white f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                                        A Broken Backpack</h3>
                                    <p tabindex="0" class=" dark:text-white text-base f-m-m leading-loose mt-2">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. It
                                        has survived not only five centuries. Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry.</p>

                                </div>
                            </div>
                            <div class="lg:flex items-start mb-8">
                                <img tabindex="0" role="img" aria-label="car in desert" alt="car in desert"
                                    src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog3.png"
                                    class=" w-full" />
                                <div class="lg:ml-6">
                                    <h3 tabindex="0"
                                        class=" dark:text-white f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                                        My life’s a Movie</h3>
                                    <p tabindex="0" class=" dark:text-white text-base f-m-m leading-loose mt-2">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. It
                                        has survived not only five centuries. Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry.</p>

                                </div>
                            </div>
                            <div class="lg:flex items-start mb-8">
                                <img tabindex="0" role="img" aria-label="man with camel" alt="man with camel"
                                    src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog4.png"
                                    class=" w-full" />
                                <div class="lg:ml-6">
                                    <h3 tabindex="0"
                                        class=" dark:text-white -m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                                        Lilii’s Travel Plans</h3>
                                    <p tabindex="0" class=" dark:text-white text-base f-m-m leading-loose mt-2">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. It
                                        has survived not only five centuries. Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>

        <!-- call to action -->
        <CTA/>
    </div>
</template>

<script>
import Banner from "../components/Banner.vue"
import CTA from "../components/CTA.vue"

export default {
    layout: "page",
    components: { Banner, CTA},
    data() {
        return {

        }
    }

}
</script>

<style lang="scss">
.blog {
    > section {
    width: 1320px;

    }
}
</style>