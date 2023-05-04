import Link from "next/link";
import { BiPaintRoll, BiCodeAlt, BiGitBranch } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

export default function Services() {
  const services = [
    {
      heading: "UI/UX Design",
      discription:
        "Creating the visual and interactive elements that users see and interact with on websites and applications.",
      link: "#",
      icon: <BiPaintRoll />,
    },
    {
      heading: "Develop Web App",
      discription:
        "Integrate the frontend with the backend functionality and also responsive web application.",
      link: "#",
      icon: <BiCodeAlt />,
    },
    {
      heading: "Update Existing",
      discription:
        "Modefy or Redesign your existing project with your requirments. I will be happy to contribute with you.",
      link: "#",
      icon: <BiGitBranch />,
    },
  ];
  return (
    <div className="pb-16">
      <div className="xl:container m-auto px-3 md:px-12">
        <div>
          <h1 className="text-7xl font-extralight lg:text-center">
            As a Frontend Developer.
          </h1>
        </div>
        <div 
          className="mt-16 grid divide-x divide-y divide-gray-700 text-gray-500 overflow-hidden
          rounded-3xl border border-gray-700 sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0"
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-purple-900"
            >
              <div className="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-gray-800">
                <div className="space-y-2">
                  <div className="flex items-center justify-start space-x-2 text-xl font-medium text-white ">
                    <span>{service.icon}</span>
                    <h5 className="transition group-hover:text-primary">
                      {service.heading}
                    </h5>
                  </div>
                  <p className="text-sm text-gray-300">{service.discription}</p>
                </div>
                <Link 
                  href={service.link} 
                  className="flex items-center justify-between group-hover:text-primary"
                >
                  <span className="text-sm">Read more</span>
                  <BsArrowRight 
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 
                    group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
