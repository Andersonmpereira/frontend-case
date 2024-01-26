<template>
    <section 
        class="card"
        :class="card"
    >
        <div class="heading">
            <div class="title">
                <Icon 
                    class="icon" 
                    :width="iconSize"
                    :height="iconSize"
                    :name="iconTitle"
                    
                />
                <h3>{{ title }}</h3>
            </div>
            <slot name="search" />
            <button
                v-if="btnIcon || btnText"
                class="btn btn-outline"
            >
                <Icon 
                    v-if="btnIcon"
                    class="icon" 
                    :name="btnIcon"
                    :width="btnIconSize"
                    :height="btnIconSize"
                />
                {{ btnText }}
            </button>
        </div>
        <slot/>
    </section>
</template>

<script setup>
    const props = defineProps({
        card: {
            type: String
        },
        iconTitle: {
            type: String
        },
        iconSize: {
            type: Number,
            default: 24
        },
        title: {
            type: String
        },
        btnIcon: {
            type: String
        },
        btnIconSize: {
            type: Number,
            default: 20
        },
        btnText: {
            type: String
        }
    })
</script>