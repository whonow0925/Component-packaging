<template>
  <div class="video-component-container">
    <section class="item">
      <span class="type-name">文件名称:</span>
      <input type="text" v-model.trim="fileName" />
      <span>.mp4</span>
    </section>
    <section class="item">
      <span class="type-name">录制时长</span>
      <span>{{ timeLong }}s</span>
    </section>
    <zy-button class="video-btn" @click="clicks" type="info" size="large">{{
      txt
    }}</zy-button>
  </div>
</template>

<script>
import ZyButton from "../Button/index.vue";
export default {
  components: {
    ZyButton,
  },
  name: 'zy-video',
  data() {
    return {
      txt: "开始录制",
      status: false,
      fileName: "",
      timeLong: 0,
      timeLongs: null,
      stream: null,
      startTime: 0,
      endTime: 0,
      options: {
        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 4500000,
        mimeType: "video/webm",
      },
      timeout: 0,
      recordedBlobs: [],
    };
  },
  watch: {
    status(val) {
      if (val) {
        this.txt = "停止录制";
      } else {
        this.txt = "开始录制";
      }
    },
  },
  methods: {
    clicks() {
      if (this.status) {
        this.stopReset();
        this.status = false;
        clearInterval(this.timesLongs);
      } else {
        this.startScreen();
      }
    },
    cauTime() {
      this.timeLongs = setInterval(() => {
        this.timeLong = (new Date().getTime() - this.startTime) / 1000;
      }, 200);
    },
    stopReset() {
      this.stream.getTracks().forEach((track) => track.stop());
      this.recordedBlobs = [];
    },
    startScreen() {
      navigator.mediaDevices?.getDisplayMedia({ video: true, audio: true }).then(
        (stream) => {
          this.status = !this.status;
          console.log("开始录制");
          this.startTime = new Date().getTime();
          this.cauTime();

          this.stream = stream;
          const mediaRecorder = new MediaRecorder(stream, this.options);
          mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
              this.status = false;
              clearInterval(this.timeLongs);
              console.log("结束录制,录制时长:" + this.timeLong + "s");
              this.recordedBlobs.push(event.data);
              this.download();
              this.stopReset();
            }
          };
          mediaRecorder.start();
        },
        (error) => console.log(error)
      );
    },
    download() {
      const blob = new Blob(this.recordedBlobs, { type: "video/mp4" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style.display = "none";
      a.href = url;
      if (this.fileName) {
        a.download = this.fileName + ".mp4";
      } else {
        a.download = new Date() + ".mp4";
      }
      a.click();
      window.URL.revokeObjectURL(url);
    },
  },
};
</script>

<style lang="less" scoped>
.video-component-container {
  width: 600px;
  height: 400px;
  border: 1px solid;
  .item {
    display: flex;
    align-items: center;
    margin: 25px 0;
    font-size: 20px;
  }
  .video-btn {
    margin-top: 10px;
  }
}
</style>
