<template>
  <div class="mt-32 flex">
    <NuxtErrorBoundary>
      <CarSideBar />
      <NuxtPage />
      <template #error="{ error }">
        <div class="text-center mx-auto flex flex-col">
          <h1 class="text-5xl text-red-600">Sorry, something went wrong!</h1>
          <code class="text-3xl mt-4">{{ error }}</code>
          <button
            @click="error.value=null"
            class="mt-7 rounded text-2xl bg-blue-400 px-7 py-4 text-white"
          >
            Go Back
          </button>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup>
const { toTitleCase } = useUtilities();
const rout = useRoute();
useHead({
  title: `${
    rout.params.make ? toTitleCase(rout.params.make) : "Cars"
  } in ${toTitleCase(rout.params.city)}`,
});

definePageMeta({
  layout: "custom",
});

</script>
