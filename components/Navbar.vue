<template>
    <div class=' w-full bg-red- flex'>

        <!--desktop menu-->

        <div class="desktop__menu w-full flex ">
            <div class='desktop__menu__logo bg-white flex justify-center items-center '>
                <routerLink to="/">
                    <img style="width: 100px; height: 100px" src="../assets/imgs/logo.png"
                        alt="Logo du collège père augustin planque" srcset="">
                </routerLink>
            </div>
            <div class='desktop__menu__content w-full bg-green- flex flex-col  bg-green-600'>
                <div class="h-2/4 bg-gray-  w-full grid grid-cols-3" style="background-color: #1c2e5e; color: white;">
                    <div class='desktop__menu__social'>
                        <div class='flex flex-row'>
                            <div class="desktop__menu__social__logo bg-white">
                                <font-awesome-icon icon="envelope" style="color:#bb1e32 ;font-size:20px">
                                </font-awesome-icon>
                            </div>

                            <div class="desktop__menu__social__info">
                                <span class="font-medium">collegepereplanque@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div class='flex justify-center items-center'>
                        <div class='flex flex-row'>
                            <div class="desktop__menu__social__logo bg-white">
                                <font-awesome-icon icon="phone" style="font-size: 20px; color:#bb1e32 ;" />
                            </div>

                            <div class="desktop__menu__social__info">
                                <span class="font-medium">(+228) 22 20 55 40 / 91 15 97 09 </span>
                            </div>
                        </div>
                    </div>

                    <div class='flex justify-center items-center'>
                        <div class='flex flex-row'>
                            <div class="desktop__menu__social__logo bg-white">
                                <font-awesome-icon icon="location-dot" style="font-size: 20px; color:#bb1e32 ;" />

                            </div>

                            <div class="desktop__menu__social__info">
                                <span>488, rue KONDA Bè Kamalodo Lomé,Togo</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div :class="`grid grid-cols-${links.length} h-2/4`">
                    <div v-for="link in links" :key='link.name'
                        class=' flex justify-center items-center text-sm uppercase '>
                        <routerLink exactActiveClass='linkActive' :to="link.linkTo" class='desktop__menu__link'>
                            {{  link.name  }}
                        </routerLink>
                    </div>

                </div>

            </div>

        </div>


        <!--mobile menu-->
        <div class="w-full  hidden h-24 " style="background: #1c2e5e;">
                hello
        </div>
        <div class="mobile__menu w-full bg-white flex ">
            
            <div class='w-1/2 bg-white flex pl-6  items-center '>
                <routerLink to="/">
                    <img style="width: 80px; height: 80px" src="../assets/imgs/logo.png"
                        alt="Logo du collège père augustin planque" srcset="">
                </routerLink>
            </div>

            <div class="w-1/2 flex justify-end items-center pr-4">
                <span @click="openDrop()">
                    <tasty-burger-button :active="isActive" />
                </span>

                <dropdown-menu direction="right" :isOpen="isOpenMyDropdown" @closed="closed()">
                    <!-- <div slot="header">Dropdown Header</div> -->
                    <div slot="body"
                        class=" bg-white">
                        <ul class="py-1 text-sm">
                            <li v-for="(item, index) in links" :key="index">
                                <routerLink :to="item.linkTo"
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{item.name}}</routerLink>
                            </li>
                        </ul>
                    </div>
                    <div slot="footer" class="w-full p-4 bg-red-500 border-red-400 text-white flex justify-center items-center">
                        <span>
                            Collège Père Planque
                        </span>
                    </div>
                </dropdown-menu>
            </div>
        </div>
    </div>

</template>

<script>
import DropdownMenu from 'v-dropdown-menu'
import 'v-dropdown-menu/dist/v-dropdown-menu.css'
import { TastyBurgerButton } from 'vue-tasty-burgers'
export default {
    name: "Banner",
    components: { DropdownMenu, 'tasty-burger-button': TastyBurgerButton },
    data() {
        return {
            links: [
                {
                    name: 'Acceuil',
                    linkTo: '/'
                },
                {
                    name: 'Blog',
                    linkTo: 'blog'
                },
                // {
                //     name: 'Renseigements', 
                //     linkTo: 'renseignements'
                // }, 
                {
                    name: 'Inscription (2022-2023)',
                    linkTo: 'inscription'
                },
                {
                    name: 'Réinscription (2022-2023)',
                    linkTo: 'reinscription'
                },
                {
                    name: 'FAQ',
                    linkTo: 'foire-aux-questions'
                }
                , {
                    name: 'Contact',
                    linkTo: 'contact'
                }
            ],
            isOpenMyDropdown: false,
            isActive: false
        }
    },
    watch: {
        isOpenMyDropdown() {
            console.log("l'état à changé")
            this.isActive = !this.isActive;
            console.log(this.isActive)
        }
    },
    methods: {
        openDrop() {
            this.isOpenMyDropdown = !this.isOpenMyDropdown

        },
        closed() {
            this.isOpenMyDropdown = false
            console.log('modal fermé')

        }
    },

}
</script>

<style lang="scss">
.desktop__menu {
    height: 130px;
    font-family: "Poppins";

    &__logo {
        width: 300px;

    }

    &__social {
        @include center;

        &__logo {
            @include center;
            height: 30px;
            width: 30px;
            border-radius: 5px;

        }

        &__info {
            @include center;
            margin-left: 15px;
            font-family: $common-font;
        }
    }

    &__link {
        padding: 10px 20px;
        text-decoration: none;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-weight: bold;
        @include center;
        font-family: $secondary-font;
        font-weight: bold;
        color: white;

        &:hover {
            width: 100%;
            height: 100%;
            border: none;
            background: #fff;
            padding: 20px 20px;
            color: #1b1b1b;
        }
    }




}

.linkActive {
    width: 200px;

    border: none;
    background: #fff;
    padding: 20px 20px;
    color: #1b1b1b;
}

.mobile__menu {
    display: none;
}

@media only screen and (min-width:320px) and (max-width: 900px) {
    .desktop__menu {
        display: none;
    }

    .mobile__menu {
        display: flex;
        background-color: white;
        width: 100%;
        height: 100px;
    }
}
</style>