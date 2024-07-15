<template>
  <div>
    <swiper
      ref="mySwiper"
      :slides-per-view="3"
      :space-between="10"
      pagination
      :autoplay="{ delay: 3000 }"
      loop
      keyboard
      class="my-swiper"
    >
      <swiper-slide v-for="(item, index) in items" :key="index">
        <div class="w-full">
          <img :src="item" class="image-style" draggable="false" />
          <div class="text-base text-left widthhandling">
            {{ names[index] }}
          </div>
          <div class="flex widthhandling justify-between">
            <div class="text-lg text-left">{{ description[index] }}</div>
            <div class="text-lg">{{ price[index] }}</div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="flex justify-center space-x-4 mt-4">
      <button
        @click="slidePrev"
        class="border border-gray-300 py-2 px-3 rounded text-xl"
      >
        <font-awesome-icon
          :icon="['fas', 'chevron-left']"
          style="color: #a1a1a1"
        />
      </button>
      <button
        @click="slideNext"
        class="border border-gray-300 bg-gray-200 py-2 px-3 rounded text-xl"
      >
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </button>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import img1 from "@/assets/images/s1.png";
import img2 from "@/assets/images/s2.png";
import img3 from "@/assets/images/s3.png";
import img4 from "@/assets/images/s1.png";
import img5 from "@/assets/images/s2.png";
import img6 from "@/assets/images/s3.png";

library.add(faChevronLeft, faChevronRight);

export default {
  components: {
    Swiper,
    SwiperSlide,
    FontAwesomeIcon,
  },
  data() {
    return {
      items: [img1, img2, img3, img4, img5, img6],
      names: [
        "V-Neck T-Shirt",
        "Cotton T Shirt",
        "Henley T-Shirt",
        "Crewneck T-Shirt",
        "Crewneck T-Shirt",
        "Crewneck T-Shirt",
      ],
      description: [
        "Embroidered Seersucker Shirt",
        "Embroidered Seersucker Shirt",
        "Embroidered Seersucker Shirt",
        "Embroidered Seersucker Shirt",
        "Embroidered Seersucker Shirt",
        "Embroidered Seersucker Shirt",
      ],
      price: ["$199", "$299", "$399", "$233", "$999", "$199"],
      mySwiper: null,
    };
  },
  methods: {
    slideNext() {
      if (this.mySwiper && this.mySwiper.swiper) {
        this.mySwiper.swiper.slideNext();
      } else {
        console.error("Swiper instance or swiper object not initialized");
      }
    },
    slidePrev() {
      if (this.mySwiper && this.mySwiper.swiper) {
        this.mySwiper.swiper.slidePrev();
      } else {
        console.error("Swiper instance or swiper object not initialized");
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.mySwiper = this.$refs.mySwiper;
      if (this.mySwiper && this.mySwiper.swiper) {
        console.log("Swiper instance initialized:", this.mySwiper.swiper);
      } else {
        console.error(
          "Swiper instance or swiper object not found in refs",
          this.$refs.mySwiper
        );
      }
    });
  },
};
</script>

<style scoped>
.swiper-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.swiper-pagination-bullet {
  background: #4f46e5;
}

.image-style {
  width: 400px;
  height: auto;
}

.widthhandling {
  width: 400px;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 1rem;
  width: 2rem;
  height: 2rem;
  opacity: 0.75;
  border-radius: 50%;
  color: var(--white-100);
  background: var(--black-300);
}

button {
  border: 1px solid transparent;
  border-color: #ccc;
  transition: border-color 0.3s ease;
}
</style>
