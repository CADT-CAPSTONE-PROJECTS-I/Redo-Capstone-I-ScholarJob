import { create } from "zustand";

const appStore = create((set, get) => ({
  changePassword: false,
  setChangePassword: (data) => set({ changePassword: data }),

  currentComponent: 'personal',
  setCurrentComponent: (data) => set({ currentComponent: data }),

  selectedImage: null,
  setSelectedImage: (data) => set({selectedImage: data }),

  currentPage: 1,
  setCurrentPage: (data) => set({currentPage: data }),

  cvData: {
    name: '',
    gender: '',
    position: '',
    aboutMe: '',
    age: '',
    email: '',
    dateOfBirth: '',
    placeOfBirth: '',
    currentAddress:'',
    phone: '',
    educations: [""],
    skills: [""],
    experiences:[""],
    hardSkills: [""],
    softSkills: [""],
    languages: [""],
    references: ' ',
    profilePicture: '',
  },
  setCvData: (data) => set((state) => ({
    cvData: { ...state.cvData, ...data },
  })),


}));

export {appStore};
