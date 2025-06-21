import FeaturedCourses from "../Components/FeaturedCourses";
import Footer from "../Components/Footer";
import Testimonial from "../Components/Testimonial";

const Home = () => {
  return (
    <main className="grid grid-rows-[auto_1fr_1fr_1fr_1fr_auto] h-screen">
      <FeaturedCourses />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default Home;
