import React from "react";
import { dataDvoskinAbout } from "../data/dataDvoskin/dataAbout";
import { dataRovalettiAbout } from "../data/dataRovaletti/dataAbout";
import dvoskin from "../assets/profileImage/dvoskin.jpg";
import rovaletti from "../assets/profileImage/rovaletti.jpg";
import cvDvoskin from "../assets/CV/Gastón_Dvoskin_Front-end_Developer.pdf";
import cvRovaletti from "../assets/CV/SANTIAGO-ROVALETTI-09-23.pdf";
import Button from "../components/Button";

const About = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const dataAbout =
    dataOwner === "dvoskin" ? dataDvoskinAbout : dataRovalettiAbout;
  const profileImg = dataOwner === "dvoskin" ? dvoskin : rovaletti;
  const cvOwner = dataOwner === "dvoskin" ? cvDvoskin : cvRovaletti;

  return (
    <section name="about" className="w-full bg-mybg2 dark:bg-mybg2d py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-semibold text-myacc dark:text-myaccd mb-12 text-center">
          ABOUT ME
        </h1>
        <img
          className="w-1/4 md:w-1/5 mx-auto rounded-full mb-6"
          src={profileImg}
          alt="Profile"
        />
        {dataAbout.map((paragraph, index) => (
          <p
            key={index}
            className="mb-4 text-sm font-sans md:text-base"
          >
            {paragraph}
          </p>
        ))}
        <a href={cvOwner} download>
          <Button text="DOWNLOAD CV" />
        </a>
      </div>
    </section>
  );
};

export default About;
