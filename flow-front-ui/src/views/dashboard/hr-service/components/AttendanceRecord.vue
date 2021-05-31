<template>
  <Card title="考勤记录" :loading="loading">
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
            tooltip: {
              trigger: 'item',
            },
            legend: {
              bottom: '1%',
              left: 'center',
            },
            series: [
              {
                color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
                name: '我的考勤',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                  borderRadius: 4,
                  borderColor: '#fff',
                  borderWidth: 2,
                },
                label: {
                  show: false,
                  position: 'center',
                },
                emphasis: {
                  label: {
                    show: true,
                    fontSize: '12',
                    fontWeight: 'bold',
                  },
                },
                labelLine: {
                  show: false,
                },
                data: [
                  { value: 1048, name: '日常出差' },
                  { value: 735, name: '因公外出' },
                  { value: 580, name: '累计请假' },
                  { value: 484, name: '迟到早退' },
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
