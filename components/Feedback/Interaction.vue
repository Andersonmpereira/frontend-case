<template>
    <div class="interaction">
        <div class="mood">
            <ul class="mood-list">
                <FeedbackMoodList 
                    v-for="(item, index) in mood"
                    :icon="item"
                    :key="index"
                />
            </ul>
            <FeedbackInput
                :placeholder="'Adicionar comentário...'"
            />
        </div>
    </div>
</template>

<script setup>
    const mood = [
        'twemoji:disappointed-face',
        'twemoji:face-with-diagonal-mouth',
        'twemoji:neutral-face',
        'twemoji:slightly-smiling-face',
        'twemoji:grinning-face-with-smiling-eyes'
    ]
</script>