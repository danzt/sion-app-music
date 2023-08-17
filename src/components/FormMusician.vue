<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
      ref="formMusician"
    >
      <q-input
        filled
        v-model="formData.first_name"
        label="First Name *"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Please enter a first name',
        ]"
      />

      <q-input
        filled
        v-model="formData.last_name"
        label="Last Name *"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Please enter a last name',
        ]"
      />

      <q-input
        filled
        type="tel"
        v-model="formData.phone_number"
        label="Phone Number"
        hint="Enter your phone number"
      />

      <q-select
        filled
        v-model="formData.role"
        label="Role"
        :options="roleOptions"
      />
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref, reactive, toRefs } from "vue";
import { storeToRefs } from "pinia";
import useNotify from "../composables/UseNotify";
import { useMusiciansStore } from "../store/musicians"; // Import your Pinia store

const $q = useQuasar();
const musicianStore = useMusiciansStore(); // Use your Pinia store instance
const { musicians } = storeToRefs(musicianStore);

const { notifyError, notifySuccess } = useNotify();

const formData = ref({
  last_name: "",
  first_name: "",
  phone_number: "",
  role: "",
});

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

const onSubmit = async () => {
  // Construct the musician object

  const musician = {
    first_name: formData.value.first_name,
    last_name: formData.value.last_name,
    phone_number: formData.value.phone_number,
    role_id: formData.value.role.value,
    // Add other fields
  };

  const isSuccess = await musicianStore.createOrUpdateMusician(musician);
  if (isSuccess) {
    notifySuccess("Musician created");
    onReset();
  } else {
    notifyError("Musician not created");
  }
};

const onReset = async () => {
  // Reset our form
  formData.value.first_name = "";
  formData.value.last_name = "";
  formData.value.phone_number = "";
  formData.value.role = "";
};
</script>
