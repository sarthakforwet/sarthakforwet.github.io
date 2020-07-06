import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1wFNMTYyzONIsnHIz4o5EZFDiJ0ZQZ58E/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: 1,
    img: '',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/sarthakforwet/YoloV3_Object_Detector', // if no repo, the button will not show up
  },
];

// WRITINGS DATA
export const writingsData = [
  {
    id: 1,
    img: '',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// OPEN SOURCE DATA
export const openSourceData = [
  {
    id: 1,
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// OPEN SOURCE DATA
export const certificationsData =
  {
    id: 1,
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  };


// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sarthakkhandelwal032000@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: 1,
      name: '',
      url: '',
    }
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
