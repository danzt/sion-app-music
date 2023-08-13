<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />

    {{ musicians }}
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { supabase } from "../boot/supabase";
import { useMusiciansStore } from "../store/musicians";

const user = ref(null);
const musiciansStore = useMusiciansStore();
const { musicians } = storeToRefs(musiciansStore);

onMounted(async () => {
  await getUserData();
});

const getUserData = async () => {
  musiciansStore.fetchMusicians();
};
</script>
