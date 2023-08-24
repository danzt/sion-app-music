<template>
  <q-page class="q-pa-md">
    <MusiciansTable />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { supabase } from "../boot/supabase";
import { useUsersStore } from "../store/users";
import { useAuthStore } from "../store/auth";

import MusiciansTable from "../components/MusiciansTable.vue";

const usersStore = useUsersStore();

onMounted(async () => {
  await getUserData();
});

const getUserData = async () => {
  usersStore.fetchUsers();
};
</script>
