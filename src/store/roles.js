import { defineStore } from "pinia";
import { supabase } from "../boot/supabase";

export const useRolesStore = defineStore("roles", {
  state: () => ({
    roles: null,
  }),
  actions: {
    async loadRoles() {
      const { data, error } = await supabase.from("roles").select(`id, name`);
      this.roles = data;
      if (error) throw error;
    },
  },
});
