import { resolve } from "path";

// 模块中存储的数据
const state = {
    num:1000000
}
//模块种派生的数据，可以缓存数据
const getters = {
    formatNum: (state)=>{
      const re=/(?=(?!(\b))(\d{3})+$)/g;
      let str = state.num.toString().replace(re,",");
      return str;
    }
  }

// 模块中的同步改变
const mutations = {
    changNum(state,action){
        console.log(state,action)
        state.num = action.payload == "+" ? state.num + 1 : state.num - 1;
    }
}

//模块的异步改变
const actions = {
    changNumAsync({commit},action){
        setTimeout(() => {
            commit({
                type:'changNum',
                payload:action.payload
            })
            resolve();

        },500)
    }
}

export default {
    // 命名空间
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}