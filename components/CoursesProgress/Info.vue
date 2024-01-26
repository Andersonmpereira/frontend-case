<template>
    <div class="information" v-if="!status">
        <h4>Nenhum curso em andamento</h4>
        <p>Não há progresso em nenhum curso ainda. Considere se inscrever em um.</p>
        <NuxtLink to="">Inscrever-se</NuxtLink>    
    </div>
    <div class="information" v-else>
        <h4>Diversidade da equipe</h4>
        <p>Projetado para promover a inclusividade e perspectivas diversas.</p>
        <NuxtLink to="">Retomar curso</NuxtLink>    
    </div>
</template>

<script setup>
    const props = defineProps({
        status: {
            type: Boolean,
            required: true
        }
    })
</script>