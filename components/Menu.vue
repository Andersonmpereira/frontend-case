<template>
    <ul 
        class="menu"
        :class="class"
    >
        <h2 
            v-if="title"
            class="title"
        >
            {{ title }}
        </h2>
        <slot/>
    </ul>
</template>

<script setup>
    const props = defineProps({
        title: {
            type: String
        },
        class: {
            type: String
        }
    })
</script>