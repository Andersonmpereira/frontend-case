<template>
    <div class="work-time">
        <span class="hours">{{ hours }}</span> horas <span class="minutes">{{ minutes }}</span> minutos no total ⏳
    </div>
</template>


<script setup>
    const props = defineProps({
        hours: {
            type: String,
            default: '0'
        },
        minutes: {
            type: String,
            default: '0'
        }
    })
</script>
