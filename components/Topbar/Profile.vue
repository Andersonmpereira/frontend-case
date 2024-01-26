<template>
    <div class="profile">
        <button class="btn btn-transparent" @click="toggle"> 
            <Icon class="icon" name="ri:menu-line" width="20" height="20"/>
        </button>
        <img class="avatar" :src="'/img/avatar/'+avatar+'.png'" alt="avatar da sophia"/>
        <div class="identity">
            <span class="title">
                {{ name }}             
            </span>
            <span class="subtitle">
                Bem vinda de volta 👋🏻
            </span>
        </div>  
    </div>
</template>

<script setup>
    const props = defineProps({
        name: {
            type: String
        },
        avatar: {
            type: String
        }
    })
    const toggle = () => {
        const sidebar = document.querySelector('.sidebar')
        const main = document.querySelector('.main')
        const topbar = document.querySelector('.topbar')

        if (sidebar) {
            sidebar.classList.toggle('toggle')
            main.classList.toggle('toggle')
            topbar.classList.toggle('toggle')
        }
    }
</script>