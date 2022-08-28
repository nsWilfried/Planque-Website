<template>
  <div>
    <div class="mt-10 sm:mt-0 bg-blue- flex justify-center items-center">
      <div style="width: 1320px">
        <div class="bg-re">
          <div class="mt-5 md:mt-0 md:col-span-2 bg-green-">

              <!-- title and description for inscription form -->
            <div class="w-full h-auto my-5 bg-green-">
              <div
                class="lg:w-full lg:h-auto lg:flex lg:justify-center lg:items-center"
              >
                <h1
                  class="max-w-2xl mb-4 lg:text-center text-4xl font-extrabold tracking-tight leading-none"
                >
                  Remplir le formulaire
                </h1>
              </div>

              <!-- description -->
              <div
                class="lg:w-full lg:h-auto lg:flex lg:justify-center lg:items-center"
              >
                <p
                  class="max-w-2xl lg:text-center mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
                >
                  From checkout to global sales tax compliance, companies around
                  the world use Flowbite to simplify their payment stack.
                </p>
              </div>
            </div>

            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-4">
                    <div class="sm:col-span-3">
                      <label
                        for="first-name"
                        class="block text-sm font-medium text-gray-700"
                        >Nom de famille</label
                      >
                      <input
                        type="text"
                        name="first-name"
                        class="mt-3 border-2 w-12/12 lg:w-full xl:w-10/12 focus:border-red-400"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="last-name"
                        class="block text-sm font-medium text-gray-700"
                        >Prénoms</label
                      >
                      <input
                        type="text"
                        name="last-name"
                        class="mt-3 border-2 w-12/12 lg:w-full xl:w-10/12 focus:border-red-400"
                      />
                    </div>

                    <div class="sm:col-span-4 w-full">
                      <label
                        for="email-address"
                        class="block text-sm font-medium text-gray-700"
                        >Adresse mail</label
                      >
                      <input
                        type="text"
                        name="email-address"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="sm:col-span-4 w-full">
                      <label
                        for="adress"
                        class="block text-sm font-medium text-gray-700"
                        >Adresse</label
                      >
                      <input
                        type="text"
                        name="address"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="sm:col-span-4 w-full">
                      <label
                        for="adress"
                        class="block text-sm font-medium text-gray-700"
                        >Ecole de provenance</label
                      >
                      <input
                        type="text"
                        name="address"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="sm:col-span-4 w-full">
                      <label
                        for="adress"
                        class="block text-sm font-medium text-gray-700"
                        >Classe suivie l'année dernière</label
                      >
                      <input
                        type="text"
                        name="address"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="sm:col-span-4 w-full">
                      <label
                        for="adress"
                        class="block text-sm font-medium text-gray-700"
                        >Classe à suivre cette année</label
                      >
                      <input
                        type="text"
                        name="address"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="country"
                        class="block text-sm font-medium text-gray-700"
                        >Country</label
                      >
                      <select
                        id="country"
                        name="country"
                        autocomplete="country-name"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="w-full flex justify-center items-center mb-2">
                  <div style="width: 1250px">
                    <label
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      for="file_input"
                      >Fichier compressé</label
                    >
                    <input
                      class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="file_input"
                      type="file"
                    />
                  </div>
                </div>
                <div
                  class="px-4 py-3 bg-gray-50 flex justify-center items-center sm:px-6"
                >
                  <button
                    type="submit"
                    class="py-3 md:py-5 dark:bg-white dark:text-gray-800 px-5 md:px-10 bg-red-400 text-white hover:opacity-90 ease-in duration-150 text-sm md:text-lg tracking-wider font-semibold focus:border-4 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>