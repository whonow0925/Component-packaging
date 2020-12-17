<template>
  <div id="canvas">111</div>
</template>

<script>
export default {
  name: 'Canvas',
  data() {
    return {
      context: {},
    }
  },
  methods: {
    initCanvas() {
      console.log('123')
      let canvas = document.getElementById('canvas')
      this.context = canvas.getContext('2d')
    },
  },
  mounted() {
    this.initCanvas()
  },
}
</script>

<style>
</style>