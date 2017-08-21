<template>
  <div>
    <select-input></select-input>
    <input-list></input-list>
  </div>
</template>
<script>
  import inputList from './list'
  import selectInput from './selectInput'
  export default {
    name: 'select',
    components: {
      inputList,
      selectInput
    }
  }
</script>
<style>
</style>