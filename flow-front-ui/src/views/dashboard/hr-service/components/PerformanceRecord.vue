<template>
  <Card title="个人绩效" :loading="loading">
    <div ref="chartRef" :style="{ width, height }"></div>
  </Card>
</template>
<script lang="ts">
  import { defineComponent, Ref, ref, watch } from 'vue';

  import { Card } from 'ant-design-vue';
  import { useECharts } from '/@/hooks/web/useECharts';

  export default defineComponent({
    components: { Card },
    props: {
      loading: Boolean,
      width: {
        type: String as PropType<string>,
        default: '100%',
      },
      height: {
        type: String as PropType<string>,
        default: '300px',
      },
    },
    setup(props) {
      const chartRef = ref<HTMLDivElement | null>(null);
      const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
      watch(
        () => props.loading,
        () => {
          if (props.loading) {
            return;
          }
          setOptions({
            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              show: true,
              orient: 'vertical',
              left: 'right',
              data: ['S','A','B','C','D', 'E'],
            },
            series: [
              {
                color: ['#00eebb', '#ffeebb', '#ff6600', '#b6a2de', '#fbb000', '#00c7c9'],
                name: '个人绩效',
                type: 'pie',
                avoidLabelOverlap: false,
                itemStyle: {
                  borderRadius: 4,
                  borderColor: '#fff',
                  borderWidth: 2,
                },
                label: {
                  show: true,
                  position: 'left',
                },
                emphasis: {
                  label: {
                    show: true,
                    fontSize: '12',
                    fontWeight: 'bold',
                  },
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                labelLine: {
                  show: false,
                },
                data: [
                  { value: 1048, name: 'S' },
                  { value: 735, name: 'A' },
                  { value: 580, name: 'B' },
                  { value: 484, name: 'C' },
                  { value: 334, name: 'D' },
                  { value: 484, name: 'E' },
                ],
                animationType: 'scale',
                animationEasing: 'exponentialInOut',
                animationDelay: function () {
                  return Math.random() * 100;
                },
              },
            ],
          });
        },
        { immediate: true }
      );
      return { chartRef };
    },
  });
</script>
