<template>
  <div class="mb-3" :class="{ 'form-floating': type != 'no-label' }">
    <input
      v-if="!textarea"
      :placeholder="label"
      class="form-control"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :required="required"
    />
    <textarea
      v-else
      class="form-control"
      :placeholder="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :rows="rows"
      :required="required"
    ></textarea>
    <label v-if="type != 'no-label'">{{ label }}</label>
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
    textarea: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: Number,
      default: null,
    },
    modelValue: {
      type: [String, Number],
    },
  },
};
</script>
