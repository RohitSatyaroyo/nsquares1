import React, { useState } from 'react';
import { Mail, User, Phone, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('d')

    // Validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast.warn('Please fill in all fields.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.warn('Please enter a valid email address.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    // Sending Email
    emailjs
      .send(
        'service_6ztxc8g', // Replace with your EmailJS Service ID
        'template_gqh7qxu', // Replace with your EmailJS Template ID
        formData,
        'yVNXoiryRF-4YH2Mi' // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          toast.success('Message sent successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          setFormData({ name: '', email: '', phone: '' });
        },
        () => {
          toast.error('Failed to send the message. Please try again later.', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      );
  };

  return (
    <><ToastContainer/>
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-gray-200 p-6 flex items-center justify-center">
      <Card className="w-full max-w-3xl bg-gray-900/95 backdrop-blur-md shadow-2xl">
        <CardHeader className="space-y-2 text-center">
          <div className="flex justify-center mb-4">
            <Sparkles className="h-12 w-12 text-teal-400 animate-pulse" />
          </div>
          <CardTitle className="text-4xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
  Expert Industrial Solutions Consultation
</CardTitle>
<p className="text-gray-400 max-w-2xl mx-auto">
  Optimize your manufacturing processes with our advanced industrial solutions. Let us design a strategy tailored to enhance efficiency and drive growth in your operations.
</p>

        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Name Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-500 group-focus-within:text-teal-400 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:border-teal-400 focus:ring-2 focus:ring-teal-300 bg-gray-800 text-gray-200 outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              {/* Email Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500 group-focus-within:text-teal-400 transition-colors" />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:border-teal-400 focus:ring-2 focus:ring-teal-300 bg-gray-800 text-gray-200 outline-none transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {/* Phone Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-500 group-focus-within:text-teal-400 transition-colors" />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:border-teal-400 focus:ring-2 focus:ring-teal-300 bg-gray-800 text-gray-200 outline-none transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium 
                       hover:from-teal-600 hover:to-cyan-600 transition-all duration-200 
                       flex items-center justify-center space-x-2 group"
            >
              <span>Request a Free Consultation</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center space-x-2 text-gray-500">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm">We’ll respond within 24 hours.</span>
          </div>
        </CardContent>
      </Card>
    </div>
    </>
  
  );
};

export default ConsultationForm;
