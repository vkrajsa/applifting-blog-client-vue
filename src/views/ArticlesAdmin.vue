<script setup lang="ts">
import AdminTable from '../components/AdminTable.vue';
</script>

<template>
  <Suspense>
    <template #default>
      <AdminTable />
    </template>
    <template #fallback> Articles are downloading...</template>
  </Suspense>
</template>
