<template>
  <div class="form-floating mb-3">
    <input
      :placeholder="label"
      class="form-control"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :required="required"
    />
    <label>{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
    },
  },
};
</script>
