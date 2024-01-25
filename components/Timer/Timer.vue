<template>
    <TimerCard 
        :title="'Track App'" 
        :iconName="'logos:monday-icon'" 
    >
        <TimerCounter
            :elapsedTime="stateTimer.elapsedTime"
            :isRunning="stateTimer.isRunning"
        />
        <TimerAction 
            :isRunning="stateTimer.isRunning"
            @start="startCount" 
            @pause="pauseCount" 
            @stop="stopCount"
        />
        <template #history>
            <TimerHistory 
                :history="stateTimer.history"
            />
        </template>
    </TimerCard>
</template>

<script setup>
    const { stateTimer, startTimer, stopTimer, pauseTimer } = useTimer()

    const startCount = () => {
        startTimer()
    }

    const stopCount = () => {
        stopTimer()
    }

    const pauseCount = () => {
        pauseTimer()
    }
</script>

