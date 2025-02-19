export const generalData = {
  name: "Jane Doe",
  title: "Software Engineer",
  email: "meow@cat.com",
  phone: "111-222-3333",
  home: "Silent Hill, Japan",
  linkedin: "https://www.linkedin.com/",
  active: true,
};

export const educationData = [
  {
    school: "University of Notre Dame",
    location: "South Bend, Indiana",
    degree: "BS in Computer Science",
    startDate: "08/2016",
    endDate: "05/2020",
    active: true,
  },
];

export const experienceData = [
  {
    company: "Microsoft",
    companyLocation: "Bellevue, Washington",
    position: "Software Engineer",
    bullets: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.`,
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    ],
    workStartDate: "08/2016",
    workEndDate: "05/2020",
    active: true,
  },
];

export const templates = {
  general: {
    name: "",
    title: "",
    email: "",
    phone: "",
    home: "",
    linkedin: "",
    active: true,
  },
  education: {
    school: "",
    location: "",
    degree: "",
    startDate: "",
    endDate: "",
    active: true,
  },
  experience: {
    company: "",
    companyLocation: "",
    position: "",
    bullets: [],
    workStartDate: "",
    workEndDate: "",
    active: true,
  },
};
