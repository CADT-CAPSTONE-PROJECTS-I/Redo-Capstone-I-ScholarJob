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

  formData: {
    name: '',
    email: '',
    password: '',
    // password_comfirmation: '',
  },
  setFormData: (data) => set((state) => ({
    formData: {...state.formData, ...data},
  })),

  message: null,
  setMessage:(data) => set({message: data}),

  errors: null,
  setErrors:(data) => set({errors: data}),

  messageLogin: null,
  setMessageLogin:(data) => set({messageLogin: data}),

  errorsLogin: null,
  setErrorsLogin:(data) => set({errorsLogin: data}),

  isDropdownOpen: false,
  setIsDropdownOpen:(data) => set({isDropdownOpen: data}),

  isPopupOpen: false,
  setIsPopupOpen: (data) => set({isPopupOpen: data}),
  // openPopup: () => set({ isPopupOpen: true }),
  // closePopup: () => set({ isPopupOpen: false }),


}));

export {appStore};
