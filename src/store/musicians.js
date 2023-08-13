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
      this.musicians = data;
    },
  },
});
