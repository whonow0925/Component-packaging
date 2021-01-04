<template>
<div>
  <div id="box" style="width:100%;height:300px"></div>
  <div id="pie" style="width:100%;height:300px"></div>
</div>

</template>
<script>
export default {
    name:'ZyCharts',
    data(){
        return{}
    },
    methods:{
        drawLine(){
        // 基于准备好的dom，初始化echarts实例，所以只能在mounted中调用
            let myChart = this.$echarts.init(document.getElementById('box'))
            // 绘制图表, 调用 setOption 将 option 输入 echarts，然后 echarts 渲染图表
            myChart.hideLoading();
            myChart.setOption({
                title: { text: '在Vue中使用echarts' },
                //tooltip（提示框组件)
                tooltip: {},
                //直角坐标系 X 轴
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                //直角坐标系 Y 轴
                yAxis: {},
                //在 echarts 里，系列（series）是指：一组数值以及他们映射成的图。
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                },{
                    name: '增长情况',
                    type: 'line',
                    data: [15, 30, 56, 60, 20, 30]
                },{
                    name: '占比例关系',
                    type: 'pie',
                    //往往依据 center（中心）、radius（半径）来决定位置。
                    center:['65%',60],
                    radius:35,
                    data: [
                        {name:'xx',value:52},
                        {name:'yy',value:54},
                        {name:'zz',value:66},
                    ]
                }]
            });
        },    
         drawPie(){
            let myChart = this.$echarts.init(document.getElementById('pie'))
            myChart.setOption({
                backgroundColor: '#2c343c',
                visualMap: {
                    show: false,
                    min: 80,
                    max: 600,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                // textStyle: {
                //     color: 'rgba(255, 255, 255, 0.3)'
                // },
                //ECharts 中有一些通用的样式，诸如阴影、透明度、颜色、边框颜色、边框宽度等，这些样式一般都会在系列的 itemStyle 里设置
                // itemStyle: {
                //     // 阴影的大小
                //     shadowBlur: 200,
                //     // 阴影水平方向上的偏移
                //     shadowOffsetX: 0,
                //     // 阴影垂直方向上的偏移
                //     shadowOffsetY: 0,
                //     // 阴影颜色
                //     shadowColor: 'rgba(0, 0, 0, 0.5)',
                //     emphasis: {
                //         shadowBlur: 200,
                //         shadowColor: 'rgba(0, 0, 0, 0.5)'
                //     }
                // },
                // //设置 roseType 显示成南丁格尔图
                // roseType: 'angle',
                //在 echarts 里，系列（series）是指：一组数值以及他们映射成的图。
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    data:[
                        {value:235, name:'视频广告'},
                        {value:274, name:'联盟广告'},
                        {value:310, name:'邮件营销'},
                        {value:335, name:'直接访问'},
                        {value:400, name:'搜索引擎'}
                    ],
                    //在series里面是局部样式，在series是全局样式
                    roseType: 'angle',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            })
    }},
    mounted(){
        this.drawLine()
        this.drawPie()
    }
}

</script>

<style>

</style>