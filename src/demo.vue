<template>
  <div>
    <div>this is a {{message}}</div>
    <div>this is a {{reversedMessage}}</div>
    <div @click="imgPlay">
      <img :src="images[imgIndex]"
        alt="">
      <img :src="require(`@/image/${imgIndex}.jpg`)">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'hello',
      imgIndex: 0,
      image: ['./img/0.jpg', './img/1.jpg', './img/2.jpg'],
      timer: null,
    }
  },
  created() {},
  mounted() {},
  //执行异步操作或者昂贵操作时，使用watch
  watch: {},
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('')
    },
  },
  methods: {
    imgPlay() {
      if (this.timer != null) {
        clearInterval(this.timer)
        this.timer = null
      } else {
        this.timer.setInterval(() => {
          this.imgIndex++
          if (this.imgIndex > 3) {
            this.imgIndex = 0
          }
        }, 3000)
      }
    },
  },
}
</script>

<style>
</style>