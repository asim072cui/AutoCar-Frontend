import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStep: 1,
  applicationtype: '', // 'CV_ONLY' or 'FULL_FORM'
  
  // Step 1: Target Job
  dreamjob: '',
  workingcity: '',
  position: '',
  careerStage: '',
  
  // Step 2: Personal Details
  firstname: '',
  lastname: '',
  image: null,
  dob: '',
  country: '',
  nationality: '',
  gender: '',
  email: '',
  phone: '',
  
  // Step 3: Experience
  experiences: [],
  currentExperience: {
    jobtitle: '',
    companyname: '',
    companyindustry: '',
    joblocation: '',
    jobcity: '',
    startingdate: '',
    endingdate: '',
    stillworking: false,
    description: '',
  },
  
  // Step 4: Education (if needed later)
  education: [],
  
  // CV Upload - Only store URL, not File object (Files are not serializable)
  cvUrl: '',
  
  // Submission
  isSubmitting: false,
  submitError: null,
  submitSuccess: false,
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setApplicationType: (state, action) => {
      state.applicationtype = action.payload;
    },
    
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    
    nextStep: (state) => {
      state.currentStep += 1;
    },
    
    prevStep: (state) => {
      if (state.currentStep > 1) {
        state.currentStep -= 1;
      }
    },
    
    // Step 1: Target Job
    updateTargetJob: (state, action) => {
      const { dreamjob, workingcity, position, careerStage } = action.payload;
      if (dreamjob !== undefined) state.dreamjob = dreamjob;
      if (workingcity !== undefined) state.workingcity = workingcity;
      if (position !== undefined) state.position = position;
      if (careerStage !== undefined) state.careerStage = careerStage;
    },
    
    // Step 2: Personal Details
    updatePersonalDetails: (state, action) => {
      const { firstname, lastname, image, dob, country, nationality, gender, email, phone } = action.payload;
      if (firstname !== undefined) state.firstname = firstname;
      if (lastname !== undefined) state.lastname = lastname;
      if (image !== undefined) state.image = image;
      if (dob !== undefined) state.dob = dob;
      if (country !== undefined) state.country = country;
      if (nationality !== undefined) state.nationality = nationality;
      if (gender !== undefined) state.gender = gender;
      if (email !== undefined) state.email = email;
      if (phone !== undefined) state.phone = phone;
    },
    
    // Step 3: Experience
    updateCurrentExperience: (state, action) => {
      state.currentExperience = {
        ...state.currentExperience,
        ...action.payload,
      };
    },
    
    addExperience: (state) => {
      if (state.currentExperience.jobtitle && state.currentExperience.companyname) {
        state.experiences.push({ ...state.currentExperience });
        // Reset current experience
        state.currentExperience = initialState.currentExperience;
      }
    },
    
    removeExperience: (state, action) => {
      state.experiences = state.experiences.filter((_, index) => index !== action.payload);
    },
    
    editExperience: (state, action) => {
      const { index } = action.payload;
      if (state.experiences[index]) {
        state.currentExperience = { ...state.experiences[index] };
        state.experiences = state.experiences.filter((_, i) => i !== index);
      }
    },
    
    // CV Upload - Only URL is stored, File objects should be kept in component state
    setCVUrl: (state, action) => {
      state.cvUrl = action.payload;
    },
    
    // Submission
    setSubmitting: (state, action) => {
      state.isSubmitting = action.payload;
    },
    
    setSubmitError: (state, action) => {
      state.submitError = action.payload;
      state.isSubmitting = false;
    },
    
    setSubmitSuccess: (state, action) => {
      state.submitSuccess = action.payload;
      state.isSubmitting = false;
    },
    
    // Reset form
    resetForm: (state) => {
      return initialState;
    },
  },
});

export const {
  setApplicationType,
  setCurrentStep,
  nextStep,
  prevStep,
  updateTargetJob,
  updatePersonalDetails,
  updateCurrentExperience,
  addExperience,
  removeExperience,
  editExperience,
  setCVUrl,
  setSubmitting,
  setSubmitError,
  setSubmitSuccess,
  resetForm,
} = employeeSlice.actions;

export default employeeSlice.reducer;
