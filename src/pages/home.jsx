import FeaturedCourses from "../Components/FeaturedCourses";
import Hero from "../Components/Hero";
import LandingPageHeader from "../Components/LandingPageHeader";
import Trusted from "../Components/Trusted";

const Home = () => {
  return (
    <main className="grid grid-rows-[auto_1fr_1fr_1fr_1fr_auto] h-screen">
      <LandingPageHeader/>
      <Hero />
      <Trusted />
      <FeaturedCourses />
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos et quam
        recusandae, adipisci maiores aut explicabo dolorum voluptate, inventore
        ullam voluptas. Nihil, officiis doloribus! Ducimus voluptatibus voluptas
        dicta fuga nihil.
      </section>
      <footer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos et quam
        recusandae, adipisci maiores aut explicabo dolorum voluptate, inventore
        ullam voluptas. Nihil, officiis doloribus! Ducimus voluptatibus voluptas
        dicta fuga nihil.
      </footer>
    </main>
  );
};

export default Home;
