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