import { defineStore } from "pinia";

import { supabase } from "../boot/supabase";

export const useMusiciansStore = defineStore("musicians", {
  state: () => ({
    musicians: [],
  }),
  actions: {
    async fetchMusicians() {
      const { data, error } = await supabase
        .from("musicians")
        .select(`*, roles(id,name)`);
      if (error) {
        throw error;
      }
      this.musicians = data;
    },
    async createOrUpdateMusician(musician) {
      try {
        if (musician.id) {
          const { data, error } = await supabase
            .from("musicians")
            .update(musician)
            .eq("id", musician.id);
          if (error) {
            throw error;
          }
        } else {
          const { data, error } = await supabase
            .from("musicians")
            .insert(musician);
          if (error) {
            throw error;
          }
        }

        this.fetchMusicians();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});
