<template>
  <div>
    <div  class="zy-button" @click="clickHandler()" :class="[`${type}`, `${disable ? 'disable' : ''}`, `${size}`,`${circle ? 'circle' : ''}`,`${outline?'outline':''}`,`${loading?'loading':''}`]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'ZyButton',
  data(){
    return{
    }
  },
  props:{
     /** 按钮文案*/
    // text:{
    //   type:String,
    //   default:''
    // },
     /** 按钮是否禁用状态*/
    disable:{
      type:Boolean,
      default:false
    },
     /** 按钮风格 可选值：default,primary,success,warning,danger,info	*/
    type:{
      type:String,
      default:'default'
    },
    /** 按钮尺寸 可选值：default,large,small*/
    size:{
      type:String,
      default:'default'
    },
    /** 按钮是否镂空*/
    outline:{
      type:Boolean,
      default:false
    },
    /** 按钮是否圆形*/
    circle:{
      type:Boolean,
      default:false
    },
    // /** 图标，已有的图标库中的图标名*/
    // icon:{
    //   type:String,
    //   default:''
    // },
    /** 是否加载中...*/
    loading:{
      type:Boolean,
      default:false
    },
    // /** 按钮点击事件节流(单位毫秒，1000ms = 1s)*/
    // throttle:{
    //   type:Number,
    //   default:'0'
    // }
  },
  methods:{
      clickHandler(e){
          this.loading=true
          console.log(this.type,this.size,this.outline,this.circle,this.disable,this.loading)
          this.$emit('click',e)         
      }
  }

}
</script>
<style lang="less">

@import "../Button/index.less";

</style>