<template>
    <li class="nav-list">
        <NuxtLink 
            class="nav-link"
            :to="to"
            :class="class"
        >
            <div class="list-content">
                <Icon 
                    class="icon" 
                    :class="iconColor"
                    :name="iconName"
                    :width="iconSize" 
                    :height="iconSize"
                />
                <span class="nav-text">{{ text }}</span>
            </div>                    
            <button 
                v-if="btnContent"
                class="shortcut"
            >
                {{ btnContent }}
            </button>                  
        </NuxtLink>
    </li>
</template>

<script setup>
    const props = defineProps({
        to: {
            type: String
        },
        class: {
            type: String
        },
        iconName: {
            type: String
        },
        iconSize: {
            type: Number,
            default: 20
        },
        iconColor: {
            type: String
        },
        text: {
            type: String
        },
        btnContent: {
            type: String
        }
    })
</script>
