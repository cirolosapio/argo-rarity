<template>
  <div flex justify-center items-baseline mb-3 rounded-lg>
    <div shadow-lg flex rounded-lg>
      <input v-model.number="nftId" min-w-27 outline-none type="number" :min="1" :max="8888" rounded-l-lg p="x3 y2" placeholder="NFT #ID" @keyup.enter="add()" />
      <div dark:bg-dark-100 rounded-r-lg p="r3 y2">
        <kbd select-none cursor-pointer hover:scale-110 ease-in duration-150 @click="add()">ENTER</kbd>
      </div>
    </div>
  </div>

  <div gap="x4 y6" mt-2 auto-cols-fr grid grid-cols-1 class="sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
    <nft-card v-for="(nft, idx) in nfts" :key="nft.nftId" :nft="nft" @remove="remove(idx)" />
  </div>
</template>

<script setup lang="ts">
import type { Nft } from '~/types'

let nftId = $ref<number | null>()
let nfts = $ref<Nft[]>([])

async function add() {
  if (nftId && nftId > 0 && nftId < 8889 && nfts.findIndex(nft => nft.nftId === nftId) === -1) {
    const [nft] = await searchNfts([nftId])
    nfts.push(nft)
    state.value.push(nftId)
  }

  nftId = null
}

function remove(idx: number) {
  nfts.splice(idx, 1)
  state.value.splice(idx, 1)
}

onMounted(async () => {
  if (state.value.length > 0) nfts = await searchNfts(state.value)
})
</script>
