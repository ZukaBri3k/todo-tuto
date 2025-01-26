<template>
    <h1>Todo numéro {{  route.params.id }}</h1>
</template>

<script setup lang="ts">
const route = useRoute()
</script>