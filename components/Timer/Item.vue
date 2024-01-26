<template>
    <div class="history-item">
        <div class="icon-container">
            <Icon class="icon" name="ri:alarm-line" width="24" height="24"/>
        </div>
        <div class="item-content">
            <span class="item-title">Tarefa Executada</span>
            <p class="item-timer">{{ taskTime }}</p>
        </div>
        <button class="btn btn-transparent" @click="removeItem"> 
            <Icon class="icon" name="ri:delete-bin-line" width="20" height="20"/>
        </button>
    </div>
</template>

<script setup>
    const props = defineProps({
        taskTime: {
            type: String
        }
    })

    const emits = defineEmits(['remove'])

    const removeItem = () => {
        emits('remove')
    }
</script>