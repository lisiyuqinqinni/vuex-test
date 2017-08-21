<template>
  <div class="list">
    <ul>
      <li v-for="item in data" @click="changeInput(item)">{{item.title}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'list',
    computed: {
      data () {
        return this.$store.state.selectStore.list
      }
    },
    methods: {
      changeInput (item) {
        this.$store.commit('changeInput', item.title)
      }
    }
  }
</script>

<style scoped>
  .list{
    width: 100px;
    margin: 0 auto;
  }
  ul, li{
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  ul{
    width: 100px;
  }
  li{
    font-size: 14px;
    font-family: "微软雅黑";
    line-height: 30px;
    text-align: center;
    cursor: pointer;
  }

</style>