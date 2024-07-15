<template>
  <div class="h-100vh mx-8" style="font-family: 'Montserrat', sans-serif">
    <div>
      <div class="mt-10 text-lg">
        <h3>MEN</h3>
        <h3>WOMEN</h3>
        <h3>KIDS</h3>
      </div>

      <!-- search bar -->
      <div class="relative mt-5 w-80 bg-gray-200 rounded-md py-1">
        <button
          type="submit"
          class="absolute inset-y-0 left-0 flex items-center px-4 bg-gray-200 text-gray-600 rounded-l-md hover:bg-gray-400 focus:outline-none"
        >
          <font-awesome-icon :icon="['fas', 'search']" class="text-black" />
        </button>
        <input
          type="text"
          placeholder="Search"
          class="w-full py-2 pl-10 pr-4 border border-gray-300 bg-gray-200 rounded-r-md text-right focus:outline-none focus:border-blue-500"
        />
      </div>

      <!-- Newcollections -->
      <div class="mt-10 flex StyleCustom space-x-40">
        <div>
          <div
            class="text-5xl font-bold"
            style="font-family: 'Crimson Text', serif"
          >
            <h1>NEW</h1>
            <h1>COLLECTIONS</h1>
          </div>
          <div class="mt-2">
            <h2>Summer</h2>
            <h2>2024</h2>
          </div>

          <!-- Container for buttons -->
          <div class="flex items-center mt-40 space-x-10">
            <div class="flex items-center w-full px-4 py-2 bg-gray-200">
              <div class="text-xl">Go To Shop</div>
              <div class="ml-auto">
                <font-awesome-icon
                  :icon="['fast', 'arrow-right-long']"
                  size="lg"
                />
              </div>
            </div>

            <!-- Buttons Beside Go To Shop -->
            <div class="flex justify-center space-x-4">
              <button class="border border-gray-300 py-2 px-3 rounded text-xl">
                <font-awesome-icon
                  :icon="['fas', 'chevron-left']"
                  style="color: #a1a1a1"
                />
              </button>
              <button
                class="border border-gray-300 bg-gray-200 py-2 px-3 rounded text-xl"
              >
                <font-awesome-icon :icon="['fas', 'chevron-right']" />
              </button>
            </div>
          </div>
        </div>

        <!-- right section -->

        <div class="flex space-x-20">
          <img class="image-style" src="assets/images/1.png" />
          <img class="image-style" src="assets/images/2.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.StyleCustom {
  align-items: flex-end;
}
.image-style {
  width: 400px; /* Adjust the width as per your requirement */
  height: auto; /* Maintain aspect ratio */
  /* Additional styles if needed */
}
/* Add any additional styles if needed */
</style>
