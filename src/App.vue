<template>
    <div id="app">
         <div el="layout">
            <header el="header">
                <div el="section">
                    <div>
                        <!-- <router-link to="/"><img src="./assets/icons/logo.svg" alt="logo" el="logo"></router-link> -->
                        <router-link to="/">
                            <svg id="mobileLogo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1099.64 249.7" el="logo">
                                <path class="logo-symbol" d="M137,48.71,13.29,15.56l33.14,123.7a102.78,102.78,0,0,0,102.79,76.11L188,214.05l22,22h23.81L211,213.26h0L38,40.29l32.24,8.43,82.65,82.65q.78-27.91,1.58-55.82a80.17,80.17,0,0,1,16.68,14.73l-1.71,57.65,42.31,42.3,1.33-38.73A102.79,102.79,0,0,0,137,48.71Z" />
                                <path class="logo-letters" d="M346.83,144h-45l-9.19,21.36H271.41l44.2-96.23h17l44.19,96.23H356Zm-6.9-16.08L324.39,91.8l-15.54,36.09Z" />
                                <path class="logo-letters" d="M385.07,69.1h21.09v79.06h43v17.17H385.07Z" />
                                <path class="logo-letters" d="M462,69.1h43.66q15.95,0,24.8,7.7t8.85,21q0,13.11-8.92,20.88t-24.73,7.77H483.06v38.93H462Zm40.95,41.22q16.5,0,16.49-12.44T502.92,85.32H483.06v25Z" />
                                <path class="logo-letters" d="M639.16,69.1v96.23H618.48V124.92h-44.6v40.41H553.2V69.1h20.68V108h44.6V69.1Z" />
                                <path class="logo-letters" d="M722.82,144h-45l-9.19,21.36H647.4L691.59,69.1h17l44.2,96.23H732Zm-6.9-16.08L700.38,91.8l-15.54,36.09Z" />
                                <path class="logo-letters" d="M761.06,69.1h21.09v79.06h43v17.17H761.06Z" />
                                <path class="logo-letters" d="M838,69.1h66.36V85.45H858.5v22.71h43v16.49h-43V149h45.82v16.36H838Z" />
                                <path class="logo-letters" d="M981.9,144h-45l-9.19,21.36H906.48l44.2-96.23h17l44.19,96.23H991.09ZM975,127.89,959.46,91.8l-15.54,36.09Z" />
                                <path class="logo-letters" d="M1020.14,69.1H1085V85.72H1041V108h41.35v16.76H1041v40.55h-20.82Z" />
                            </svg>
                        </router-link>
                    </div>
                    <i class="material-icons icon hideOnDesktop" @click="menuState(true)">menu</i>
                    <transition name="fade" v-if="window.width >= 800 || showMenu">
                        <div class="menu">
                            <div>
                                <div class="hideOnDesktop menu-header">
                                    <router-link to="/">
                                         <svg id="logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1099.64 249.7" el="logo">
                                            <path class="logo-symbol" d="M137,48.71,13.29,15.56l33.14,123.7a102.78,102.78,0,0,0,102.79,76.11L188,214.05l22,22h23.81L211,213.26h0L38,40.29l32.24,8.43,82.65,82.65q.78-27.91,1.58-55.82a80.17,80.17,0,0,1,16.68,14.73l-1.71,57.65,42.31,42.3,1.33-38.73A102.79,102.79,0,0,0,137,48.71Z" />
                                            <path class="logo-letters" d="M346.83,144h-45l-9.19,21.36H271.41l44.2-96.23h17l44.19,96.23H356Zm-6.9-16.08L324.39,91.8l-15.54,36.09Z" />
                                            <path class="logo-letters" d="M385.07,69.1h21.09v79.06h43v17.17H385.07Z" />
                                            <path class="logo-letters" d="M462,69.1h43.66q15.95,0,24.8,7.7t8.85,21q0,13.11-8.92,20.88t-24.73,7.77H483.06v38.93H462Zm40.95,41.22q16.5,0,16.49-12.44T502.92,85.32H483.06v25Z" />
                                            <path class="logo-letters" d="M639.16,69.1v96.23H618.48V124.92h-44.6v40.41H553.2V69.1h20.68V108h44.6V69.1Z" />
                                            <path class="logo-letters" d="M722.82,144h-45l-9.19,21.36H647.4L691.59,69.1h17l44.2,96.23H732Zm-6.9-16.08L700.38,91.8l-15.54,36.09Z" />
                                            <path class="logo-letters" d="M761.06,69.1h21.09v79.06h43v17.17H761.06Z" />
                                            <path class="logo-letters" d="M838,69.1h66.36V85.45H858.5v22.71h43v16.49h-43V149h45.82v16.36H838Z" />
                                            <path class="logo-letters" d="M981.9,144h-45l-9.19,21.36H906.48l44.2-96.23h17l44.19,96.23H991.09ZM975,127.89,959.46,91.8l-15.54,36.09Z" />
                                            <path class="logo-letters" d="M1020.14,69.1H1085V85.72H1041V108h41.35v16.76H1041v40.55h-20.82Z" />
                                        </svg>
                                    </router-link>
                                    <i class="material-icons icon hideOnDesktop" @click="menuState(false)">close</i>
                                </div>
                            </div>
                            
                            <nav el="nav" @click="menuState(false)">
                                <!-- <router-link to="/">Home</router-link> -->
                                <router-link to="/courses">Programs</router-link>
                                <router-link to="/about">About</router-link>
                                <router-link to="/contact">Contact</router-link>
                                <!-- <router-link to="/login"><i class="material-icons">lock</i></router-link> -->
                                <div class="vert-divider hideOnMobile"></div>
                                <router-link to="/login">Sign In</router-link>
                            </nav>
                            <div class="hideOnDesktop">
                                <div style="padding: 30px;background-color: #f1f4f8;width: 100%;">
                                    <router-link to="/enroll" el="btn stretch">Enroll Today</router-link>
                                </div>
                            </div>
                        </div>
                    </transition>
                    <div class="hideOnMobile">
                        <router-link to="/enroll" el="btn shadow" style="--height:40px;--bg-color:#fff; --color:var(--color-secondary);--hover-bg-color:#fff;--pressed-bg-color:#fff;">get started</router-link>
                    </div>
                    
                </div>
            </header>
            
            <router-view/>
            
            <footer el="footer" style="--bg-color:#f1f1f1;">
                <div el="section">
                    <div el="list">
                        <router-link to="/">
                            <svg id="mobileLogo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1099.64 249.7" el="logo">
                                <path class="logo-symbol" d="M137,48.71,13.29,15.56l33.14,123.7a102.78,102.78,0,0,0,102.79,76.11L188,214.05l22,22h23.81L211,213.26h0L38,40.29l32.24,8.43,82.65,82.65q.78-27.91,1.58-55.82a80.17,80.17,0,0,1,16.68,14.73l-1.71,57.65,42.31,42.3,1.33-38.73A102.79,102.79,0,0,0,137,48.71Z" />
                                <path class="logo-letters" d="M346.83,144h-45l-9.19,21.36H271.41l44.2-96.23h17l44.19,96.23H356Zm-6.9-16.08L324.39,91.8l-15.54,36.09Z" />
                                <path class="logo-letters" d="M385.07,69.1h21.09v79.06h43v17.17H385.07Z" />
                                <path class="logo-letters" d="M462,69.1h43.66q15.95,0,24.8,7.7t8.85,21q0,13.11-8.92,20.88t-24.73,7.77H483.06v38.93H462Zm40.95,41.22q16.5,0,16.49-12.44T502.92,85.32H483.06v25Z" />
                                <path class="logo-letters" d="M639.16,69.1v96.23H618.48V124.92h-44.6v40.41H553.2V69.1h20.68V108h44.6V69.1Z" />
                                <path class="logo-letters" d="M722.82,144h-45l-9.19,21.36H647.4L691.59,69.1h17l44.2,96.23H732Zm-6.9-16.08L700.38,91.8l-15.54,36.09Z" />
                                <path class="logo-letters" d="M761.06,69.1h21.09v79.06h43v17.17H761.06Z" />
                                <path class="logo-letters" d="M838,69.1h66.36V85.45H858.5v22.71h43v16.49h-43V149h45.82v16.36H838Z" />
                                <path class="logo-letters" d="M981.9,144h-45l-9.19,21.36H906.48l44.2-96.23h17l44.19,96.23H991.09ZM975,127.89,959.46,91.8l-15.54,36.09Z" />
                                <path class="logo-letters" d="M1020.14,69.1H1085V85.72H1041V108h41.35v16.76H1041v40.55h-20.82Z" />
                            </svg>
                        </router-link>
                        <!-- <router-link to="/courses" el="link">Programs</router-link> -->
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
import { gsap } from "gsap";
export default {
    name: 'app',
    components:{
    },
    data(){
        return {
            showMenu:false,
            window:{
                height:0,
                width:0
            }
        }
    },
    methods: {
        menuState(val){
            this.showMenu = val;
        },
        gsap(selector, options){
            gsap.to(selector, options);
        },
        handleResize() {
              this.window.width = window.innerWidth;
              this.window.height = window.innerHeight;

            //   this.$nextTick(function () {
            //     if(this.window.width <=800){
            //       this.$refs.nav.mobileView = true;
            //       this.$refs.nav.showNav = false;
            //     }else{
            //       this.$refs.nav.mobileView = false;
            //       this.$refs.nav.showNav = true;
            //     }
            //   });
              
              
            }
    },
    computed:{
      user(){
        return this.$root.$store.state.user;
      }
    },
    watch:{
        $route (){
            this.showMenu = false;
            if(this.user == null){
                this.$router.push('login');
            }else if (this.user.authorizedUser == false){
                this.$router.push('login');
            }
            
            //window.console.log(val);
        }
    }, 
    created(){
        //this.$store.state.slideshowData
        //this.$store.commit('handleResize');
        window.addEventListener('resize', this.handleResize)
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    }
}



