<template>
  <div>
    <input type="button" value="-" @click="de(3)">
    <span>{{num}}</span>
    <input type="button" value="+" @click="add(5)">
    <p>{{count}}</p>
    <div>
      <router-link to='/select'>select模块</router-link>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'Calculator',
  computed: {
    num () {
      return this.$store.state.count
    },
    ...mapState(['count'])
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapMutations({
      add: 'addCount',
      de: 'deCount'
    })
    // add () {
    //   this.$store.commit('addCount', 5)
    //   this.$store.dispatch('getList')
    // },
    // de () {
    //   this.$store.commit('deCount', 3)
    // }
  }
}
</script>
<style>
</style>