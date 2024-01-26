<template>
    <ul class="comment-list">
        <li class="comment-item" 
            v-for="items in comments"
        >
            <img 
                class="avatar"
                :src="items.avatar" 
                :alt="items.name"
            >
            <div class="comment">
                <span class="name">{{ items.name }}</span>
                <span class="text">{{ items.text }}</span>
            </div>
            <button class="btn btn-transparent">
                <Icon
                    v-if="!items.like" 
                    class="icon" 
                    name="ri:heart-3-line" 
                    width="20" 
                    height="20" 
                />
                <Icon
                    v-else 
                    class="icon red" 
                    name="ri:heart-3-fill" 
                    width="20" 
                    height="20" 
                />
            </button> 
        </li>
    </ul>
    <button class="btn btn-outline">
        <Icon class="icon" name="ri:pencil-line" width="20" height="20"/>
        Comment
    </button>
</template>

<script setup>
    const comments = [
        {
            name: 'James Brown',
            avatar: '/img/avatar/james-sm.png',
            text: 'Parabéns, Matthew! 🔥',
            like: true
        },
        {
            name: 'Lena Müller',
            avatar: '/img/avatar/lena-sm.png',
            text: 'Ótimo trabalho! 🤗',
            like: true
        },
        {
            name: 'Juma Omondi',
            avatar: '/img/avatar/juma-sm.png',
            text: 'O céu é o limite! ⚡️',
            like: false
        }
    ]
</script>