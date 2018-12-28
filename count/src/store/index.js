import Vue from "vue";
import Vuex from "vuex";
import app from "./module/app"

import createLogger from 'vuex/dist/logger';
console.log("1111",createLogger)
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        app
    },
    plugins:[createLogger()]
})