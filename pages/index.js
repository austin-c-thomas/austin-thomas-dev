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
      {/* <BioBlock /> */}
      <ProjectsBlock />
      <TechBlock />
      
    </main>
  );
};

export default Home;
