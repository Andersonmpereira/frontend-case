<template>
    <div class="timer-card">
        <div class="heading">
            <div class="title">
                <Icon 
                    class="icon" 
                    :width="iconSize"
                    :height="iconSize"
                    :name="iconName"
                    
                />
                <h4>{{ title }}</h4>
            </div>
            <button class="btn-dropdown"> 
                <Icon class="icon" name="ri:arrow-down-s-line" width="20" height="20"/> 
            </button>
        </div>
        <slot/>
    </div>
</template>

<script setup>
    const props = defineProps({
        iconName: {
            type: String
        },
        iconSize: {
            type: Number,
            default: 20
        },
        title: {
            type: String
        },
    })
</script>