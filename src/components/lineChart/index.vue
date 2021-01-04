<template>
  <div ref="LineChart"
    style="width:100%;height:300px">
    <div>{{ chartTitle }}</div><em>{{ chartUnit }}</em>
  </div>
</template>

<script>
require('echarts/lib/chart/line') // 按需导入折线组件
require('echarts/lib/chart/effectScatter') // 拐点出闪烁，高亮
require('echarts/lib/component/tooltip') // 提示组件
require('echarts/lib/component/legend') // 图例组件
require('echarts/lib/component/markPoint') // 标注组件
require('echarts/lib/component/markLine')
export default {
  name: 'line-chart',
  data() {
    return {
      tooltipIndex: 0
    }
  },
  props: {
    /**图表数据 */
    chartData: {
      type: Array,
      default() {
        return []
      }
    },
    /**实例化需要的id */
    id: {
      type: String,
      default() {
        return ''
      }
    },
    /**图表标题 */
    chartTitle: {
      type: String,
      default() {
        return ''
      }
    },
    //ms
    chartUnit: {
      type: String,
      default() {
        return ''
      }
    },
    // /**x轴数据 */
    // xAxis: {
    //   type: Array,
    //   default() {
    //     return []
    //   }
    // },
    // /**y轴数据 */
    // yAxis: {
    //   type: Array,
    //   default() {
    //     return []
    //   }
    // },
    loading: Boolean
  },
  //用于监控数据的变化，重新绘图
  watch: {
    xAxis: {
      handler(newxAxis, oldxAxis) {}
    },
    chartData: {
      handler(newData, oldData) {
        this.chartDetail(newData)
      }
    }
  },
  methods: {
    //数据处理
    chartDetail(chartData) {
      console.log(chartData)
      //五条数据
      const nameArr = []
      //series 数据格式
      const dataArr = []
      //时间
      const xArr = []
      const years = []
      chartData.forEach((item) => {
        nameArr.push(item.name)
        dataArr.push({
          // symbol: 'none',
          name: item.name,
          type: 'line',
          areaStyle: {},
          data: item.dataList.map((item) => item.data),
          areaStyle: {
            color: 'rgba(59, 165, 255, 0.3)'
          }
        })
        xArr.push(item.dataList.map((item) => item.time))
      })
      years.push(xArr.map((item) => item[0].substring(0, 10)))
      this.drawLine(nameArr, dataArr, xArr, years)
    },
    drawLine(nameArr, dataArr, xArr, years) {
      console.log(nameArr, dataArr, xArr, years)
      let myChart = this.$echarts.init(this.$refs.LineChart)
      var option = {
        title: {
          text: this.chartTitle
        },
        tooltip: {
          padding: 15,
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          },
          formatter: (params) => {
            // console.log(params, '!!!!!!')
            let year = years[0]
            let time = xArr[0].map((item) => item.substring(16, 19))
            let content = []
            let contentDetail = ''
            params.forEach((item) => {
              content.push({
                marker: item.marker,
                seriesName: item.seriesName,
                value: item.value,
                // tooltipIndex: item.seriesIndex,
                componentIndex: item.componentIndex
              })
            })
            content.map((item) => {
              contentDetail += `<div style="${
                this.tooltipIndex === item.componentIndex ? 'color:red' : ''
              }">${item.marker}${item.seriesName}:&nbsp;&nbsp${
                item.value
              }</div>`
            })
            // console.log(content, '111111')
            // console.log(content.map((item) => item.tooltipIndex))
            // console.log(contentDetail, '22222')
            return `<span style="font-size:8px">${year[0]}${params[0].axisValue}${time[0]}<br/><span>${contentDetail}</span></span>`
          }
        },
        legend: {
          data: nameArr,
          bottom: '0',
          right: '0',
          icon: 'circle',
          itemWidth: 8
        },
        color: ['#00BFFF', '#3498FF', '#FF9F29', '#7A4EE3', '#5F9EA0'],
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            //缺判断
            data: xArr[0].map((item) => item.substring(10, 16)),
            splitLine: {
              lineStyle: {
                color: '#eee'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: dataArr
      }
      myChart.setOption(option)
      myChart.on('click', 'series', (params) => {
        console.log(params, '156')
        if (this.tooltipIndex === params.componentIndex) return
        this.tooltipIndex = params.componentIndex
        // myChart.resize()
      })
      myChart.on('mouseover', 'series', (params) => {
        if (this.tooltipIndex === params.componentIndex) return
        this.tooltipIndex = params.componentIndex
        // console.log(this.tooltipIndex, 'this.tooltipIndex')
        // myChart.resize()
      })

      myChart.on('mouseout', 'series', (params) => {
        this.tooltipIndex = 0
      })
      console.log(this.chartData, '========================================')
    }
  },
  mounted() {
    this.chartDetail(this.chartData)
  }
}
</script>

<style>
</style>