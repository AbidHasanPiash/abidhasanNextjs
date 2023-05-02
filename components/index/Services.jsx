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
        "Integrate the frontend with the backend functionality and Responsive web application.",
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
    <div class="py-16">
      <div class="xl:container m-auto px-6 md:px-12">
        <div>
          <h1 className="text-7xl font-extralight lg:text-center">
            As a Frontend Developer.
          </h1>
        </div>
        <div 
          class="mt-16 grid divide-x divide-y divide-gray-700 text-gray-500 overflow-hidden
          rounded-3xl border border-gray-700 sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0"
        >
          {services.map((service, i) => (
            <div
              key={i}
              class="group relative bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-purple-900"
            >
              <div class="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-gray-800">
                <div class="space-y-2">
                  <h5 class="text-xl font-medium text-white transition group-hover:text-primary">
                    {" "}
                    {service.heading}
                  </h5>
                  <p class="text-sm text-gray-300">{service.discription}</p>
                </div>
                <Link 
                  href={service.link} 
                  class="flex items-center justify-between group-hover:text-primary"
                >
                  <span class="text-sm">Read more</span>
                  <BsArrowRight 
                    class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 
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