</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: .5s;
  transform: translateY(-50%);
}
.fade-enter, .fade-leave-to, .fade-leave-active {
  opacity: 0;
}
/*----- Core Styles -----*/
@import './assets/css/components.css';

[el="header"]{
    background-color: #00203e;
    background-image: linear-gradient(45deg, #00203e, var(--color-secondary));
    box-shadow: 0 3px 10px rgba(0,0,0,0.2);
    z-index:3;
}
[el="header"] [el="section"] i{
    font-size: 32px;
}
@media (max-width: 800px) {
    [el="header"] [el="section"] i{
        display:inherit;
    }
}
[el="nav"]{
    padding-right:20px;
}
[el~="header"] [el~="nav"] > a {
    color:#fff;
}

[el="nav"] .router-link-exact-active{
    color:deepskyblue !important;
    -webkit-text-fill-color: currentColor;
}

.logo-symbol {
    /* fill: var(--color-secondary); */
    fill: #fff;
}

.logo-letters {
    /* fill: #506690; */
    fill: #fff;
}


.icon{
    color:#fff;
    -webkit-text-fill-color: currentColor;
}
.menu .logo-symbol,
[el=footer] .logo-symbol {
    fill: var(--color-secondary);
}

.menu .logo-letters,
[el=footer] .logo-letters {
    fill: #506690;
}
.menu .icon{
    color:var(--color-secondary);
}
.menu{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.hideOnDesktop {
  display: none;
}

@media(max-width:800px) {
    [el="nav"]{
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        overflow:auto;
        height:100%;
        padding-right:0px;
    }
    [el~="header"] [el~="nav"] > a {
        color:#506690;
        display:grid;
        height:50px;
        padding:0 30px;
        width:100%;
        align-items: center;
        justify-content: space-between;
        grid-gap:15px;
        transition:0.2s;
    }
    [el~="header"] [el~="nav"] > a:hover{
        background-color:aliceblue;
    }
    .hideOnDesktop {
        display: flex;
    }

    .hideOnMobile {
        display: none;
    }
    .menu-header{
        display: flex;
        flex-direction: row;
        padding: 0 30px;
        padding-top: 30px;
        justify-content: space-between;
    }
    .menu {
        border-radius: 8px;
        box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 20px;
        left: 20px;
        width: calc(100% - 40px);
        /* height: calc(100% - 40px); */
        background-color: #fff;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: max-content 1fr max-content;
        grid-gap: 15px;
        z-index:10;
        overflow: hidden;
    }
}
.vert-divider{
    width: 1px;
    display: inline-block;
    padding: 0;
    background-color: var(--color-25);
    height: 23px;
    position: absolute;
}
</style>
