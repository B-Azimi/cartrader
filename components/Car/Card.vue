<template>
  <div
    class="shadow border w-full overflow-hidden mb-5 cursor-pointer min-w-[580px] h-[200px] relative"
  >
    <img
      @click="emit('favor' , car.id)"
      :src="favored ? heartFilled : heartOutline"
      alt="fav icon"
      class="absolute w-7 right-2 top-2 z-20"
    />
    <div class="flex h-full" @click="navigateTo(`/car/${car.name}-${car.id}`)">
      <img :src="car.url" alt="" class="w-[300px] h-full" />
      <div class="p-4 flex flex-col">
        <div>
          <h1 class="text-2xl text-blue-700">{{ car.name }}</h1>
          <p class="text-gray-700 line-clamp-4">
            {{ car.description }}
          </p>
        </div>
        <h1 class="mt-auto text-xl">${{ car.price }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import heartFilled from "@/assets/heartFilled.png";
import heartOutline from "@/assets/heartOutline.png";
const props = defineProps({
  car: Object,
  favored: Boolean
});
const emit = defineEmits([
  'favor'
])
</script>
