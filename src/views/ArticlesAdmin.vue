<script setup lang="ts">
import AdminTable from '../components/AdminTable.vue';
import BaseLoader from '../components/base/BaseLoader';
</script>

<template>
  <Suspense>
    <template #default>
      <AdminTable />
    </template>
    <template #fallback> <BaseLoader :button="false" /></template>
  </Suspense>
</template>
