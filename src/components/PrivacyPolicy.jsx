import React from 'react';
import { Shield, User, Database, Lock, Eye, Clock, FileText, Phone, Mail, Globe, Info } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />, 
      title: "Privacy Policy Overview", 
      content: "Effective Date: 01 January 2024", 
      description: "Welcome to our Privacy Policy. This document outlines how we collect, use, and protect your information."
    },
    {
      icon: <User className="w-6 h-6 text-green-400" />, 
      title: "Personal Information We Collect", 
      content: "User Data", 
      description: "We collect personal details such as names, email addresses, phone numbers, and other identifiers when you interact with our services."
    },
    {
      icon: <Database className="w-6 h-6 text-purple-400" />, 
      title: "How We Collect Your Data", 
      content: "Collection Methods", 
      description: "We gather data directly when you provide it and automatically through cookies, logs, and third-party services."
    },
    {
      icon: <Lock className="w-6 h-6 text-red-400" />, 
      title: "How We Protect Your Information", 
      content: "Security Measures", 
      description: "We implement strong security practices including encryption, access control, and regular security audits."
    },
    {
      icon: <FileText className="w-6 h-6 text-yellow-400" />, 
      title: "Your Rights & Choices", 
      content: "User Rights", 
      description: "You have the right to access, update, or delete your data. You can also opt out of certain data uses."
    },
    {
      icon: <Globe className="w-6 h-6 text-pink-400" />, 
      title: "Third-Party Services", 
      content: "External Partners", 
      description: "We may share information with third-party services that help us improve our platform while ensuring your privacy is protected."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-lg">Your privacy is important to us. Please read our policy to understand how we handle your data.</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 mt-12">
          {sections.map((section, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-700">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gray-700 rounded-full">
                  {section.icon}
                </div>
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
              <h3 className="text-lg font-medium text-blue-400 mb-2">{section.content}</h3>
              <p className="text-gray-300">{section.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gray-800 bg-opacity-50 rounded-xl p-8 shadow-md border border-gray-700">
          <div className="flex items-center space-x-4 mb-6">
            <Eye className="w-6 h-6 text-cyan-400" />
            <h2 className="text-2xl font-semibold">Additional Information</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>We are committed to maintaining transparency regarding how we collect, use, and protect your data.</p>
            <p>For privacy concerns, please reach out to our data protection officer.</p>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 flex items-center justify-center space-x-4">
          <Clock className="w-5 h-5" />
          <span>Last updated: January 2024</span>
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-200">Contact Us</h2>
          <div className="mt-4 flex justify-center space-x-6 text-gray-300">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-green-400" />
              <span>+123 456 7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>support@company.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
