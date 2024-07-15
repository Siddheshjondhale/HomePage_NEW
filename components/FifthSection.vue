<template>
  <div class="mt-20 px-8 mainParent" style="font-family: 'Montserrat', sans-serif">
    <div class="pt-32 pb-10 max-w-4xl mx-auto parent">
      <div class="div1">
        <h1>INFO</h1>
        <div class="mt-10 text-lg">
          <h1>PRICING  /</h1>
          <h1>ABOUT  /</h1>
          <h1>CONTACTS</h1>
        </div>
      </div>

      <div class="div2 mt-10">
        <h1>LANGUAGES</h1>
        <div class="mt-10 text-lg">
          <h1>ENG  /</h1>
          <h1>ESP  /</h1>
          <h1>SVE</h1>
        </div>
      </div>

      <div class="div3 ">
        <h1>TECHNOLOGIES</h1>
        <img class="mt-10" src="assets/images/logo.png" />
        <h1 class="text-9xl font-bold">XIV</h1>
        <h1 class="text-9xl font-bold">QR</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
 <style scoped>
.mainParent {
  background-color:  #F5F5F5;
;
  height: auto;
}

.parent {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Adjusted to fit content */
  grid-template-rows: auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.div1 {
  grid-area: 1 / 1 / 2 / 2;
}

.div2 {
  grid-area: 2 / 1 / 3 / 2;
}

.div3 {
  grid-area: 1 / 2 / 3 / 3;
}
</style>
