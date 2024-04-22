<template>
  <!-- HOME SEARCH BAR -->
  <div class="flex justify-between gap-2">
    <div
      class="font-serif w-full text-2xl rounded-full bg-white  overflow-hidden drop-shadow-2xl mx-auto"
    >
      <input
        :class="cityError ? 'border-red-500 border' : ''"
        type="text"
        class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
        placeholder="Search by city..."
        v-model="city"
      />
    
    </div>
      <button class="bg-sky-500 rounded-full px-5 text-white font-bold" @click="handleSearch">
        Search
      </button>
  </div>
  <!-- HOME SEARCH BAR -->
</template>

<script setup>
const city = ref("");
const cityError = ref(false);
const handleSearch = () => {
  if (!city.value) {
    return (cityError.value = true);
  }
  navigateTo(`/city/${city.value}/car`);
};
</script>
