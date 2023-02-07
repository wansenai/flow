<template>
  <BasicModal v-bind="$attrs" @register="registerModal" >
    <Description @register="registerDescription" class="operation-desc" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { descriptionSchema } from './sysOperRecord.data';
  import { Description, useDescription } from '/@/components/Description/index';

  export default defineComponent({
    name: 'LoginLogModal',
    components: { BasicModal, Description },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const [registerDescription, {setDescProps}] = useDescription({
        title: '',
        column: 1,
        schema: descriptionSchema,
      });

      const [registerModal] = useModalInner(async (data) => {
        setDescProps({
          data: data.record
        });
      });

      return { registerDescription, registerModal };
    },
  });
</script>
