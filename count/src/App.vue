<template>
  <div>
    <button @click="changNum('+')">+</button>
    <span>{{this.$store.state.app.num}}</span>
    <span>千分符分割之后的数据： {{this.$store.getters['app/formatNum']}}</span>
    <button @click="changNum('-')">-</button>
  </div>
</template>
<script>
export default {
  mounted(){
    console.log('this.$store',this.$store);
  },
  methods: {
    changNum(type){
      console.log(type)
      this.$store.commit({
        type:'app/changNum',
        payload:type
      })
    }
  }
}
</script>
<style lang="scss">
  
</style>