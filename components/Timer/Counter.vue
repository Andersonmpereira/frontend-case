<template>
    <div class="counter">
        <span class="status"> {{ status }} </span>
        <div class="numbers" v-html="formattedElapsedTime"></div>
    </div>
</template>

<script setup>
    const props = defineProps({
        elapsedTime: {
            type: Number,
            required: true
        },
        isRunning: {
            type: Boolean,
            required: true
        },
    })

    const status = computed(() => { 
        return props.isRunning ? 'Em andamento' : 'Aguardando'
    })
    
    const formattedElapsedTime = computed(() => {
        const seconds = props.elapsedTime
        const minutes = Math.floor((seconds % 3600) / 60)
        const hours = Math.floor(seconds / 3600)
        const remainingSeconds = seconds % 60
        
        const paddedHours = pad(hours)
        const paddedMinutes = pad(minutes)
        const paddedSeconds = pad(remainingSeconds)

        return `
            <span class="hours">${paddedHours}</span>
            <span class="minutes">:${paddedMinutes}</span>
            <span class="seconds">:${paddedSeconds}</span>
        `
    })

    const pad = (value) => {
        return value.toString().padStart(2, '0')
    }
</script>