<template>
    <div class="not-feedback" v-if="!mock">
        <img src="../../assets/img/not-feedback.png" alt="ilustração de bloco de notas">
        <p>
            Sem registros de feedback ainda. Por favor, verifique mais tarde.
        </p>
    </div>
    <div class="feedback" v-else>
       <FeedbackInfo />
       <FeedbackInteraction />
       <button class="btn btn-outline" @click="handleSubmit">
            Enviar
       </button>
    </div>
</template>

<script setup>
    const mock = ref(true);

    const handleSubmit = () => {
        mock.value = false
    }
</script>