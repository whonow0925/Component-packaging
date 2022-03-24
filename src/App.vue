<template>
  <div id="app">
    <!-- 自定义按钮 -->
    <template v-if="showZyButton">
      <zy-button @click="click" type="danger" size="large" outline disable
        >按钮</zy-button
      >
    </template>
    <!-- 【暂无数据】缺省图 -->
    <template v-if="showDefaultGraph">
      <div class="out" style="width:500px;height:400px;background-color:blue">
        <default-graph type="list"></default-graph>
      </div>
    </template>
    <!-- echart -->
    <template v-if="showZyCharts">
      <zy-charts></zy-charts>
      <!-- <zy-tree :chartData="chartData" chart-title="执行时间"></zy-tree> -->
      <!-- <chart-tree :chartData="chartData" :chartTitle="chartTitle"></chart-tree> -->
    </template>
    <!-- echart 树状图 -->
    <template v-if="showTreeChart">
      <tree-chart :chartData="chartData"></tree-chart>
    </template>
    <!-- canvas -->
    <template v-if="showCanvas">
      <canvas id="canvas_1" width="500" height="500"></canvas>
    </template>
    <!-- @scoll-timeline -->
    <template v-if="showScollTimeline">
      <scroll-timeline></scroll-timeline>
    </template>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ZyButton from "./components/Button/index.vue";
import DefaultGraph from "./components/DefaultGraph/index.vue";
import ZyCharts from "./components/Echart.vue";
// import chartTree from './components/EchartsTree/echart_tree.vue'
import TreeChart from "./components/treeChart/index.vue";
// import Canvas from './components/Canvas/index'
import ScrollTimeline from "./components/scrollTimeLine/index.vue";

