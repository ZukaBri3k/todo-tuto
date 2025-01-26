<template>
    <h1>Home</h1>
    <ul>
        <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
    </ul>
</template>

<script setup lang="ts">
const { data: todos } = await useFetch<{id: number, name: string, completed: boolean}[]>("/api/todos")
</script>