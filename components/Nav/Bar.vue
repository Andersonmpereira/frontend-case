<template>
    <hr class="divider"/>
    <nav class="navbar">
        <Menu
            :title="'main'"
        >
            <NavItems
                v-for="item in main"
                :to="item.to"
                :icon-name="item.iconName"
                :text="item.text"
            />           
        </Menu>
        <Menu 
            :title="'Fav'"
        >       
            <NavItems
                v-for="(item, index) in fav"
                :to="item.to"
                :icon-name="item.iconName"
                :icon-size="item.iconSize"
                :icon-color="item.iconColor"
                :text="item.text"
                :class="item.class"
                :btn-content="'⌘ ' + (index + 1)"
            />
        </Menu>
        <Menu
            :class="'tools'"
        >
            <NavItems
                v-for="item in config"
                :to="item.to"
                :icon-name="item.iconName"
                :text="item.text"
            />
        </Menu>
    </nav>
    <hr class="divider"/>
</template>

<script setup>
    const main = [
        {
            to: '/',
            iconName: 'ri:layout-grid-line',
            text: 'Dashboard' 
        },
        {
            to: '/calendario',
            iconName: 'ri:calendar-line',
            text: 'Calendário' 
        },
        {
            to: '/descanso',
            iconName: 'ri:timer-line',
            text: 'Descanso' 
        },
        {
            to: '/projetos',
            iconName: 'ri:folders-line',
            text: 'Projetos' 
        },
        {
            to: '/times',
            iconName: 'ri:group-line',
            text: 'Times' 
        },
        {
            to: '/integracoes',
            iconName: 'ri:equalizer-line',
            text: 'Integrações' 
        },
        {
            to: '/beneficios',
            iconName: 'ri:star-smile-line',
            text: 'Beneficios' 
        },
        {
            to: '/documentos',
            iconName: 'ri:file-cloud-line',
            text: 'Documentos' 
        }
    ]

    const fav = [
        {
            to: '',
            class: 'fav-link',
            iconName: 'ri:checkbox-blank-circle-fill',
            iconSize: 15,
            iconColor: 'blue',
            text: 'Loom Mobile App'
        },
        {
            to: '',
            class: 'fav-link',
            iconName: 'ri:checkbox-blank-circle-fill',
            iconSize: 15,
            iconColor: 'red',
            text: 'Monday Redesign'
        },
        {
            to: '',
            class: 'fav-link',
            iconName: 'ri:checkbox-blank-circle-fill',
            iconSize: 15,
            iconColor: 'pink',
            text: 'Udemy Courses'
        }
    ]

    const config = [
        {
            to: '/configuracao',
            iconName: 'ri:settings-2-line',
            text: 'Configuração'
        },
        {
            to: '/suporte',
            iconName: 'ri:headphone-line',
            text: 'Suporte'
        }
    ]
</script>