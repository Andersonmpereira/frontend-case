<template>
    <hr class="divider"/>
    <FeedbackContent 
        :mock="mock"
    /> 
</template>

<script setup>
    const mock = ref(true);
</script>