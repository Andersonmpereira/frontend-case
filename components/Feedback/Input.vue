<template>
    <textarea type="text" class="input-lg" :placeholder="placeholder"></textarea>
</template>

<script setup>
    const props = defineProps({
        placeholder: {
            type: String,
            required: true
        }
    })
</script>