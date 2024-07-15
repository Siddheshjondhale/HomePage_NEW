<template>
  <div class="h-100vh mt-20 mx-8" style="font-family: 'Montserrat', sans-serif">
    <div class="text-5xl font-bold" style="font-family: 'Crimson Text', serif">
      <h1>XIV</h1>
      <div>COLLECTIONS</div>
      <div>23-24</div>
    </div>

    <div class="flex justify-between">
      <div
        class="flex space-x-10 text-lg text-gray-600 mt-10"
        style="font-family: 'Montserrat', sans-serif"
      >
        <h1 class="text-black">(ALL)</h1>
        <h1>Men</h1>
        <h1>Women</h1>
        <h1>KID</h1>
      </div>

      <div
        class="flex text-lg space-x-8"
        style="font-family: 'Montserrat', sans-serif"
      >
        <h1>Filters(+)</h1>
        <div class="flex flex-col">
          <h1>Sorts(-)</h1>
          <h2 class="text-base text-gray-800">Less to More</h2>
          <h2 class="text-base text-gray-800">More to Less</h2>
        </div>
      </div>
    </div>
    <hr class="my-3 border-gray-600" />

    <!-- 3 images  -->

    <div>
      <div
        class="grid mt-16 grid-cols-3 gap-4"
        style="font-family: 'Montserrat', sans-serif"
      >
        <div v-for="(item, index) in items" :key="index" class="w-full">
          <img :src="item" class="image-style" draggable="false" />
          <div class="text-base text-left widthhandling">
            {{ names[index] }}
          </div>
          <div class="flex widthhandling justify-between">
            <div class="font-bold text-lg text-left">
              {{ description[index] }}
            </div>
            <div class="font-bold text-lg">{{ price[index] }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center flex-col items-center mt-7">
      <h1 class="text-lg text-gray-500" style="cursor: pointer">More</h1>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        style="font-size: larger; cursor: pointer"
      />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import img1 from "@/assets/images/1.png";
import img2 from "@/assets/images/2.png";
import img3 from "@/assets/images/1.png";

library.add(faChevronLeft, faChevronRight);

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      items: [img1, img2, img3], // Keep only the first 3 images
      names: ["V-Neck T-Shirt", "Cotton T Shirt", "Henley T-Shirt"],
      description: [
        "Embroidered Seersucker Shirt",
        "Embroidered Seersucker Shirt",
        "Embroidered Seersucker Shirt",
      ],
      price: ["$99", "$99", "$99"],
    };
  },
};
</script>

<style scoped>
.image-style {
  width: 400px; /* Adjust the width as per your requirement */
  height: auto; /* Maintain aspect ratio */
}

.widthhandling {
  width: 400px; /* Adjust the width as per your requirement */
}

button {
  border: 1px solid transparent;
  border-color: #ccc;
  transition: border-color 0.3s ease;
}
</style>
