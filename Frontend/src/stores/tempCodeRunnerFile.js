  cvData: {
    skills: [""],
  },
  setCvData: (newData) => set((state) => ({
    cvData: { ...state.cvData, ...newData }
  })),