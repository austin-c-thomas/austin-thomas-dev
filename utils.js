// Tech stack lists
export const generateStackList = (label) => {
  if (label === "Languages") {
    return ['JavaScript', 'CSS3', 'HTML5', 'SQL'] //TypeScript
  }; 
  
  if (label === "Libraries/Frameworks") {
      return ['ReactJS/NextJS', 'Node/ExpressJS', 'PostgreSQL'] //React Native
  }; 

  if (label === "Build/Test Tools") {
    return ['Github', 'Vercel', 'Netlify', 'Heroku', 'Jest']
  };
  
  if (label === "Design Tools") {
    return ['Adobe Illustrator', 'Adobe Photoshop']
  };
};


