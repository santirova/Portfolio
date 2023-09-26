import icons from "../assets/technologyIcons/indexIcons"; // Importa el objeto con todas las imágenes SVG
const TechnologiesArticle = ({ label, technologiesArray }) => {
  return (
    <div className="p-4 bg-mybg1 dark:bg-mybg1d rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{label}</h2>
      <div className="flex flex-wrap justify-center">
        {technologiesArray.map((technologyItem, index) => (
          <div
            key={index}
            className="flex flex-col items-center m-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
          >
            <img
              className="w-12 h-12 md:w-16 md:h-16 mb-2"
              src={icons[technologyItem]}
              alt={technologyItem}
            />
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {technologyItem}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TechnologiesArticle;
