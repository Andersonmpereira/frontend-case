<template>
    <div class="pie" v-if="status">
        <figure class="progress-circle"></figure>
        <figure class="progress-bar"></figure>
        <span class="score">25%</span>
    </div>
    <div class="pie empty" v-else>
        <figure class="progress-circle"></figure>
        <figure class="progress-bar"></figure>
        <span class="score">0%</span>
    </div>
</template>

<script setup>
    const props = defineProps({
        status: {
            type: Boolean,
            required: true
        }
    })
</script>