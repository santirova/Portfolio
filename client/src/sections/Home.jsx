import { Link } from "react-scroll";
import { nameRovaletti, ROLE_ROVALETTI } from "../data/dataRovaletti/dataHome";

const Home = () => {
  const name = nameRovaletti;
  const ROLE = ROLE_ROVALETTI;

  return (
    <section
      name="home"
      className="w-full h-screen pt-24 pb-24 bg-mybg1 dark:bg-mybg1d"
    >
      <div className="flex flex-col w-full h-full justify-center items-center">
        <h3 className="text-2xl md:text-5xl md:mb-8 xl:mt-16">
          Welcome! My name is
        </h3>
        <h1 className="text-3xl md:text-7xl xl:text-9xl mb-2 text-myacc dark:text-myaccd">
          {name}
        </h1>
        <h2 className="text-xl md:text-4xl xl:text-6xl mb-16">{ROLE}</h2>
        <Link
          className="text-md px-7 cursor-pointer text-myacc dark:text-myaccd md:text-xl lg:text-3xl xl:text-4xl"
          to="about"
          smooth={true}
          duration={300}
        >
          Click to know about me!
        </Link>
      </div>
    </section>
  );
};

export default Home;
