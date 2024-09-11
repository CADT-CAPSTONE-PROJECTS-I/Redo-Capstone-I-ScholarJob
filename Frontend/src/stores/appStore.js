import { create } from "zustand";

const appStore = create((set, get) => ({
  // scholarship: [],
  // setScholarship: (data) => set({ scholarship: data }),

  changePassword: false,
  setChangePassword: (data) => set({ changePassword: data }),

  currentComponent: "personal",
  setCurrentComponent: (data) => set({ currentComponent: data }),

  selectedImage: null,
  setSelectedImage: (data) => set({ selectedImage: data }),

  currentPage: 1,
  setCurrentPage: (data) => set({ currentPage: data }),

  activeTab: "about",
  setActiveTab: (data) => set({ activeTab: data }),

  addresses: [],
  setAddresses: (data) => set({ addresses: data }),

  cvData: {
    name: "",
    gender: "",
    position: "",
    about: "",
    age: "",
    email: "",
    dateOfBirth: "",
    placeOfBirth: "",
    address: "",
    phone_number: "",
    educations: [""],
    experiences: [""],
    hardSkills: [""],
    softSkills: [""],
    languages: [""],
    references: "",
    hard_skill: "",
    education: "",
    experience: "",
    soft_skill: "",
    language: "",
    imgae: "",
    reference: "",
    profilePicture: "",
  },
  setCvData: (data) =>
    set((state) => ({
      cvData: { ...state.cvData, ...data },
    })),

  formData: {
    name: "",
    email: "",
    password: "",
    // password_comfirmation: '',
  },
  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),

  message: null,
  setMessage: (data) => set({ message: data }),

  errors: null,
  setErrors: (data) => set({ errors: data }),

  messageLogin: null,
  setMessageLogin: (data) => set({ messageLogin: data }),

  errorsLogin: null,
  setErrorsLogin: (data) => set({ errorsLogin: data }),

  isDropdownOpen: false,
  setIsDropdownOpen: (data) => set({ isDropdownOpen: data }),

  isPopupOpen: false,
  setIsPopupOpen: (data) => set({ isPopupOpen: data }),

  jobs: [],
  setJobs: (data) => set({ jobs: data }),

  filters: {
    itle: "",
    job_type: "",
    salary_min: "",
    salary_max: "",
    experience: "",
    category_id: "",
    organization_address: "",
  },
  setFilters: (data) =>
    set((state) => ({
      cvData: { ...state.filters, ...data },
    })),

  addresses: [],
  setAddresses: (data) => set({ addresses: data }),

  job: null,
  setJob: (data) => set({ job: data }),

  clientId: null,
  setClientId: (data) => set({ clientId: data }),

  token: null,
  setToken: (data) => set({ token: data }),

  isModalOpen: false,
  setIsModalOpen: (data) => set({ isModalOpen: data }),

  successModalOpen: false,
  setSuccessModalOpen: (data) => set({ successModalOpen: data }),

}));

export { appStore };
