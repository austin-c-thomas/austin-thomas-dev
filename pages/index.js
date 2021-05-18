import BioBlock from "../components/home/BioBlock";
import IntroBlock from "../components/home/IntroBlock"
import IntroGraphic from "../components/home/IntroGraphic";
import TechBlock from "../components/home/TechBlock";

const Home = () => {
  return (
    <main id="home">
      <IntroBlock />
      <BioBlock />
      <TechBlock />
    </main>
  );
};

export default Home;
