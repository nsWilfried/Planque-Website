<template>
  <footer class="w-full flex justify-center bg-red- items-center h-auto">
    <div class="p-4 footer bg- sm:p-6 dark:bg-gray-900" style="background-color: ;">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0 flex justify-center items-center">
          <routerLink to="/" class="flex items-center">
            <img
              src="../assets/imgs/logo.png"
              class="mr-3 h-32 w-32"
              alt="Collège Père Augustin planque logo"
            />

            <!-- <span
                            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white w-12 uppercase">Collège
                            Père Augustin Planque</span> -->
          </routerLink>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2
              class="mb-6 text-white text-sm font-semibold uppercase border-l-8 border- border-red-400 pl-2"
            >
              Liens Utiles
            </h2>
            <ul class="text-white">
              <li class="mb-4 ">
                <router-link to="/contact" class="hover:underline"
                  >Contact</router-link
                >
              </li>
              <li class="mb-4">
                <router-link to="/inscription" class="hover:underline"
                  >Inscription</router-link
                >
              </li>

              <li>
                <router-link to="/blog" class="hover:underline"
                  >Blog</router-link
                >
              </li>
            </ul>
          </div>
          <!-- contact -->
          <div class="footer__informations">
            <h2
              class="mb-6  underline text-sm font-semibold text-white uppercase border-l-8  pl-2 border-red-400"
            >
              informations
            </h2>
            <ul class="text-white">
              <li class="mb-4">
                <span
                  >collegepereplanque@gmail.com</span
                >
              </li>
              <li class="mb-4">
                <a href="https://discord.gg/4eeurUVvTy" class="hover:underline"
                  >+22893546439</a
                >
              </li>
            </ul>
          </div>

          <!-- horaires -->
          <div class="bg-green-">
            <h2
              class="mb-6 text-sm font-semibold text-white uppercase border-l-8 pl-2 border-red-400">
              Horaires
            </h2>
            <ul class="text-white">
              <li class="mb-4 footer__horaires flex w-full justify-between">
                <div>
                  <span class="hover:underline">Lundi</span>
                </div>

                <div>
                  <span> hello world </span>
                </div>
              </li>
              <li class="mb-4">
                <a href="https://discord.gg/4eeurUVvTy" class="hover:underline"
                  >+22893546439</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-smtext-white sm:text-center dark:text-gray-400"
          >© 2022
          <router-link to="/" class="hover:underline">CPAP™</router-link>. Tout
          drois réservés.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            href="#"
            class="text-white hover:text-white dark:hover:text-white"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Facebook page</span>
          </a>
       
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
.footer {
  width: 90%;
}
footer {
  background-color: #1c2e5e;
  color: white;
}

@media only screen and (min-width: 320px) and (max-width: 500px){
  .footer__informations {
    display: none;
  }
  .footer__horaires {
    display: block;
  }
}
</style>