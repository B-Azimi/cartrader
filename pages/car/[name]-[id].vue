<template>
  <!-- CAR DETAIL PAGE -->
  <div v-if="car">
    <CarDetailHero :car="car" />
    <CarDetailAttributes :features="car.features" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContact />
  </div>

  <!-- CAR DETAIL PAGE   -->
</template>
<script setup>
const { cars } = useCars();
const { toTitleCase } = useUtilities();
const rout = useRoute();
useHead({
  title: `${toTitleCase(rout.params.name)}`,
});

definePageMeta({
  layout: "custom",
});
const car = computed(() => {
  return cars.find((c) => {
    return c.id === parseInt(rout.params.id )
  })
})

if (!car.value) {
  throw createError({
    statusCode: 404,
      message:`Car with ID of ${rout.params.id} does not exist!`
    })
  }
</script>
