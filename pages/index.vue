<template lang="pug">
  .page
    VHeader
    VDropdownVue
    VHero
    VFeatures
    VMove
</template>

<script>
import VDropdownVue from '@/components/VDropdown.vue';
import VHeader from '@/components/VHeader.vue';
import VHero from '@/components/VHero.vue';
import VFeatures from '@/components/VFeatures.vue';
import VEntryVue from '@/components/VEntry.vue';
import VMove from '@/components/VMove.vue';
export default {
  name: 'IndexPage',
  components: {
    VHeader,VDropdownVue,VHero,VFeatures,VEntryVue,VMove
  },
}
</script>
