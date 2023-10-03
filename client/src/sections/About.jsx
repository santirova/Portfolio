import { dataRovalettiAbout } from "../data/dataRovaletti/dataAbout";
import profileImg from "../assets/profileImage/rovaletti.jpg";
import cvRovaletti from "../assets/CV/SANTIAGO-ROVALETTI-09-23.pdf";
import Button from "../components/Button";

const About = () => {
  return (
    <section name="about" className="w-full bg-mybg2 dark:bg-mybg2d py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-semibold text-myacc dark:text-myaccd mb-8 text-center">
          ABOUT ME
        </h1>
        <img
          className="w-1/3 md:w-1/4 mx-auto rounded-full mb-6"
          src={profileImg}
          alt="Profile"
        />
        {dataRovalettiAbout.map((paragraph, index) => (
          <p
            key={index}
            className="mb-4 text-sm md:text-base"
          >
            {paragraph}
          </p>
        ))}
        <a href={cvRovaletti} download>
          <Button text="DOWNLOAD CV" />
        </a>
      </div>
    </section>
  );
};

export default About;
