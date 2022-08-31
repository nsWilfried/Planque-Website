<template>
    <div class='menu w-full bg-red- flex'>

        <div class='menu__logo bg-white flex justify-center items-center '>
            <routerLink to="/">
                <img style="width: 100px; height: 100px" src="../assets/imgs/logo.png" alt="Logo du collège père augustin planque" srcset="">
            </routerLink> 
        </div>
        <div class='menu__content w-full bg-green- flex flex-col  bg-green-600' >
            <div class="h-2/4 bg-gray-  w-full grid grid-cols-3" style="background-color: #1c2e5e; color: white;">
                <div class='menu__social'>
                    <div class='flex flex-row'>
                        <div class="menu__social__logo bg-white">
                            <font-awesome-icon icon="envelope" style="color:#bb1e32 ;font-size:20px"></font-awesome-icon>
                        </div>

                        <div class="menu__social__info">
                            <span class="font-medium">collegepereplanque@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div class='flex justify-center items-center'>
                    <div class='flex flex-row'>
                        <div class="menu__social__logo bg-white">
                            <font-awesome-icon icon="phone"  style="font-size: 20px; color:#bb1e32 ;"/>
                        </div>

                        <div class="menu__social__info">
                            <span class ="font-medium">(+228) 22 20 55 40 / 91 15 97 09 </span>
                        </div>
                    </div>
                </div>

                <div class='flex justify-center items-center'>
                    <div class='flex flex-row'>
                        <div class="menu__social__logo bg-white">
                            <font-awesome-icon icon="location-dot"  style="font-size: 20px; color:#bb1e32 ;"/>

                        </div>

                        <div class="menu__social__info">
                            <span>488, rue KONDA Bè Kamalodo Lomé,Togo</span>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="`grid grid-cols-${links.length} h-2/4`">
                <div v-for="link in links" :key='link.name' class=' flex justify-center items-center text-sm uppercase '>
                    <routerLink  exactActiveClass='linkActive'  :to="link.linkTo" class='menu__link'>
                        {{link.name}}
                    </routerLink>
                </div>
                
            </div>

        </div>
        
    </div>
        
</template>

<script>
export default {
    name:"Banner", 

    data() {
        return {
                links:  [
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
                ]
            }
    }
    
}
</script>

<style lang="scss">
    .menu {
        height:130px; 
        font-family: "Poppins";
        &__logo {
            width: 300px; 

        }

        &__social  {
            @include center; 
            &__logo {
                @include center; 
                height: 30px;
                width: 30px;
                border-radius: 5px; 
            
            }
            &__info {
                @include center; 
                margin-left: 15px ;
                font-family: $common-font;  
            }
        }

        &__link{
        padding:10px 20px;
        text-decoration:none;
        letter-spacing:2px;
        text-transform:uppercase;
        font-weight: bold; 
        @include center; 
        font-family:$secondary-font; 
        font-weight:bold;
        color: white ;

         &:hover{
             width: 100%;
             height: 100%;   
            border:none;
            background:#fff;
            padding:20px 20px;
            color:#1b1b1b;
            }
        }

    
       

    }
    .linkActive {
        width: 200px;
             
        border:none;
        background:#fff;
        padding:20px 20px;
        color:#1b1b1b;
    }
    
    @media only screen and (min-width:320px) and (max-width: 900px) {
        .menu{
            display: none;
        }
    }

    
</style>