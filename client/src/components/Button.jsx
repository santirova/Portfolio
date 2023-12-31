const Button = ({ text, type, icon, onClickHandler, href }) => {
  return (
    <a href={href} target="_blank">
      <button
        onClick={onClickHandler}
        type={type}
        className="w-fit px-4 py-2.5 text-white text-center bg-myacc hover:bg-indigo-600 rounded-lg mt-6 duration-300"
      >
        {icon} <span>{text}</span>
      </button>
    </a>
  );
};

export default Button;
