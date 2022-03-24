<script setup>
import SearchBar from "./components/SearchBar.vue";
import ThemeButton from "./components/ThemeButton.vue";
import DigitalClock from "./components/DigitalClock.vue";
import Greeter from "./components/Greeter.vue";
import CurrentDate from "./components/CurrentDate.vue";
import CurrentWeather from "./components/CurrentWeather.vue";
import ButtonsOne from "./components/ButtonsOne.vue";
import ButtonsTwo from "./components/ButtonsTwo.vue";
import ListOne from "./components/ListOne.vue";
import ListTwo from "./components/ListTwo.vue";

//import ButtonsTwo from "./components/ButtonsTwo.vue";
//import ListsOne from "./components/ListsOne.vue";
//import ListsTwo from "./components/ListsTwo.vue";

import { config } from "../config";
import "./assets/css/main.css";
</script>

<template>
  <div
    id="app"
    class="width w-screen h-screen flex items-center justify-center bg-background dark:bg-darkbackground transition-all ease-in-out duration-150"
  >
    <ThemeButton />
    <SearchBar />
    <div class="container w-[145vh] h-[85vh] grid grid-cols-4 grid-rows-4 gap-6 p-5">
      <div class="timeBlock row-start-1 row-span-2 col-start-1 col-span-2 flex flex-col items-center justify-center">
        <DigitalClock />
        <Greeter />
      </div>
      <div class="weatherBlock col-start-3 col-span-2 row-start-1 row-span-2 flex flex-col items-center justify-center">
        <div class="date flex items-center justify-center">
          <CurrentDate />
        </div>
        <Suspense>
          <CurrentWeather />
        </Suspense>
      </div>

      <div
        class="linksBlock row-start-3 row-span-2 col-start-1 col-span-4 grid grid-cols-4 grid-rows-2 gap-6"
        id="linksBlock"
      >
        <div class="linksBlockLeft row-start-1 row-span-2 col-start-1 col-span-2" id="linksBlockLeft">
          <div
            class="buttonsContainer w-full h-full grid grid-cols-3 grid-rows-2 gap-7 p-5"
            id="buttons1"
            v-if="config.bentoLayout == 'bento' || config.bentoLayout == 'buttons'"
          >
            <ButtonsOne />
          </div>
          <div
            class="listsContainer w-full h-full grid grid-cols-2 grid-rows-1 gap-12 p-2"
            id="lists1"
            v-if="config.bentoLayout == 'lists'"
          >
            <ListOne />
          </div>
        </div>

        <div class="linksBlockRight row-start-1 row-span-2 col-start-3 col-span-2" id="linksBlockRight">
          <div
            class="listsContainer w-full h-full grid grid-cols-2 grid-rows-1 gap-12 p-2"
            id="lists1"
            v-if="config.bentoLayout == 'bento'"
          >
            <ListOne />
          </div>
          <div
            class="listsContainer w-full h-full grid grid-cols-2 grid-rows-1 gap-12 p-2"
            id="lists2"
            v-if="config.bentoLayout == 'lists'"
          >
            <ListTwo />
          </div>
          <div class="buttonsContainer" id="buttons2" v-if="config.bentoLayout == 'buttons'">
            <ButtonsTwo />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>