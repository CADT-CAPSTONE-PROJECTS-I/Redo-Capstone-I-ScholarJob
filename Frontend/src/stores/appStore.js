import { create } from "zustand";

const appStore = create((set, get) => ({
  changePassword: false,
  setChangePassword: (data) => set({ changePassword: data }),

}));

export {appStore};
