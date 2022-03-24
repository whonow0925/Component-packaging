<template>
  <div id="container">
    <div id="square"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
#container {
  height: 300px;
}

#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  animation-name: rotateAnimation;
  animation-duration: 3s;
  animation-direction: alternate;
  animation-timeline: squareTimeline;
}

@scroll-timeline squareTimeline {
  source: selector("#container");
  orientation: "vertical";
  scroll-offsets: 0px, 300px;
}

@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
