import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        window: {
            width: 1080,
            height: 0,
            mobile:false,
        },
    },
    mutations: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;

            this.$nextTick(function () {
              if(this.window.width <=800){
                this.window.mobile = true;
              }else{
                this.window.mobile = false;
              }
            })
            
            
        },
        setUser(state, payload){
          state.user = payload;
        }
    },
    actions: {
    },
    modules: {
    }
})
