<template>
  <div class="form-floating mb-3">
    <input
      :placeholder="label"
      class="form-control"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <label>{{ label }}</label>
    <BaseValidationError v-for="error in validations" :key="error.$uid">
      {{ error.$message }}
    </BaseValidationError>
  </div>
</template>

<script>
import BaseValidationError from '@/components/base/BaseValidationError.vue';

export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    validations: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: [String, Number],
    },
  },
  components: {
    BaseValidationError,
  },
};
</script>
