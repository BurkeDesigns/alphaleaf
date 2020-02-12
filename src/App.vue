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

                    <div :class="{menu:true, showMenu: showMenu}">
                        <div>
                            <div class="hideOnDesktop menu-header">
                                <router-link to="/">
                                    <svg id="logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1071.57 245.87" el="logo">
                                        <path class="logo-symbol" d="M137,46.71,13.29,13.56l33.14,123.7a102.78,102.78,0,0,0,102.79,76.11L188,212.05l22,22h23.81L211,211.26h0L38,38.29l32.24,8.43,82.65,82.65q.78-27.91,1.58-55.82a80.17,80.17,0,0,1,16.68,14.73l-1.71,57.65,42.31,42.3,1.33-38.73A102.79,102.79,0,0,0,137,46.71Z" />
                                        <g>
                                            <path class="logo-letters" d="M335.72,143.53H301l-6.6,19.8H273.36l35.77-96.09h18.34l36,96.09H342.39Zm-29.36-16h24l-12.08-36Z" />
                                            <path class="logo-letters" d="M392.21,147.42h42v15.91H372.42V67.24h19.79Z" />
                                            <path class="logo-letters" d="M465.4,129.47v33.86H445.6V67.24h37.48a45.24,45.24,0,0,1,15.22,2.38,32.86,32.86,0,0,1,11.35,6.63,28.35,28.35,0,0,1,7.09,10.1,32.52,32.52,0,0,1,2.44,12.7,31.23,31.23,0,0,1-2.44,12.6,26.1,26.1,0,0,1-7.09,9.57,32.76,32.76,0,0,1-11.35,6.11,49.87,49.87,0,0,1-15.22,2.14Zm0-16h17.68a22.63,22.63,0,0,0,7.3-1.06,13.25,13.25,0,0,0,5-2.94,11.32,11.32,0,0,0,2.87-4.52,17.15,17.15,0,0,0,.93-5.74,19.21,19.21,0,0,0-.93-6,14,14,0,0,0-2.87-5.08,13.82,13.82,0,0,0-5-3.53,18.41,18.41,0,0,0-7.3-1.32H465.4Z" />
                                            <path class="logo-letters" d="M611,163.33h-19.8V122.15h-38.6v41.18h-19.8V67.24h19.8v38.94h38.6V67.24H611Z" />
                                            <path class="logo-letters" d="M683.7,143.53H649l-6.6,19.8h-21l35.77-96.09h18.34l36,96.09h-21Zm-29.37-16h24l-12.08-36Z" />
                                            <path class="logo-letters" d="M773.85,147.42h42v15.91H754.05V67.24h19.8Z" />
                                            <path class="logo-letters" d="M885,121.68H847v25.74h44.61v15.91h-64.4V67.24h64.27v16H847v22.9h38Z" />
                                            <path class="logo-letters" d="M957.5,143.53H922.79l-6.6,19.8H895.14l35.77-96.09h18.34l36,96.09H964.17Zm-29.36-16h24l-12.08-36Z" />
                                            <path class="logo-letters" d="M1052,124.06h-38v39.27H994.2V67.24h62.56v16H1014v24.81h38Z" />
                                        </g>
                                    </svg>
                                </router-link>
                                <i class="material-icons icon hideOnDesktop" @click="menuState(false)">close</i>
                            </div>
                        </div>
                        <nav el="nav">
                            <router-link to="/courses">Courses</router-link>
                            <router-link to="/about">About</router-link>
                            <router-link to="/contact">Contact</router-link>
                            <!-- <router-link to="/login">Sign In</router-link> -->
                        </nav>
                        <div class="hideOnDesktop">
                            <div style="padding: 30px;background-color: #f1f4f8;width: 100%;">
                                <router-link to="/enroll" el="btn stretch">Enroll Today</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="hideOnMobile">
                        <router-link to="/enroll" el="btn" style="--height:40px;">get started</router-link>
                    </div>
                    
                </div>
            </header>
            
            <router-view/>
            
            <!-- <footer el="footer"></footer> -->
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
        }
    },
    methods: {
        menuState(val){
            this.showMenu = val;
        },
        gsap(selector, options){
            gsap.to(selector, options);
        }
    },
    watch:{
        $route (){
            this.showMenu = false;
        }
    }, 
    created(){
        //this.$store.state.slideshowData
        //this.$store.commit('handleResize');
    }
}
</script>

<style>
/*----- Core Styles -----*/
@import './assets/css/components.css';

[el="header"]{
    box-shadow: 0 3px 10px rgba(0,0,0,0.2);
    z-index:3;
}
[el="header"] [el="section"] i{
    display:none;
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

[el="nav"] .router-link-exact-active{
    color:var(--color-secondary) !important;
    -webkit-text-fill-color: currentColor;
}
.logo-symbol {
    fill: var(--color-secondary);
}

.logo-letters {
    fill: #506690;
}
.icon{
    color:var(--color-secondary);
    -webkit-text-fill-color: currentColor;
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
    [el~="header"] [el~="nav"] > * {
        display:grid;
        height:50px;
        padding:0 30px;
        width:100%;
        align-items: center;
        justify-content: space-between;
        grid-gap:15px;
        transition:0.2s;
    }
    [el~="header"] [el~="nav"] > *:hover{
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
        height: calc(100% - 40px);
        background-color: #fff;
        display: none;
        grid-template-columns: 1fr;
        grid-template-rows: max-content 1fr max-content;
        grid-gap: 15px;
        z-index:10;
        overflow: hidden;
    }
    .showMenu{
        display:grid;
    }
}
</style>
