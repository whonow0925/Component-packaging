<template>
  <div class="default-graph" :class="`${type}`">
     <slot></slot> 
  </div>
</template>

<script>
export default {
    name:'DefaultGraph',
    data(){
        return{}
    },
    props:{
        /** 缺省图类型*/
        type:{
            type:String,
            default:'default'
        }
    }
}
</script>

<style lang="less">

@import "../DefaultGraph/index.less";

</style>