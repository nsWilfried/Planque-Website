<template>

    <div>
        <form @submit.prevent="sendEmail" class="w-full  mt-3 bg-green-">
            <div v-for="(element, index) in formInputs" :key="index" class="mt-4 md:mt-8">
                <p class="text-gray-800  font-medium">{{ element.name }}</p>
                <input v-model.lazy="element.model" class="mt-3  border-2 w-full focus:border-red-400 " type="text"
                    :placeholder="element.placeholder" />
            </div>

            <div class="mt-4 md:mt-8">
                <p class="text-gray-800  font-medium">Message</p>
                <textarea v-model="message"
                    class="mt-3  border-2  w-full resize-none  focus:border-red-600  border-black xl:h-40 py-5 pl-4 text-gray-800 dark:text-white"
                    type="text" placeholder="Entrez votre message"></textarea>
            </div>
            <div class="py-5 flex justify-center ">
                <button
                    class="py-3 md:py-5 dark:bg-white dark:text-gray-800 px-5 md:px-10 bg-red-400 text-white hover:opacity-90 ease-in duration-150 text-sm md:text-lg tracking-wider font-semibold focus:border-4 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Envoyer</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
            name: "",
            email: "",
            object: "",
            message: "",

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
                alert("le message est bien envoyé enfoiré")
                this.resetForm();
            })
        },
        resetForm() {
            this.name = "",
                this.email = "",
                this.object = "",
                this.message = ""
        }
    }
}
</script>
<style lang="scss">

</style>