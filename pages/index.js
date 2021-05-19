import {
  BioBlock,
  ContactBlock,
  IntroBlock,
  ProjectsBlock,
  TechBlock,
} from '../components';

const Home = () => {
  return (
    <main id="home">
      <IntroBlock />
      <BioBlock />
      <ProjectsBlock />
      <TechBlock />
      <ContactBlock />
    </main>
  );
};

export default Home;
