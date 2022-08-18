<template>
  <div w-50 shadow-2xl rounded-lg dark:bg-dark-200 relative>
    <img :src="nft.image" rounded-t-lg />

    <div p="x2 y3" flex justify-around>
      <div flex items-center>
        <div i-carbon-trophy mr1 />
        {{ nft.rank }}
      </div>
      <div flex items-center>
        {{ nft.rarityScore }}
        <div i-ph-target ml1 />
      </div>
    </div>

    <div px1 flex items-center absolute rounded-lg class="text-orange-700/100  bg-white/15 top-1.5 left-1.5">
      <div i-carbon-hashtag />
      {{ nft.nftId }}
    </div>

    <button hover="dark:bg-dark-500/70 bg-white/90" class="dark:bg-dark-500/30 bg-white/70 top-1.5 right-1.5" rounded-full absolute @click="$emit('remove')">
      <div i-carbon-close text-xl />
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Document } from '~/types'

defineEmits<{ (e: 'remove'): void }>()
defineProps<{ nft: Document }>()
</script>
