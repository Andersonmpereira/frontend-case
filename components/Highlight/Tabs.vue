<template>
    <div class="tabs">
        <button
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{ 'btn': true, 'btn-transparent': true, 'active': activeTab === index, 'disabled': !mock }"
            @click="activeTab = index"
        >
        {{ tab.name }}
      </button>
    </div>
    <HighlightContent v-if="!mock"/>
    <div class="tab-content" v-else>
      <div v-show="activeTab === index" v-for="(tab, index) in tabs" :key="index">
        <HighlightTabContent :name="tab.name"/>
      </div>
    </div>
</template>

<script setup>
    const tabs = ref([
        { name: 'Geral' },
        { name: 'Comentários' },
        { name: 'Prêmios' }
    ])

    const activeTab = ref(0)

    const props = defineProps({
        mock: {
            type: Boolean,
            required: true
        }
    })    
</script>