<template>
    <div class="divider"></div>
    <FeedbackContent 
        :status="status"
    /> 
</template>

<script setup>
    const status = ref(true);
</script>