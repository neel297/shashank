
import { useState, FormEvent } from "react";
import Button from "../ui/Button";
import AnimatedElement from "../ui/AnimatedElement";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const subject = `Contact from Portfolio - ${formData.name}`;
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      
      window.location.href = `mailto:shashankmohanp@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative elements with dark theme */}
      <div className="floating-decoration top-20 left-20 w-72 h-72 rounded-full bg-pharma-900/30 mix-blend-soft-light filter blur-xl"></div>
      <div className="floating-decoration bottom-40 right-30 w-80 h-80 rounded-full bg-teal-900/30 mix-blend-soft-light filter blur-xl" style={{ animationDelay: "3s" }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedElement>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4">Get In Touch</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-pharma-400 to-teal-400 mx-auto mb-6"></div>
            <p className="text-gray-300">
              Let's connect and discuss how we can work together or answer any questions you might have.
            </p>
          </AnimatedElement>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedElement animation="fade-right">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-playfair font-semibold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name <span className="text-pharma-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-gray-700/50 border ${
                      errors.name ? "border-red-500" : "border-gray-600"
                    } rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-pharma-500`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Email <span className="text-pharma-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-gray-700/50 border ${
                      errors.email ? "border-red-500" : "border-gray-600"
                    } rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-pharma-500`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Message <span className="text-pharma-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-gray-700/50 border ${
                      errors.message ? "border-red-500" : "border-gray-600"
                    } rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-pharma-500`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    className="w-full sm:w-auto"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-left" delay={200}>
            <div className="flex flex-col gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-xl">
                <h3 className="text-2xl font-playfair font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-pharma-400 mt-1 mr-4" />
                    <div>
                      <h4 className="font-medium text-white mb-1">Email Address</h4>
                      <a href="mailto:shashankmohanp@gmail.com" className="text-gray-300 hover:text-pharma-400 transition-colors">
                        shashankmohanp@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div>
                      <h4 className="font-medium text-white mb-1">Location</h4>
                      <p className="text-gray-300">
                        Maihar, Madhya Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-xl">
                <h3 className="text-2xl font-playfair font-semibold mb-6">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/" 
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-700 hover:bg-pharma-600 transition-colors p-4 rounded-full"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://github.com/" 
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-700 hover:bg-pharma-600 transition-colors p-4 rounded-full"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Contact;
