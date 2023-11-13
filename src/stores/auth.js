import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null,
        user: null,
    }),

    actions: {
        setToken(token) {
            this.token = token;
        },

        setUser(user) {
            this.user = user;
        },

        logout() {
            // Clear token and user data
            this.token = null;
            this.user = null;

            // Optionally, perform additional logout logic (e.g., API logout request)
        },
    },
});