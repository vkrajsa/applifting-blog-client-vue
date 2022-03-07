<script setup lang="ts">
import { ref, computed } from 'vue';
import { Pagination } from '../types/article';
import BaseLoader from '../components/base/BaseLoader';

interface Props {
  pagination: Pagination;
  itemsPerPage: number;
  loading: boolean;
}

interface Emits {
  (e: 'change-page', page: number): number;
}

const emit = defineEmits<Emits>();
const props = defineProps<Props>();
const totalPages = ref(Math.ceil(props.pagination.total / props.itemsPerPage));

const currentPage = ref(1);

const isLastPage = computed(() => {
  return props.pagination.total < props.pagination.offset + props.itemsPerPage;
});
const isFirstPage = computed(() => {
  return props.pagination.offset === 0;
});

const nextPage = () => {
  if (isLastPage.value) {
    return;
  }

  currentPage.value++;
  emit('change-page', props.itemsPerPage);
};

const prevPage = () => {
  if (isFirstPage.value) {
    return;
  }

  currentPage.value--;
  emit('change-page', -props.itemsPerPage);
};
</script>

<template>
  <nav>
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link action-icon" aria-label="Previous" @click="prevPage()">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li
        v-for="page in Array.from({ length: totalPages }, (_, i) => i + 1)"
        :key="page"
        class="page-item"
        :class="{ active: page === currentPage }"
      >
        <a class="page-link">{{ page }}</a>
      </li>
      <li class="page-item">
        <a class="page-link action-icon" aria-label="Next" @click="nextPage()">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
  <BaseLoader v-if="loading" :button="false" />
</template>

<style scoped>
.active {
  background-color: $primary;
}
</style>
