import { defineStore } from "pinia";

import { supabase } from "../boot/supabase";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    authUser: null,
  }),
  actions: {
    async loadUser() {
      const { data, error: userError } = await supabase.auth.getUser();
      this.authUser = data.user;

      const { data: dataUser } = await supabase
        .from("users")
        .select(`*, roles(id,name)`)
        .eq("auth_id", data.user.id)
        .single();
      if (userError) throw userError;
      this.user = dataUser;
    },

    setUserRole(userRole) {
      this.userRole = userRole;
    },
    getUserRole() {
      return this.userRole;
    },
  },
  getters: {
    isLoggedIn() {
      return !!this.user;
    },
    getUser() {
      return this.user;
    },
    isAdmin() {
      return this.user && this.user.role_id === 1;
    },
  },
});
