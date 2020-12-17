<template>
  <div ref="chart" style="width:100%;height:300px" > 
      <!-- <div class="echarts_title">{{chartTitle}}</div> -->
      <!-- 暂无数据 -->
      <!-- <div v-if="chartInfo.noData" class="no_data_tips">暂无数据</div> -->
      <!-- <div class="echarts_content">{{chartData}}</div> -->
  </div>
</template>

<script>
// require('echarts/lib/chart/tree')// 按需导入折线组件
// require('echarts/lib/chart/effectScatter')// 拐点出闪烁，高亮
// require('echarts/lib/component/tooltip') // 提示组件
// require('echarts/lib/component/legend') // 图例组件
// require('echarts/lib/component/markPoint') // 标注组件
// require('echarts/lib/component/markLine')

export default {
    name:"chartTree",
    props:{
        /*图表数据 */ 
        chartData:{
            type: Array,
            default() {
                return []
            }
        },
        /*图表标题 */ 
        chartTitle:{
            type:String,
            default(){
                return ''
            }
        },
        // id:{
        //     type:String,
        //     default:''
        // }

    },
    data(){
        return{}
    },
    methods:{
        child(chartData){ //递归循环节点
             this.chartData.forEach((item,index)=>{
                 changeColor(item); //根据返回数据设置不同颜色
                 if(item.children!=null && item.children.length!=0){ //如果有子节点
                     child(item.child)//调用递归循环
                 }
             })          
        },
        drawTree(){
           let myChart = this.$echarts.init(this.$refs.chart) 
           var option = {
               legend:{},
               title:{
                   text: this.chartTitle
               },
               //悬浮提示 
                tooltip: {
                    trigger: 'item',
                    triggerOn: 'mousemove',
                    
                },
                
                series: [
                {
                    type: 'tree',
                    name:'小demo',
                    data: this.chartData,

                    top: '1%',
                    left: '7%',
                    bottom: '1%',
                    right: '20%',

                    symbolSize: 7,
                    //每个节点对应的标签样式
                    label: {
                        show:true,
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right',
                        //标签文字大小
                        fontSize: 13
                    },

                    leaves: {
                        label: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    },
                    itemStyle:{
                        // borderColor :"yellow"
                    },
                    
                    expandAndCollapse: true,
                    animationDuration: 550,
                    animationDurationUpdate: 750
                }
            ]
           }
           myChart.setOption(option);
        }

    },
    mounted(){
        this.drawTree()
    },
    // beforeDestroy(){
    //     if(!this.myChart){
    //         return
    //     }
    //     this.myChart.dispose()
    //     this.myChart = null
    // }
}
</script>

<style lang="less" scoped>

</style>