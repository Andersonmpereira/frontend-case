<template>
    <TimerCard 
        :title="'Track App'" 
        :iconName="'logos:monday-icon'" 
    >
        <TimerCounter/>
        <TimerAction/>
        <template #history>
            <TimerHistory />
        </template>
    </TimerCard>
</template>