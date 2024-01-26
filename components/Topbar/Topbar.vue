<template>
    <div class="topbar">
        <TopbarProfile 
            :name="user.name"
            :avatar="user.avatar"
        />
        <TopbarTools />
    </div>
</template>

<script setup>
    const user = {
        name: 'Sophia Williams',
        avatar: 'sophia-md'
    }
</script>