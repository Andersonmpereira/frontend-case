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
            <component :is="card.componentName" />
        </Card>
    </div>
</template>

<script setup>
    import { Timer, DailyWork, CoursesProgress, Highlight, Courses, Feedback } from '#components'

    const cards = [
        {
            iconTitle: 'ri:timer-flash-line',
            title: 'Rastreador de tempo',
            btnIcon: 'ri:history-line',
            btnText: 'Histórico',
            componentName: Timer
        },
        {
            iconTitle: 'ri:timer-line',
            title: 'Horas diárias de trabalho',
            btnText: 'Detalhes',
            componentName: DailyWork
        },
        {
            iconTitle: 'ri:book-3-line',
            title: 'Cursos - Progresso',
            btnText: 'Ver todos',
            componentName: CoursesProgress
        },
        {
            iconTitle: 'ri:star-smile-line',
            title: 'Destaque colaboradores',
            btnIcon: 'ri:share-forward-line',
            btnText: 'Enviar',
            componentName: Highlight
        },
        {
            iconTitle: 'ri:book-3-line',
            title: 'Cursos',
            btnText: 'Ver todos',
            componentName: Courses
        },
        {
            iconTitle: 'ri:discuss-line',
            title: 'Feedback diário',
            componentName: Feedback
        }
    ]
</script>