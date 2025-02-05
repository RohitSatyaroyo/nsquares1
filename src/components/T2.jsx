import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Code,
  Monitor,
  Database,
  Smartphone,
  Globe,
  ShieldCheck,
  Brush,
  Rocket,
  Server,
  Cloud,
  Layers,
  PackageOpen
} from 'lucide-react';
import { Link } from "react-scroll";

const IndustryExpertise = () => {
  const industries = [
    {
      name: 'Web Development',
      description: 'Building Responsive Websites',
      icon: Code,
      color: 'text-teal-400'
    },
    {
      name: 'App Development',
      description: 'Mobile & Desktop Apps',
      icon: Smartphone,
      color: 'text-indigo-400'
    },
    {
      name: 'Cloud Solutions',
      description: 'Scalable Cloud Integration',
      icon: Cloud,
      color: 'text-purple-400'
    },
    {
      name: 'BlockChain',
      description: 'Securing Payment Systems',
      icon: ShieldCheck,
      color: 'text-red-400'
    },
    {
      name: 'UI/UX Design',
      description: 'User-Friendly Interfaces',
      icon: Brush,
      color: 'text-pink-400'
    },
    {
      name: 'E-commerce',
      description: 'Custom Online Stores',
      icon: PackageOpen,
      color: 'text-yellow-400'
    },
    {
      name: 'API Integration',
      description: 'Streamlined System Connectivity',
      icon: Server,
      color: 'text-orange-400'
    },
    {
      name: 'SEO Optimization',
      description: 'Improving Search Visibility',
      icon: Layers,
      color: 'text-green-400'
    },
    {
      name: 'Data Analytics',
      description: 'Data-Driven Insights',
      icon: Database,
      color: 'text-blue-400'
    },
    {
      name: 'Enterprise Solutions',
      description: 'Software for Enterprises',
      icon: Monitor,
      color: 'text-gray-400'
    },
    {
      name: 'SaaS Development',
      description: 'Software as a Service',
      icon: Rocket,
      color: 'text-purple-500'
    },
    {
      name: 'Hosting & Maintenance',
      description: 'Reliable Web Hosting',
      icon: Globe,
      color: 'text-cyan-400'
    }
  ];

  return (
    <div className="w-full bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gray-800 text-teal-400 text-sm font-medium px-4 py-1 rounded-full">
            Industry Expertise
          </span>
          <h2 className="mt-6 text-4xl font-bold text-white">
            Expert Solutions for Every Digital Need
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Our expertise spans across diverse industries to deliver impactful solutions
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card
                key={index}
                className="group bg-gray-800 border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-gray-700 rounded-full group-hover:bg-gray-600 transition-colors duration-300">
                      <IconComponent className={`w-6 h-6 ${industry.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                      {industry.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
       <div className="mt-16 text-center">
      <Link
        to="consultationform"
        smooth={true}
        duration={500}
        offset={-80}
        className="inline-flex items-center px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
      >
        <span>Get Started Today</span>
        <svg
          className="ml-2 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </Link>
    </div>
      </div>
    </div>
  );
};

export default IndustryExpertise;
