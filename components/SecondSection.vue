<template>
  ``
  <div class="h-100vh mt-20 mx-8" style="font-family: 'Montserrat', sans-serif">
    <div class="text-5xl font-bold" style="font-family: 'Crimson Text', serif">
      <h1>NEW</h1>
      <h1>THIS WEEK <sup class="text-lg text-blue-900">(50)</sup></h1>
      <div
        class="flex justify-end"
        style="font-family: 'Montserrat', sans-serif"
      >
        <button class="text-base border-1 border-black p-1 text-gray-500">
          See All
        </button>
      </div>

      <SliderFirst class="mt-10" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
sup {
  vertical-align: super;
}
</style>
