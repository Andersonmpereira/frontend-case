<template>
    <div class="action">
        <button class="btn btn-transparent orange" @click="start" v-if="!isRunning">
            <Icon class="icon" name="ri:play-fill" width="16" height="16"/>
            Iniciar
        </button>
        <button class="btn btn-transparent black" @click="pause" v-if="isRunning">
            <Icon class="icon" name="ri:pause-circle-fill" width="16" height="16"/>
            Pausar
        </button> 
        <button class="btn btn-transparent red" @click="stop" v-if="isRunning">
            <Icon class="icon" name="ri:stop-circle-fill" width="16" height="16"/>
            Parar
        </button> 
    </div>
</template>

<script setup>
    const props = defineProps({
        isRunning: {
            type: Boolean,
            required: true
        },
    })

    const emit = defineEmits(['start', 'pause', 'stop'])

    const start = () => {
        emit('start')
    }

    const pause = () => {
        emit('pause')
    }

    const stop = () => {
        emit('stop')
    }
</script>