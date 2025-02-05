import React from "react";
import { ShieldCheck, TrendingUp, Code, Users } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-teal-400" />,
    title: "Reliable and Secure",
    description:
      "Our solutions are built with top-notch security and reliability to ensure seamless industrial operations.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
    title: "Scalable Solutions",
    description:
      "We design systems that grow with your industrial needs, ensuring uninterrupted performance.",
  },
  {
    icon: <Code className="w-8 h-8 text-cyan-400" />,
    title: "Cutting-edge Technology",
    description:
      "We leverage advanced tools and technologies to build innovative and efficient industrial solutions.",
  },
  {
    icon: <Users className="w-8 h-8 text-purple-400" />,
    title: "Customer-Centric Design",
    description:
      "Our user-focused approach ensures that your operations achieve maximum efficiency and satisfaction.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black py-20">
      {/* Header and Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-emerald-400 text-lg font-medium uppercase tracking-wide mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Redefining Industrial Standards
              <br />
              with Trusted Expertise
            </h2>
            <p className="text-gray-300 text-xl mb-12">
              We specialize in creating reliable, scalable, and technology-driven industrial solutions tailored to your needs. Partner with us to transform your operations into a modern powerhouse.
            </p>

            {/* Features */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="bg-gray-700 p-4 rounded-xl shadow-md">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/6890319/pexels-photo-6890319.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Industrial Team"
              className="rounded-xl shadow-lg hover:shadow-emerald-500/50 transition-shadow duration-300 w-full h-auto max-h-[1200px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-60 h-60 bg-emerald-500 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500 rounded-full blur-3xl opacity-20" />
    </div>
  );
};

export default WhyChooseUs;
