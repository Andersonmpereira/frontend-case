<template>
    <hr class="divider"/>
    <DailyWorkTimer 
        :hours="work.active.hours"
        :minutes="work.active.minutes"
    />
    <DailyWorkProgress 
        :active="work.active.active"
        :relax="work.active.relax"
        :extra="work.active.extra"
    />
    <DailyWorkLabel 
        :mock="true"
    />
</template>

<script setup>
    const work = {
        active: {
            hours : '12',
            minutes: '27',
            active: '70%',
            relax: '20%',
            extra: '10%'
        },
    }
</script>