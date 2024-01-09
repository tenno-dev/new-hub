//@ts-nocheck
<template>
  <div>
    <ULandingHero title="Tenno Hub" description=".. is coming back soon." />
    <h1>Debug API Response:</h1>
 
    <h1>{{ data?.timestamp }}</h1>

  </div>
</template>
<script setup lang="ts">
const { data, pending, refresh, error } = await useWfstatusData('pc')
</script>