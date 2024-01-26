<template>
    <div 
        class="work-label"
        :class="colorize"
    >
        <span class="relax">
            <Icon class="icon" name="ri:checkbox-blank-circle-fill" width="16" height="16"/>
            Descanso
        </span>
        <span class="active">
            <Icon class="icon" name="ri:checkbox-blank-circle-fill" width="16" height="16"/>
            Ativo
        </span>
        <span class="extra-hour">
            <Icon class="icon" name="ri:checkbox-blank-circle-fill" width="16" height="16"/>
            Hora extra
        </span>
    </div>
</template>

<script setup>
    const props = defineProps({
        mock: {
            type: Boolean,
            default: false
        }
    })

    const colorize = computed(() => {
        if (props.mock) return 'colorize'
    })
</script>