<template>
    <div class="divider"></div>
    <FeedbackContent 
        :mock="mock"
    /> 
</template>

<script setup>
    const mock = ref(true);
</script>