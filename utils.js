// Retrieve the active link from the current URL
export const changeActiveLink = (url, setActiveLinkIs) => {
  if (url === 'http://localhost:3000/' 
  // || url === 'https://thomasandcompanycpa.com/' //ADD DOMAIN HERE
  ) {
    setActiveLinkIs("Home")
  };

  if (url.includes('/about')) {
    setActiveLinkIs("About")
  };
};

// Tech stack lists
export const generateStackList = (label) => {
  if (label === "Languages") {
    return ['JavaScript', 'CSS3', 'HTML5', 'SQL', 'Git']
  }; 
  
  if (label === "Libraries/Frameworks") {
      return ['ReactJS/NextJS', 'Material UI', 'JQuery', 'Node/ExpressJS', 'PostgreSQL']
  }; 

  if (label === "Build/Test Tools") {
    return ['Github', 'Vercel', 'Netlify', 'Heroku', 'Jest']
  };
  
  if (label === "Design Tools") {
    return ['Adobe Illustrator', 'Adobe Photoshop']
  };
};


