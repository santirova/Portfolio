import dataDvoskinTechnologies from "../data/dataDvoskin/dataTechnologies";
import dataRovalettiTechnologies from "../data/dataRovaletti/dataTechnologies";

import TechnologiesArticle from "../components/TechnologiesArticle";

const TechnologiesContainer = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const dataTechnologies =
    dataOwner === "dvoskin"
      ? dataDvoskinTechnologies
      : dataRovalettiTechnologies;

  const technologies = [
    { label: "Languages", technologiesArray: dataTechnologies.languages },
    { label: "Front", technologiesArray: dataTechnologies.front },
    { label: "Back", technologiesArray: dataTechnologies.back },
    { label: "Databases", technologiesArray: dataTechnologies.databases },
  ];

  return (
    <section className="bg-mybg2 w-full  dark:bg-mybg2d px-12 py-24" name="technologies">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold text-myacc dark:text-myaccd mb-12 text-center">
          TECHNOLOGIES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((element, index) => (
            <TechnologiesArticle
              key={index}
              label={element.label}
              technologiesArray={element.technologiesArray}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesContainer