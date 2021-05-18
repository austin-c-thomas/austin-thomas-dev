import {
  BioBlock,
  IntroBlock,
  ProjectsBlock,
  TechBlock,
} from '../components';

const Home = () => {
  return (
    <main id="home">
      <IntroBlock />
      <BioBlock />
      <TechBlock />
      <ProjectsBlock />
    </main>
  );
};

export default Home;
