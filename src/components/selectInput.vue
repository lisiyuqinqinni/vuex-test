<template>
  <div>
    <input type="text" @click="getList" :value="val">
  </div>
</template>
<script>
  export default {
    name: 'selectInput',
    computed: {
      val () {
        return this.$store.state.selectStore.inputVal
      }
    },
    methods: {
      getList () {
        this.$store.dispatch('getList')
      }
    }
  }
</script>