export default {
  name: "App",
  components: {
    ZyButton,
    DefaultGraph,
    ZyCharts,
    // chartTree
    TreeChart,
    // Canvas,
    ScrollTimeline,
  },
  data() {
    return {
      showScollTimeline: true,
      showCanvas: false,
      showTreeChart: false,
      showZyCharts: false,
      showDefaultGraph: false,
      showZyButton: false,
      // chartData: [
      //   {
      //     name: 'flare',
      //     children: [
      //       {
      //         name: 'analytics',
      //         children: [
      //           {
      //             name: 'cluster',
      //             children: [
      //               { name: 'AgglomerativeCluster', value: 3938 },
      //               { name: 'CommunityStructure', value: 3812 },
      //               { name: 'HierarchicalCluster', value: 6714 },
      //               { name: 'MergeEdge', value: 743 },
      //             ],
      //           },
      //           {
      //             name: 'graph',
      //             children: [
      //               { name: 'BetweennessCentrality', value: 3534 },
      //               { name: 'LinkDistance', value: 5731 },
      //               { name: 'MaxFlowMinCut', value: 7840 },
      //               { name: 'ShortestPaths', value: 5914 },
      //               { name: 'SpanningTree', value: 3416 },
      //             ],
      //           },
      //           {
      //             name: 'optimization',
      //             children: [{ name: 'AspectRatioBanker', value: 7074 }],
      //           },
      //         ],
      //       },
      //       {
      //         name: 'animate',
      //         children: [
      //           { name: 'Easing', value: 17010 },
      //           { name: 'FunctionSequence', value: 5842 },
      //           {
      //             name: 'interpolate',
      //             children: [
      //               { name: 'ArrayInterpolator', value: 1983 },
      //               { name: 'ColorInterpolator', value: 2047 },
      //               { name: 'DateInterpolator', value: 1375 },
      //               { name: 'Interpolator', value: 8746 },
      //               { name: 'MatrixInterpolator', value: 2202 },
      //               { name: 'NumberInterpolator', value: 1382 },
      //               { name: 'ObjectInterpolator', value: 1629 },
      //               { name: 'PointInterpolator', value: 1675 },
      //               { name: 'RectangleInterpolator', value: 2042 },
      //             ],
      //           },
      //           { name: 'ISchedulable', value: 1041 },
      //           { name: 'Parallel', value: 5176 },
      //           { name: 'Pause', value: 449 },
      //           { name: 'Scheduler', value: 5593 },
      //           { name: 'Sequence', value: 5534 },
      //           { name: 'Transition', value: 9201 },
      //           { name: 'Transitioner', value: 19975 },
      //           { name: 'TransitionEvent', value: 1116 },
      //           { name: 'Tween', value: 6006 },
      //         ],
      //       },
      //       {
      //         name: 'data',
      //         children: [
      //           {
      //             name: 'converters',
      //             children: [
      //               {
      //                 name: 'Converters',
      //                 children: [
      //                   { name: 'wec', value: 841 },
      //                   { name: 'cvb', value: 412 },
      //                   { name: 'rtf', value: 741 },
      //                   { name: 'wsx', value: 557 },
      //                 ],
      //               },
      //               { name: 'DelimitedTextConverter', value: 4294 },
      //               { name: 'GraphMLConverter', value: 9800 },
      //               { name: 'IDataConverter', value: 1314 },
      //               { name: 'JSONConverter', value: 2220 },
      //             ],
      //           },
      //           { name: 'DataField', value: 1759 },
      //           { name: 'DataSchema', value: 2165 },
      //           { name: 'DataSet', value: 586 },
      //           { name: 'DataSource', value: 3331 },
      //           { name: 'DataTable', value: 772 },
      //           { name: 'DataUtil', value: 3322 },
      //         ],
      //       },
      //       {
      //         name: 'display',
      //         children: [
      //           { name: 'DirtySprite', value: 8833 },
      //           { name: 'LineSprite', value: 1732 },
      //           { name: 'RectSprite', value: 3623 },
      //           { name: 'TextSprite', value: 10066 },
      //         ],
      //       },
      //       {
      //         name: 'flex',
      //         children: [{ name: 'FlareVis', value: 4116 }],
      //       },
      //       {
      //         name: 'physics',
      //         children: [
      //           { name: 'DragForce', value: 1082 },
      //           { name: 'GravityForce', value: 1336 },
      //           { name: 'IForce', value: 319 },
      //           { name: 'NBodyForce', value: 10498 },
      //           { name: 'Particle', value: 2822 },
      //           { name: 'Simulation', value: 9983 },
      //           { name: 'Spring', value: 2213 },
      //           { name: 'SpringForce', value: 1681 },
      //         ],
      //       },
      //       {
      //         name: 'query',
      //         children: [
      //           { name: 'AggregateExpression', value: 1616 },
      //           { name: 'And', value: 1027 },
      //           { name: 'Arithmetic', value: 3891 },
      //           { name: 'Average', value: 891 },
      //           { name: 'BinaryExpression', value: 2893 },
      //           { name: 'Comparison', value: 5103 },
      //           { name: 'CompositeExpression', value: 3677 },
      //           { name: 'Count', value: 781 },
      //           { name: 'DateUtil', value: 4141 },
      //           { name: 'Distinct', value: 933 },
      //           { name: 'Expression', value: 5130 },
      //           { name: 'ExpressionIterator', value: 3617 },
      //           { name: 'Fn', value: 3240 },
      //           { name: 'If', value: 2732 },
      //           { name: 'IsA', value: 2039 },
      //           { name: 'Literal', value: 1214 },
      //           { name: 'Match', value: 3748 },
      //           { name: 'Maximum', value: 843 },
      //           {
      //             name: 'methods',
      //             children: [
      //               {
      //                 name: 'add',
      //                 children: [
      //                   { name: 'sub', value: 440 },
      //                   { name: 'qwe', value: 789 },
      //                   { name: 'pou', value: 452 },
      //                   {
      //                     name: 'wed',
      //                     children: [
      //                       { name: 'bnv', value: 421 },
      //                       { name: 'xvv', value: 426 },
      //                       { name: 'azc', value: 328 },
      //                       { name: 'jul', value: 513 },
      //                     ],
      //                   },
      //                 ],
      //               },
      //               { name: 'and', value: 330 },
      //               { name: 'average', value: 287 },
      //               { name: 'count', value: 277 },
      //               { name: 'distinct', value: 292 },
      //               { name: 'div', value: 595 },
      //               { name: 'eq', value: 594 },
      //               { name: 'fn', value: 460 },
      //               { name: 'gt', value: 603 },
      //               { name: 'gte', value: 625 },
      //               { name: 'iff', value: 748 },
      //               { name: 'isa', value: 461 },
      //               { name: 'lt', value: 597 },
      //               { name: 'lte', value: 619 },
      //               { name: 'max', value: 283 },
      //               { name: 'min', value: 283 },
      //               { name: 'mod', value: 591 },
      //               { name: 'mul', value: 603 },
      //               { name: 'neq', value: 599 },
      //               { name: 'not', value: 386 },
      //               { name: 'or', value: 323 },
      //               { name: 'orderby', value: 307 },
      //               { name: 'range', value: 772 },
      //               { name: 'select', value: 296 },
      //               { name: 'stddev', value: 363 },
      //               { name: 'sub', value: 600 },
      //               { name: 'sum', value: 280 },
      //               { name: 'update', value: 307 },
      //               { name: 'variance', value: 335 },
      //               { name: 'where', value: 299 },
      //               { name: 'xor', value: 354 },
      //               { name: '-', value: 264 },
      //             ],
      //           },
      //           { name: 'Minimum', value: 843 },
      //           { name: 'Not', value: 1554 },
      //           { name: 'Or', value: 970 },
      //           { name: 'Query', value: 13896 },
      //           { name: 'Range', value: 1594 },
      //           { name: 'StringUtil', value: 4130 },
      //           { name: 'Sum', value: 791 },
      //           { name: 'Variable', value: 1124 },
      //           { name: 'Variance', value: 1876 },
      //           { name: 'Xor', value: 1101 },
      //         ],
      //       },
      //       {
      //         name: 'scale',
      //         children: [
      //           { name: 'IScaleMap', value: 2105 },
      //           { name: 'LinearScale', value: 1316 },
      //           { name: 'LogScale', value: 3151 },
      //           { name: 'OrdinalScale', value: 3770 },
      //           { name: 'QuantileScale', value: 2435 },
      //           { name: 'QuantitativeScale', value: 4839 },
      //           { name: 'RootScale', value: 1756 },
      //           { name: 'Scale', value: 4268 },
      //           { name: 'ScaleType', value: 1821 },
      //           { name: 'TimeScale', value: 5833 },
      //         ],
      //       },
      //       {
      //         name: 'util',
      //         children: [
      //           { name: 'Arrays', value: 8258 },
      //           { name: 'Colors', value: 10001 },
      //           { name: 'Dates', value: 8217 },
      //           { name: 'Displays', value: 12555 },
      //           { name: 'Filter', value: 2324 },
      //           { name: 'Geometry', value: 10993 },
      //           {
      //             name: 'heap',
      //             children: [
      //               { name: 'FibonacciHeap', value: 9354 },
      //               { name: 'HeapNode', value: 1233 },
      //             ],
      //           },
      //           { name: 'IEvaluable', value: 335 },
      //           { name: 'IPredicate', value: 383 },
      //           { name: 'IValueProxy', value: 874 },
      //           {
      //             name: 'math',
      //             children: [
      //               { name: 'DenseMatrix', value: 3165 },
      //               { name: 'IMatrix', value: 2815 },
      //               { name: 'SparseMatrix', value: 3366 },
      //             ],
      //           },
      //           { name: 'Maths', value: 17705 },
      //           { name: 'Orientation', value: 1486 },
      //           {
      //             name: 'palette',
      //             children: [
      //               { name: 'ColorPalette', value: 6367 },
      //               { name: 'Palette', value: 1229 },
      //               { name: 'ShapePalette', value: 2059 },
      //               { name: 'SizePalette', value: 2291 },
      //             ],
      //           },
      //           { name: 'Property', value: 5559 },
      //           { name: 'Shapes', value: 19118 },
      //           { name: 'Sort', value: 6887 },
      //           { name: 'Stats', value: 6557 },
      //           { name: 'Strings', value: 22026 },
      //         ],
      //       },
      //       {
      //         name: 'vis',
      //         children: [
      //           {
      //             name: 'axis',
      //             children: [
      //               { name: 'Axes', value: 1302 },
      //               { name: 'Axis', value: 24593 },
      //               { name: 'AxisGridLine', value: 652 },
      //               { name: 'AxisLabel', value: 636 },
      //               { name: 'CartesianAxes', value: 6703 },
      //             ],
      //           },
      //           {
      //             name: 'controls',
      //             children: [
      //               { name: 'AnchorControl', value: 2138 },
      //               { name: 'ClickControl', value: 3824 },
      //               { name: 'Control', value: 1353 },
      //               { name: 'ControlList', value: 4665 },
      //               { name: 'DragControl', value: 2649 },
      //               { name: 'ExpandControl', value: 2832 },
      //               { name: 'HoverControl', value: 4896 },
      //               { name: 'IControl', value: 763 },
      //               { name: 'PanZoomControl', value: 5222 },
      //               { name: 'SelectionControl', value: 7862 },
      //               { name: 'TooltipControl', value: 8435 },
      //             ],
      //           },
      //           {
      //             name: 'data',
      //             children: [
      //               { name: 'Data', value: 20544 },
      //               { name: 'DataList', value: 19788 },
      //               { name: 'DataSprite', value: 10349 },
      //               { name: 'EdgeSprite', value: 3301 },
      //               { name: 'NodeSprite', value: 19382 },
      //               {
      //                 name: 'render',
      //                 children: [
      //                   { name: 'ArrowType', value: 698 },
      //                   { name: 'EdgeRenderer', value: 5569 },
      //                   { name: 'IRenderer', value: 353 },
      //                   { name: 'ShapeRenderer', value: 2247 },
      //                 ],
      //               },
      //               { name: 'ScaleBinding', value: 11275 },
      //               { name: 'Tree', value: 7147 },
      //               { name: 'TreeBuilder', value: 9930 },
      //             ],
      //           },
      //           {
      //             name: 'events',
      //             children: [
      //               { name: 'DataEvent', value: 2313 },
      //               { name: 'SelectionEvent', value: 1880 },
      //               { name: 'TooltipEvent', value: 1701 },
      //               { name: 'VisualizationEvent', value: 1117 },
      //             ],
      //           },
      //           {
      //             name: 'legend',
      //             children: [
      //               { name: 'Legend', value: 20859 },
      //               { name: 'LegendItem', value: 4614 },
      //               { name: 'LegendRange', value: 10530 },
      //             ],
      //           },
      //           {
      //             name: 'operator',
      //             children: [
      //               {
      //                 name: 'distortion',
      //                 children: [
      //                   { name: 'BifocalDistortion', value: 4461 },
      //                   { name: 'Distortion', value: 6314 },
      //                   { name: 'FisheyeDistortion', value: 3444 },
      //                 ],
      //               },
      //               {
      //                 name: 'encoder',
      //                 children: [
      //                   { name: 'ColorEncoder', value: 3179 },
      //                   { name: 'Encoder', value: 4060 },
      //                   { name: 'PropertyEncoder', value: 4138 },
      //                   { name: 'ShapeEncoder', value: 1690 },
      //                   { name: 'SizeEncoder', value: 1830 },
      //                 ],
      //               },
      //               {
      //                 name: 'filter',
      //                 children: [
      //                   { name: 'FisheyeTreeFilter', value: 5219 },
      //                   { name: 'GraphDistanceFilter', value: 3165 },
      //                   { name: 'VisibilityFilter', value: 3509 },
      //                 ],
      //               },
      //               { name: 'IOperator', value: 1286 },
      //               {
      //                 name: 'label',
      //                 children: [
      //                   { name: 'Labeler', value: 9956 },
      //                   { name: 'RadialLabeler', value: 3899 },
      //                   { name: 'StackedAreaLabeler', value: 3202 },
      //                 ],
      //               },
      //               {
      //                 name: 'layout',
      //                 children: [
      //                   { name: 'AxisLayout', value: 6725 },
      //                   { name: 'BundledEdgeRouter', value: 3727 },
      //                   { name: 'CircleLayout', value: 9317 },
      //                   { name: 'CirclePackingLayout', value: 12003 },
      //                   { name: 'DendrogramLayout', value: 4853 },
      //                   { name: 'ForceDirectedLayout', value: 8411 },
      //                   { name: 'IcicleTreeLayout', value: 4864 },
      //                   { name: 'IndentedTreeLayout', value: 3174 },
      //                   { name: 'Layout', value: 7881 },
      //                   { name: 'NodeLinkTreeLayout', value: 12870 },
      //                   { name: 'PieLayout', value: 2728 },
      //                   { name: 'RadialTreeLayout', value: 12348 },
      //                   { name: 'RandomLayout', value: 870 },
      //                   { name: 'StackedAreaLayout', value: 9121 },
      //                   { name: 'TreeMapLayout', value: 9191 },
      //                 ],
      //               },
      //               { name: 'Operator', value: 2490 },
      //               { name: 'OperatorList', value: 5248 },
      //               { name: 'OperatorSequence', value: 4190 },
      //               { name: 'OperatorSwitch', value: 2581 },
      //               { name: 'SortOperator', value: 2023 },
      //             ],
      //           },
      //           { name: 'Visualization', value: 16540 },
      //         ],
      //       },
      //     ],
      //   },
      // ],
      chartData: [
        {
          children: [
            {
              children: [
                {
                  children: [],
                  component: "HttpClient",
                  dur: 1,
                  endTime: 1605247596426,
                  endpointName: "/v1/catalog/services",
                  isError: true,
                  label: "/v1/catalog/services",
                  layer: "Http",
                  level: 2,
                  log: [],
                  parentSpanId: 0,
                  peer: "do1cloud-insight-consul-server:8500",
                  refs: [],
                  segmentId:
                    "449bd9796b2e44cbabf40de262451a21.71.16052475964246584",
                  serviceCode: "do1cloud-authorization",
                  spanId: 1,
                  startTime: 1605247596425,
                  tag: [
                    {
                      key: "url",
                      value:
                        "http://do1cloud-insight-consul-server:8500/v1/catalog/services",
                    },
                    { key: "http.method", value: "GET" },
                  ],
                  totalExec: 4,
                  traceId:
                    "449bd9796b2e44cbabf40de262451a21.71.16052475964246585",
                  type: "Exit",
                  uniqueKey: "HttpClient1",
                },
                {
                  children: [
                    {
                      children: [],
                      component: "HttpClient",
                      dur: 1,
                      endTime: 1605247596426,
                      endpointName: "/v1/catalog/services",
                      isError: false,
                      label: "/v1/catalog/services",
                      layer: "Http",
                      level: 2,
                      log: [],
                      parentSpanId: 0,
                      peer: "do1cloud-insight-consul-server:8500",
                      refs: [],
                      segmentId:
                        "449bd9796b2e44cbabf40de262451a21.71.16052475964246584",
                      serviceCode: "do1cloud-authorization",
                      spanId: 1,
                      startTime: 1605247596425,
                      tag: [
                        {
                          key: "url",
                          value:
                            "http://do1cloud-insight-consul-server:8500/v1/catalog/services",
                        },
                        { key: "http.method", value: "GET" },
                      ],
                      totalExec: 4,
                      traceId:
                        "449bd9796b2e44cbabf40de262451a21.71.16052475964246585",
                      type: "Exit",
                      uniqueKey: "HttpClient1",
                    },
                  ],
                  component: "HttpClient",
                  dur: 1,
                  endTime: 1605247596426,
                  endpointName: "/v1/catalog/services",
                  isError: false,
                  label: "/v1/catalog/services",
                  layer: "Http",
                  level: 2,
                  log: [],
                  parentSpanId: 0,
                  peer: "do1cloud-insight-consul-server:8500",
                  refs: [],
                  segmentId:
                    "449bd9796b2e44cbabf40de262451a21.71.16052475964246584",
                  serviceCode: "do1cloud-authorization",
                  spanId: 1,
                  startTime: 1605247596425,
                  tag: [
                    {
                      key: "url",
                      value:
                        "http://do1cloud-insight-consul-server:8500/v1/catalog/services",
                    },
                    { key: "http.method", value: "GET" },
                  ],
                  totalExec: 4,
                  traceId:
                    "449bd9796b2e44cbabf40de262451a21.71.16052475964246585",
                  type: "Exit",
                  uniqueKey: "HttpClient1",
                },
              ],
              component: "HttpClient",
              dur: 1,
              endTime: 1605247596426,
              endpointName: "/v1/catalog/services",
              isError: true,
              label: "/v1/catalog/services",
              layer: "Http",
              level: 2,
              log: [],
              parentSpanId: 0,
              peer: "do1cloud-insight-consul-server:8500",
              refs: [],
              segmentId:
                "449bd9796b2e44cbabf40de262451a21.71.16052475964246584",
              serviceCode: "do1cloud-authorization",
              spanId: 1,
              startTime: 1605247596425,
              tag: [
                {
                  key: "url",
                  value:
                    "http://do1cloud-insight-consul-server:8500/v1/catalog/services",
                },
                { key: "http.method", value: "GET" },
              ],
              totalExec: 45,
              traceId: "449bd9796b2e44cbabf40de262451a21.71.16052475964246585",
              type: "Exit",
              uniqueKey: "HttpClient1",
            },
            {
              children: [],
              component: "HttpClient",
              dur: 0,
              endTime: 1605247596426,
              endpointName: "/v1/status/leader",
              isError: false,
              label: "/v1/status/leader",
              layer: "Http",
              level: 2,
              log: [],
              parentSpanId: 0,
              peer: "do1cloud-insight-consul-server:8500",
              refs: [],
              segmentId:
                "449bd9796b2e44cbabf40de262451a21.71.16052475964246584",
              serviceCode: "do1cloud-authorization",
              spanId: 2,
              startTime: 1605247596426,
              tag: [
                {
                  key: "url",
                  value:
                    "http://do1cloud-insight-consul-server:8500/v1/status/leader",
                },
                { key: "http.method", value: "GET" },
              ],
              totalExec: 85,
              traceId: "449bd9796b2e44cbabf40de262451a21.71.16052475964246585",
              type: "Exit",
              uniqueKey: "HttpClient2",
            },
            {
              children: [],
              component: "HttpClient",
              dur: 1,
              endTime: 1605247596427,
              endpointName: "/v1/catalog/services",
              isError: false,
              label: "/v1/catalog/services",
              layer: "Http",
              level: 2,
              logs: [],
              parentSpanId: 0,
              peer: "do1cloud-insight-consul-server:8500",
              refs: [],
              segmentId:
                "449bd9796b2e44cbabf40de262451a21.71.16052475964246584",
              serviceCode: "do1cloud-authorization",
              spanId: 3,
              startTime: 1605247596426,
              tag: [
                {
                  key: "url",
                  value:
                    "http://do1cloud-insight-consul-server:8500/v1/catalog/services",
                },
                { key: "http.method", value: "GET" },
              ],
              totalExec: 4,
              traceId: "449bd9796b2e44cbabf40de262451a21.71.16052475964246585",
              type: "Exit",
              uniqueKey: "HttpClient3",
            },
          ],
          name: "asdf",
          component: "Tomcat",
          dur: 2,
          endTime: 1605247596428,
          endpointName: "/actuator/health",
          isError: false,
          label: "/actuator/health",
          layer: "Http",
          level: 1,
          log: [],
          parentSpanId: -1,
          peer: "",
          refs: [],
          segmentId: "449bd9796b2e44cbabf40de262451a21.71.16052475964246584",
          serviceCode: "do1cloud-authorization",
          spanId: 0,
          startTime: 1605247596424,
          tag: [
            { key: "url", value: "http://10.20.119.135:11001/actuator/health" },
            { key: "http.method", value: "GET" },
          ],
          totalExec: 40,
          traceId: "449bd9796b2e44cbabf40de262451a21.71.16052475964246585",
          type: "Entry",
          uniqueKey: "Tomcat0",
        },
      ],
      chartTitle: "树图",
    };
  },
  mounted() {
    this.canvasDraw();
  },
  methods: {
    canvasDraw() {
      let canvas = document.getElementById("canvas_1"); //从html中获取到Canvas
      let ctx_2d = canvas.getContext("2d"); //得到canvas的渲染上下文

      // ctx_2d.fillStyle = 'rgb(200,0,0)' //设置颜色为红色
      // ctx_2d.fillRect(10, 10, 55, 50) //设置矩形的大小

      // ctx_2d.fillStyle = 'rgba(0,0,200,0.5)' //设置颜色为蓝色，并且透明
      // ctx_2d.fillRect(30, 30, 55, 50) //设置矩形的大小

      //<-------矩形-------->
      // const ctx_2dSize = [100, 100]
      // ctx_2d.fillStyle = 'red'
      // ctx_2d.beginPath() //指令开始绘制图案
      // //rect表示绘制矩形
      // ctx_2d.rect(
      //   0.5 * (canvas.width - ctx_2dSize[0]),
      //   0.5 * (canvas.height - ctx_2dSize[1]),
      //   100,
      //   100
      // ) //中心点绘制一个 100 * 100 的正方形,四个参数分别为（x,y，宽，高）
      // ctx_2d.fill() //调用 fill 指令，将绘制内容真正输出到画布上

      //<-------三角形-------->
      // ctx_2d.beginPath()
      // ctx_2d.moveTo(75, 50) //将笔触移动到指定的坐标x以及y上。设置起点,想象一下在纸上作业，一支钢笔或者铅笔的笔尖从一个点到另一个点的移动过程。
      // ctx_2d.lineTo(100, 75)
      // ctx_2d.lineTo(100, 25)
      // ctx_2d.fill()

      //<--------笑脸--------->
      // ctx_2d.beginPath()
      // ctx_2d.arc(75, 75, 50, 0, Math.PI * 2, true) //arc() 方法创建弧/曲线（用于创建圆或部分圆）
      // //context.arc(x(圆心的x坐标),y(圆心的y坐标),r(半径),sAngle(	起始角，以弧度计（弧的圆形的三点钟位置是 0 度）。),eAngle(结束角，以弧度计),counterclockwise(False = 顺时针，true = 逆时针));
      // ctx_2d.moveTo(110, 75)
      // ctx_2d.arc(75, 75, 35, 0, Math.PI, false) // 口(顺时针)
      // ctx_2d.moveTo(65, 65)
      // ctx_2d.arc(60, 65, 5, 0, Math.PI * 2, true) // 左眼
      // ctx_2d.moveTo(95, 65)
      // ctx_2d.arc(90, 65, 5, 0, Math.PI * 2, true) // 右眼
      // ctx_2d.stroke() //通过线条来绘制图形轮廓。[路径使用填充（fill）时，路径自动闭合，使用描边（stroke）则不会闭合路径。如果没有添加闭合路径closePath()到描述三角形函数中，则只绘制了两条线段，并不是一个完整的三角形]

      //<---------二次贝塞尔曲线------->
      // ctx_2d.beginPath()
      // ctx_2d.moveTo(75, 25) //开始点
      // ctx_2d.quadraticCurveTo(25, 25, 25, 62.5) //控制点x,y 结束点x,y
      // ctx_2d.quadraticCurveTo(25, 100, 50, 100)
      // ctx_2d.quadraticCurveTo(50, 120, 30, 125)
      // ctx_2d.quadraticCurveTo(60, 120, 65, 100)
      // ctx_2d.quadraticCurveTo(125, 100, 125, 62.5)
      // ctx_2d.quadraticCurveTo(125, 25, 75, 25)
      // ctx_2d.stroke()

      //<--------三次贝塞尔曲线(心形 ♥ )--------->
      // ctx_2d.beginPath()
      // ctx_2d.moveTo(75, 40)
      // ctx_2d.bezierCurveTo(75, 37, 70, 25, 50, 25)
      // ctx_2d.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5)
      // ctx_2d.bezierCurveTo(20, 80, 40, 102, 75, 120)
      // ctx_2d.bezierCurveTo(110, 102, 130, 80, 130, 62.5)
      // ctx_2d.bezierCurveTo(130, 62.5, 130, 25, 100, 25)
      // ctx_2d.bezierCurveTo(85, 25, 75, 37, 75, 40)
      // ctx_2d.fillStyle = 'red'
      // ctx_2d.fill()

      //<--------Path2D—------->
      //我们创造了一个矩形和一个圆。它们都被存为Path2D对象，后面再派上用场
      var rectangle = new Path2D();
      rectangle.rect(10, 10, 50, 50);

      var circle = new Path2D();
      circle.moveTo(125, 35);
      circle.arc(100, 35, 25, 0, Math.PI * 2);

      ctx_2d.stroke(rectangle);
      ctx_2d.fill(circle);
    },
    click() {
      console.log("点我了");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#canvas_1 {
  background-color: pink;
}
</style>
