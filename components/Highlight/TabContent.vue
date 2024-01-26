<template>
    <component :is="getComponentName()"/>
  </template>
    
  <script setup>
  import { HighlightGeneral, HighlightComments, HighlightGift } from '#components'

  
  const props = defineProps({
    name: {
      type: String,
      required: true
    }
  })
  
  const getComponentName = () => {
    switch (props.name) {
      case 'Geral':
        return HighlightGeneral
      case 'Comentários':
        return HighlightComments
      case 'Prêmios':
        return HighlightGift
      default:
        return HighlightGeneral
    }
  }
  </script>