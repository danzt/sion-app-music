import { defineStore } from "pinia";

import { supabase } from "../boot/supabase";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
  }),
  actions: {
    async fetchUsers() {
      const { data, error } = await supabase
        .from("users")
        .select(`*, roles(id,name)`);
      if (error) {
        throw error;
      }
      this.users = data;
    },
    async createOrUpdateUser(user) {
      try {
        if (user.id) {
          const { error } = await supabase
            .from("users")
            .update(user)
            .eq("id", user.id);
          if (error) {
            throw error;
          }
        } else {
          const { error } = await supabase.from("users").insert(user);
          if (error) {
            throw error;
          }
        }

        this.fetchUsers();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});
