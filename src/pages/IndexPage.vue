<template>
  <q-page class="q-pa-md">
    <MusiciansTable />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { supabase } from "../boot/supabase";
import { useMusiciansStore } from "../store/musicians";

import MusiciansTable from "../components/MusiciansTable.vue";

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
