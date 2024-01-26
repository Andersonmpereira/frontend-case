<template>
    <div class="work-progress" :class="colorize">
        <span class="relax" :style="{ width: relax }"></span>
        <span class="active" :style="{ width: active }"></span>
        <span class="extra-hour" :style="{ width: extra }"></span>
    </div>
</template>

<script setup>
    const props = defineProps({
        active: {
            type: String,
            default: '30%'
        },
        relax: {
            type: String,
            default: '30%'
        },
        extra: {
            type: String,
            default: '30%'
        }
    })

    const colorize = computed(() => {
        if (props.active || props.extra || props.relax ) return 'colorize'
    })
</script>