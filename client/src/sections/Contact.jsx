import Form from "../components/Form";
import ContactIcons from "../components/ContactIcons";

const Contact = () => {
  const TEXT =
    "Let's get in touch! I would love to hear from you. Whether you have a question, feedback, or just want to say hello, feel free to contact me and I'll get back to you as soon as possible. Your message is important to me, and I'm excited to connect with you!";

  return (
    <main
      name="contact"
      className="flex flex-col w-full items-center py-24 lg:py-24 bg-mybg1 dark:bg-mybg1d"
    >
      <div className="flex flex-col items-center w-11/12 lg:w-4/5 xl:w-3/5">
        <h1 className=" text-3xl font-semibold text-myacc dark:text-myaccd md:text-5xl">
          CONTACT
        </h1>
        <div className="flex items-center justify-center"> {/* Agrega este div */}
          <Form />
        </div>
        <ContactIcons />
      </div>
    </main>
  );
};

export default Contact;
