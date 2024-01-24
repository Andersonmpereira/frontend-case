<template>
    <div class="container home">
        <Card
            v-for="(card, index) in cards"
            :key="index"
            :card="'card' + (index + 1)"
            :icon-title="card.iconTitle"
            :title="card.title"
            :btn-icon="card.btnIcon"
            :btn-text="card.btnText"
        >
            <Timer v-if="index === 0" />
            <DailyWork v-if="index === 1" />
            <CoursesProgress v-if="index === 2" />
            <Highlight v-if="index === 3" />
        </Card>
    </div>
</template>

<script setup>
    const cards = [
        {
            iconTitle: 'ri:timer-flash-line',
            title: 'Rastreador de tempo',
            btnIcon: 'ri:history-line',
            btnText: 'Histórico'
        },
        {
            iconTitle: 'ri:timer-line',
            title: 'Horas diárias de trabalho',
            btnText: 'Detalhes'
        },
        {
            iconTitle: 'ri:book-3-line',
            title: 'Cursos - Progresso',
            btnText: 'Ver todos'
        },
        {
            iconTitle: 'ri:star-smile-line',
            title: 'Destaque colaboradores',
            btnIcon: 'ri:share-forward-line',
            btnText: 'Enviar'
        },
        {
            iconTitle: 'ri:book-3-line',
            title: 'Cursos',
            btnText: 'Ver todos'
        },
        {
            iconTitle: 'ri:discuss-line',
            title: 'Feedback diário'
        }
    ]
</script>