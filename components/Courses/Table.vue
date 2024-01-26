<template>
    <table class="table">
        <thead class="head">
            <tr>
                <th width="25%" scope="col">Professor</th>
                <th width="25%" scope="col">Nome do curso</th>
                <th width="20%" scope="col">Progresso</th>
                <th width="20%" scope="col">Status</th>
                <th width="10%" scope="col"></th>                
            </tr>
        </thead>
        <tbody class="body" v-if="mock">
            <tr
                v-for="row in progress"
            >
                <td width="25%">
                    <div class="teacher">
                        <img class="avatar" :src="row.teacher.avatar" :alt="'Avatar de' + row.teacher.name">
                        <div class="identity">
                            <span class="title">{{ row.teacher.name }}</span>
                            <span class="subtitle">{{ row.teacher.role }}</span>
                        </div>
                    </div>
                </td>
                <td width="25%">
                    <div class="course-name">
                        <span class="title">{{ row.course.title }}</span>
                        <span class="subtitle">{{ row.course.duration }}</span>
                    </div>
                </td>
                <td width="20%">
                    <div class="container">
                        <div class="progress-bar">
                            <span class="bar" aria-label="Progresso do curso"></span>
                            <span class="progress" :style="{ width: row.progression+'%' }" aria-label="Progresso do curso"></span>
                        </div>
                        <span class="percent"> {{ row.progression }}%</span>
                    </div>
                </td>
                <td width="20%">
                    <div class="badget" v-if="row.progression === 100">
                        <Icon class="icon green" name="ri:checkbox-circle-fill" width="20" height="20" alt="Ícone de curso concluído"/>
                        <span class="text">Concluído</span>
                    </div>
                    <div class="badget" v-else>
                        <Icon class="icon orange" name="ri:time-fill" width="20" height="20" alt="Ícone de curso em andamento"/>
                        <span class="text">Em andamento</span>
                    </div>
                </td>
                <td width="10%">
                    <Icon class="icon" name="ri:arrow-right-s-line" width="20" height="20" alt="Ícone de detalhes"/>
                </td>                
            </tr>           
        </tbody>
    </table>
    <div class="not-courses" v-if="!mock">
        <img src="~/assets/img/not-found.png" alt="Ilustração de livros">
        <p>
            Não há registro de cursos ainda.<br> 
            Por favor verifique mais tarde.
        </p>
    </div>
</template>

<script setup>
    const progress = [
        {
            teacher: {
                avatar: '/img/avatar/nuray-sm.png',
                name: 'Nuray Aksoy',
                role: 'Gerente de produtos'
            },
            course: {
                title: 'Time Management',
                duration: 'Ago 21 - Set 04'
            },
            progression: 30
        },
        {
            teacher: {
                avatar: '/img/avatar/arthur-sm.png',
                name: 'Arthur Taylor',
                role: 'CEO'
            },
            course: {
                title: 'Leadership Skills',
                duration: 'Ago 02 - Set 18'
            },
            progression: 70

        },
        {
            teacher: {
                avatar: '/img/avatar/lena-sm.png',
                name: 'Lena Müller',
                role: 'Gerente de marketing'
            },
            course: {
                title: 'Diversity Training',
                duration: 'Jul 24 - Jul 03'
            },
            progression: 100

        },
        {
            teacher: {
                avatar: '/img/avatar/wei-sm.png',
                name: 'Wei Chen',
                role: 'Gerente de operações'
            },
            course: {
                title: 'Efficiency at work',
                duration: 'Jul 04 - Jul 28'
            },
            progression: 100

        }
    ]

    const props = defineProps({
        mock: {
            type: Boolean,
            default: false
        }
    })
</script>