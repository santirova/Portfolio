import { nameRovaletti, ROLE_ROVALETTI } from "../data/dataRovaletti/dataHome";

const Home = () => {
  const name = nameRovaletti;
  const ROLE = ROLE_ROVALETTI;

  return (
    <section
      name="home"
      className="w-full h-screen pt-44 pb-24 bg-mybg1 dark:bg-mybg1d"
    >
      <div className="flex flex-col w-full h-full justify-center items-center">
        <h3 className="text-2xl sm:text-4xl md:text-5xl xl:text-7xl mb-4 sm:mb-8">
          Welcome! My name is
        </h3>
        <h1 className="text-2xl sm:text-4xl md:text-6xl xl:text-8xl mb-2 text-myacc dark:text-myaccd">
          {name}
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl">{ROLE}</h2>
      </div>
    </section>
  );
};

export default Home;
