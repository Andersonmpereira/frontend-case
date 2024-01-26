<template>
    <div class="profile">
        <button class="btn btn-transparent" @click="toggle"> 
            <Icon class="icon" name="ri:menu-line" width="20" height="20"/>
        </button>
        <img class="avatar" src="/img/avatar/sophia-md.png" alt="avatar da sophia">
        <div class="identity">
            <span class="title">
                Sophia Williams             
            </span>
            <span class="subtitle">
                Bem vinda de volta 👋🏻
            </span>
        </div>  
    </div>
</template>

<script setup>
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