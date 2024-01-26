<template>
    <li>
        <button class="btn btn-transparent">
            <Icon class="icon" :name="icon" width="20" height="20"/>                        
        </button>
    </li>
</template>

<script setup>
    const props = defineProps({
        icon: {
            type: String,
            required: true
        },
    })
</script>
