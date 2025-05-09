
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  
  const licenseTypes = [
    { value: "", label: "Select license type" },
    { value: "adobe", label: "Adobe Creative Cloud" },
    { value: "microsoft", label: "Microsoft Office" },
    { value: "autocad", label: "Autodesk AutoCAD" },
    { value: "vmware", label: "VMware" },
    { value: "salesforce", label: "Salesforce" },
    { value: "other", label: "Other" }
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }
    
    if (!formData.licenseType) {
      newErrors.licenseType = "Please select a license type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is changed
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would send the form data to a backend API here
      console.log("Form submitted:", formData);
      
      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you soon about your license valuation.",
      });
      
      // Reset the form
      setFormData({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: ""
      });
    }
  };
  
  return (
    <section id="contact" className="section-container bg-softsell-900 text-white">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="heading-lg mb-4">Ready to Sell Your Software Licenses?</h2>
          <p className="text-softsell-100 mb-8">
            Fill out the form with your license details, and our team will provide a free valuation within 24 hours.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start">
              <div className="bg-softsell-800 p-3 rounded-full mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Free Valuation</h3>
                <p className="text-softsell-100">No cost or obligation to sell</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-softsell-800 p-3 rounded-full mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Secure Process</h3>
                <p className="text-softsell-100">Encrypted end-to-end</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-softsell-800 p-3 rounded-full mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Fast Payment</h3>
                <p className="text-softsell-100">Get paid within 48 hours</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-softsell-800 p-3 rounded-full mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Multiple Payment Methods</h3>
                <p className="text-softsell-100">Bank, PayPal, or Crypto</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white text-softsell-900 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Get a Quote</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-softsell-500`}
                placeholder="Your name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-softsell-500`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            
            <div className="mb-4">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name*
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.company ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-softsell-500`}
                placeholder="Your company"
              />
              {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
            </div>
            
            <div className="mb-4">
              <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 mb-1">
                License Type*
              </label>
              <select
                id="licenseType"
                name="licenseType"
                value={formData.licenseType}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.licenseType ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-softsell-500`}
              >
                {licenseTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              {errors.licenseType && <p className="mt-1 text-sm text-red-500">{errors.licenseType}</p>}
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-softsell-500"
                placeholder="Tell us more details about your license (version, seats, validity period, etc.)"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-softsell-600 hover:bg-softsell-700 text-white font-medium py-3 px-6 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-softsell-500 focus:ring-offset-2"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
