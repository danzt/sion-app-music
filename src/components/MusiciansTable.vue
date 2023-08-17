<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      ref="tableRef"
      title="Musicos"
      :rows="musicians"
      :columns="columns"
      row-key="id"
      v-model:pagination="pagination"
      :loading="loading"
      :filter="filter"
      binary-state-sort
      @request="onRequest"
    >
      <template v-slot:top>
        <q-btn
          round
          class="q-ml-sm"
          color="green"
          :disable="loading"
          icon="add"
          @click="redirectToRegister"
        />
        <q-space />
        <q-input
          borderless
          dense
          debounce="300"
          color="primary"
          v-model="filter"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useMusiciansStore } from "../store/musicians"; // Import your Pinia store here

const columns = [
  {
    name: "first_name",
    required: true,
    label: "First Name",
    align: "left",
    field: "first_name",
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "last_name",
    label: "Last Name",
    field: "last_name",
    sortable: true,
  },
  {
    name: "phone_number",
    label: "Phone Number",
    field: "phone_number",
    sortable: true,
  },
  {
    name: "role_id",
    label: "Role",
    field: "role_id",
    sortable: true,
    format: (value) => {
      const role = roleOptions.find((option) => option.value === value);
      return role ? role.label : "";
    },
  },
];

const roleOptions = [
  {
    label: "Musician",
    value: 1,
  },
  {
    label: "Director",
    value: 2,
  },
];

const tableRef = ref();
const filter = ref("");
const loading = ref(false);
const pagination = ref({
  sortBy: "id",
  descending: false,
  page: 1,
  rowsPerPage: 10, // Adjust as needed
  rowsNumber: 0, // Will be updated in onRequest
});

const musiciansStore = useMusiciansStore(); // Replace with your Pinia store

// Define a ref for the musicians data
const musicians = ref([]);
const router = useRouter();

const onRequest = async (props) => {
  const { page, rowsPerPage, sortBy, descending } = props.pagination;
  const filter = props.filter;

  loading.value = true;

  // Fetch data from your Pinia store
  await musiciansStore.fetchMusicians({
    page,
    rowsPerPage,
    sortBy,
    descending,
    filter,
  });

  // Update musicians data
  musicians.value = musiciansStore.musicians;
  // Update pagination and loading status
  pagination.value.page = page;
  pagination.value.rowsPerPage = rowsPerPage;
  pagination.value.sortBy = sortBy;
  pagination.value.descending = descending;
  pagination.value.rowsNumber = musiciansStore.totalMusicians;

  loading.value = false;
};

const redirectToRegister = () => {
  router.push("add-musician");
};

onMounted(() => {
  // Get initial data from your Pinia store (1st page)
  tableRef.value.requestServerInteraction();
});
</script>
