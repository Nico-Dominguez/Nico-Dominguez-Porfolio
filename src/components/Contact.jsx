import React from "react";

const Contact = () => {
  const items = [
    { title: "Social Media Marketing" },
    { title: "Email Marketing" },
    { title: "SEO" },
    { title: "Project Management" },
    { title: "Interpersonal Communication Skills" },
    { title: "Adobe Creative Suite" },
    { title: "Content Creation" },
    { title: "Microsoft Suite" },
    { title: "Graphic Design" },
    { title: "Metric & Analytics" },
    { title: "SEM" },
    { title: "Web Development" },
  ];
  return (
    <div className=" flex flex-col-reverse lg:flex-row gap-4 rounded">
      <div className="lg:w-1/2 bg-blue-700 p-6 rounded flex gap-4 flex-col ">
        <h1 className="text-center sm:text-left font-bold italic font-serif text-xl">
          Contact Me:
        </h1>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col text-sm text-center sm:text-left gap-4">
            <div>
              <h2 className="font-bold text-xl">Email</h2>
              <p className="text-lg">98nicodominguez@gmail.com</p>
            </div>
            <div>
              <h2 className="font-bold text-xl">Phone</h2>
              <p className="text-lg">803 587-5992</p>
            </div>
            <div>
              <h2 className="font-bold text-xl">Linkedin</h2>
              <a
                href="https://www.linkedin.com/in/nnicodominguez/"
                className="text-lg hover:text-blue-400"
              >
                nnicodominguez
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 bg-blue-700 p-6 rounded flex gap-4 flex-col ">
        <h1 className="text-center sm:text-left font-bold italic font-serif text-xl">
          Skills
        </h1>
        <div className="flex flex-wrap gap-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-2 bg-blue-300 text-blue-950 rounded-full select-none font-bold"
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
