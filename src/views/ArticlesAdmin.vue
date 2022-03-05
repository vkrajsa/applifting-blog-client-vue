<script setup lang="ts">
import AdminTable from '../components/AdminTable.vue';
import TableSkeleton from '../components/TableSkeleton.vue';
</script>

<template>
  <Suspense>
    <template #default>
      <AdminTable />
    </template>
    <template #fallback> <TableSkeleton /></template>
  </Suspense>
</template>
