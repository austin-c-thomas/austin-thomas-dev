import { useEffect, useState } from 'react';
import {
  BioBlock,
  ContactBlock,
  IntroBlock,
  ProjectsBlock,
  TechBlock,
} from '../components';

const Home = ({position, setPosition}) => {

  // Keeps track of what section is being displayed in the browser.
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser) {    
    const bio = document.querySelector('#bio-block');
    const projects = document.querySelector('#projects');
    const tech = document.querySelector('#tech-block');
    const contact = document.querySelector('#contact-block');

    window.addEventListener('scroll', () => {
      if (window.scrollY < (bio.offsetTop - (window.innerHeight - 500))) {
        setPosition('Home');
      };

      if (window.scrollY >= (bio.offsetTop - (window.innerHeight - 500)) && window.scrollY < (projects.offsetTop - (window.innerHeight - 500))) {
        setPosition('Bio');
      };

      if (window.scrollY >= (projects.offsetTop - (window.innerHeight - 500)) && window.scrollY < (tech.offsetTop - (window.innerHeight - 500))) {
        setPosition('Projects');
      };

      if (window.scrollY >= (tech.offsetTop - (window.innerHeight - 500)) && window.scrollY < (contact.offsetTop - (window.innerHeight - 500))) {
        setPosition('Tech');
      };


      if (window.scrollY >= (contact.offsetTop - (window.innerHeight - 500))) {
        setPosition('Contact');
      };
    });
  };

  return (
    <main id="home">
      <IntroBlock />
      <BioBlock position = {position} />
      <ProjectsBlock />
      <TechBlock />
      <ContactBlock />
    </main>
  );
};

export default Home;
