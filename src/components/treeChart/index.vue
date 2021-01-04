<template>
  <div id="treeChart">
    <div ref="treeChart"
      style="width:100%;height:1500px">{{chartTitle}}</div>
  </div>
</template>

<script>
export default {
  name: 'TreeChart',
  data() {
    return {
      colorSet: [
        '#7B4EE3',
        '#1489FF',
        '#01BFFF',
        'grey',
        'orange',
        'yellow',
        'purple',
      ],
      Arr: [],
      totalExec: '',
    }
  },
  props: {
    chartData: {
      type: Array,
      default() {
        return []
      },
    },
    chartTitle: {
      type: String,
      default() {
        return ''
      },
    },
  },
  methods: {
    drawTree(Arr) {
      let myChart = this.$echarts.init(this.$refs.treeChart)
      var option = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove',
        },
        series: [
          {
            type: 'tree',
            data: Arr,

            top: '1%',
            left: '7%',
            bottom: '1%',
            right: '20%',

            symbolSize: 10,

            label: {
              show: true,
              position: 'insideLeft ',
              offset: [-8, 8],
              //文字垂直对齐方式
              verticalAlign: 'middle',
              //文字水平对齐方式
              align: 'right',
              fontSize: 15,
              formatter: (params) => {
                console.log(params.data.endpointName, '855')
                this.totalExec = params.data.totalExec
                console.log(this.totalExec, 123)
                return (
                  '{' +
                  params.data.isError +
                  '|' +
                  params.data.endpointName +
                  '\n}{progress|}{progresses|}\n' +
                  '{b|' +
                  params.data.layer +
                  '-' +
                  params.data.component +
                  '}'
                )
              },
              rich: {
                false: {
                  width: 20,
                  height: 20,
                  fontSize: 14,
                  color: 'black',
                },
                true: {
                  width: 20,
                  height: 20,
                  fontSize: 14,
                  color: 'red',
                },
                b: {
                  width: 20,
                  height: 20,
                  fontSize: 14,
                  color: '#ddd',
                },
                progress: {
                  width: this.totalExec,
                  height: 1,
                  padding: 1,
                  backgroundColor: 'green',
                },
                progresses: {
                  width: 100 - this.totalExec,
                  height: 0.5,
                  padding: 0.5,
                  backgroundColor: '#cccccc',
                },
              },
            },
            //叶子节点
            leaves: {
              label: {
                position: 'insideRight ',
                //是否对文字进行偏移
                offset: [20, 5],
                verticalAlign: 'middle',
                align: 'rifht',
              },
            },
            symbol: 'emptyCircle',
            //树图边的样式
            lineStyle: {
              color: '#cccccc',
              //树图边的曲度
              curveness: '0.5',
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750,
          },
        ],
      }
      myChart.setOption(option)
    },
    //处理数据的方法
    chartDetail(chartData, floor) {
      // const dataArr = []
      // for (var i = 0; i < chartData.length; i++) {
      //   // 遍历节点添加itemStyle属性
      //   chartData[i].itemStyle = {
      //     borderColor: this.colorSet[i % this.colorSet.length],
      //   }
      //   if (chartData[i].children && chartData[i].children.length > 0) {
      //     this.chartDetail(chartData[i].children)
      //   }
      // }
      for (var i = 0; i < chartData.length; i++) {
        // 遍历节点添加itemStyle属性
        chartData[i].itemStyle = {
          borderColor: this.colorSet[Math.floor(floor / 2)],
          borderWidth: 3,
        }
        if (chartData[i].children && chartData[i].children.length > 0) {
          this.chartDetail(chartData[i].children, floor + 1)
        }
      }
    },
  },
  mounted() {
    console.log(this.chartData, 'chartData')
    //深拷贝
    this.Arr = JSON.parse(JSON.stringify(this.chartData))
    console.log(this.Arr, 'Arr')
    this.chartDetail(this.Arr, 0)
    this.drawTree(this.Arr)
  },
}
</script>
<style>
</style>