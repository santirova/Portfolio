import { dataRovalettiAbout } from "../data/dataRovaletti/dataAbout";
import profileImg from "../assets/profileImage/rovaletti.jpg";
import cvRovaletti from "../assets/CV/SantiagoRovalettiCV-resumido-12-23.pdf";
import Button from "../components/Button";

const About = () => {
  return (
    <section name="about" className="w-full bg-mybg2 dark:bg-mybg2d py-24 px-12">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-semibold text-myacc dark:text-myaccd mb-8 text-center">
          ABOUT ME
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0">
        <div className="w-full md:w-2/3 mr-2 text-center md:text-left">
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
        <div className="w-full ml-2 md:w-1/3">
          <img
            className="w-full rounded-lg"
            src={profileImg}
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
};


export default About;
