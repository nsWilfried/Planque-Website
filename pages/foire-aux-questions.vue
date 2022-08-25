<template>
    <div>
        <!-- banner -->
        <Banner bannerTitle="Foires aux questions" />

        <!-- accordion for questions -->
        <div class="w-full h-auto my-10 flex justify-center">
            <div style="width: 1320px;">
                <badger-accordion>
                    <badger-accordion-item class="bg-red-300">
                        <template slot="header">First Accordion Header</template>
                        <template slot="content">First Accordion Content</template>
                    </badger-accordion-item>

                    <badger-accordion-item >
                        <template class="bg-red-700" slot="header">Second Accordion Header</template>
                        <template slot="content">Second Accordion Content</template>
                    </badger-accordion-item>
                </badger-accordion>
            </div>
        </div>

    </div>
</template>

<script>
import { BadgerAccordion, BadgerAccordionItem } from 'vue-badger-accordion'

import Banner from '../components/Banner.vue'
export default {
    layout: "page",
    components: { Banner, BadgerAccordion, BadgerAccordionItem }

}
</script>