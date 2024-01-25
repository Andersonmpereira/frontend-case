<template>
    <div v-if="list" class="history">
        <h4 class="title">TAREFAS ANTERIORES</h4>
        <TimerItem 
            v-for="(item, index) in lastTwoItems"
            :key="index"
            :task-time="item.time"
            @remove="removeItemFromHistory(index)"
        />
    </div>
    <div v-else class="not-history">
        <img src="../../assets/img/not-history.png" alt="laptop com timer">
        <p>Sem registro de atividades.</p>
    </div>
</template>

<script setup>
    const { removeFromHistory } = useTimer()

    const removeItemFromHistory = (index) => {
        removeFromHistory(index)
    }

    const props = defineProps({
        history: {
            type: Array
        }
    })

    const list = computed(() => { 
        if (props.history.length === 0) return false
        return props.history
    })

    const lastTwoItems = computed(() => {
        if (!list.value) return []
        return list.value.slice(-2).reverse()
    })
</script>