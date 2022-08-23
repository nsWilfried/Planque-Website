<template>
    <div class='menu w-full bg-red-400 flex'>
        <div class='menu__logo bg-white flex justify-center items-center '>
            <div>
                <img style="width: 100px; height: 100px" src="../assets/imgs/logo.png" alt="Logo du collège père augustin planque" srcset="">
            </div> 
        </div>
        <div class='menu__content w-full bg-green-400 flex flex-col  '>
            <div class="h-2/4 bg-gray-400  w-full grid grid-cols-3">
                <div class='menu__social'>
                    <div class='flex flex-row'>
                        <div class="menu__social__logo bg-white">
                        </div>

                        <div class="menu__social__info">
                            <span>wilfriedproject@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div class='flex justify-center items-center'>
                    <div class='flex flex-row'>
                        <div class="menu__social__logo bg-white">
                            <font-awesome-icon icon="dollar-sign"  style="font-size: 30px"/>
                            <font-awesome-icon icon="cog"/>


                        </div>

                        <div class="menu__social__info">
                            <span>wilfriedproject@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div class='flex justify-center items-center'>
                    <div class='flex flex-row'>
                        <div class="menu__social__logo bg-white">
                        </div>

                        <div class="menu__social__info">
                            <span>wilfriedproject@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-5 h-2/4">
                <div v-for="link in links" :key='link.name' class=' flex justify-center items-center text-sm uppercase '>
                    <nuxt-link routerLinkActive='random' :to="link.linkTo" class='menu__link'>
                        {{link.name}}
                    </nuxt-link>
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
                        linkTo: ''
                    }, 
                    {
                        name: 'Blog', 
                        linkTo: 'blog'
                    }, 
                    {
                        name: 'Renseigements', 
                        linkTo: 'renseignements'
                    }, 
                    {
                        name: 'Inscription', 
                        linkTo: 'inscription'
                    }, 
                    {
                        name: 'FAQ', 
                        linkTo: 'foire-aux-questions'
                    }
                ]
            }
    }
    
}
</script>

<style lang="scss">
    .menu {
        height:130px; 
        &__logo {
            width: 300px; 

        }

        &__social  {
            @include center; 
            &__logo {
                @include center; 
                height: 40px;
                width: 40px;
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
    .random {
        width: 200px;
             
        border:none;
        background:#fff;
        padding:20px 20px;
        color:#1b1b1b;
    }
</style>