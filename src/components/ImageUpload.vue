<script setup lang="ts"></script>

<template>
  <div class="col col-md-6">
    <input
      type="file"
      class="form-control"
      @input="$emit('get-file', $event.target.files[0])"
      @change="setImgPreview"
    />
  </div>
  <slot></slot>
  <div class="row justify-content-start my-3">
    <div class="col-4 justify-content-end">
      <div class="card border d-flex aligns-items-center justify-content-center">
        <span v-if="!imgPreview" class="text-center"> Upload your image</span>
        <img alt="Img preview" width="150" height="150" :src="imgPreview" v-show="imgPreview" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['get-file'],
  props: {
    required: {
      type: Boolean,
      default: false,
    },
    fetchedImage: {
      type: String,
      default: null,
    },
    imageSelected: {
      type: File,
      default: null,
    },
  },
  data() {
    return {
      imgPreview: this.fetchedImage ?? null,
    };
  },
  methods: {
    setImgPreview(event) {
      this.imgPreview = URL.createObjectURL(event.target.files[0]);
    },
  },
  watch: {
    imageSelected(fileRemoved, fileAdded) {
      if (fileRemoved === null) {
        this.imgPreview = null;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  width: 150px;
  height: 150px;
}
</style>
