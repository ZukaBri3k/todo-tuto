<template>
    <li>
        {{ todo.name }}
        <button>Supprimer</button>
    </li>
</template>

<script setup lang="ts">
const { todo } = defineProps<{todo: {id: number, name: string, completed: boolean}}>()
</script>