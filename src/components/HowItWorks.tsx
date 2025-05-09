
import { FileUp, ArrowRight, DollarSign } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileUp className="w-12 h-12 text-softsell-600" />,
      title: "Upload License",
      description: "Securely upload your software license details through our encrypted platform."
    },
    {
      icon: <ArrowRight className="w-12 h-12 text-softsell-600" />,
      title: "Get Valuation",
      description: "Our algorithm determines the best market value for your license in real-time."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-softsell-600" />,
      title: "Get Paid",
      description: "Accept the offer and receive payment via your preferred payment method."
    }
  ];

  return (
    <section id="how-it-works" className="section-container bg-white">
      <div className="text-center mb-12">
        <h2 className="heading-lg text-softsell-800 mb-4">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our streamlined process makes selling your unused software licenses quick, easy, and profitable.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-softsell-100"></div>

        {steps.map((step, index) => (
          <div 
            key={index} 
            className="relative bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-softsell-200"
          >
            <div className="mb-6 flex justify-center">
              <div className="bg-softsell-50 p-4 rounded-full">
                {step.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center text-softsell-800">{step.title}</h3>
            <p className="text-gray-600 text-center">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a href="#contact" className="btn-primary inline-flex items-center">
          Start Selling Your Licenses
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default HowItWorks;
