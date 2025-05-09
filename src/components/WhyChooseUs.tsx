
import { Shield, Users, Award, Star } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-8 h-8 text-softsell-600 dark:text-softsell-400" />,
      title: "Secure Transactions",
      description: "Our platform uses bank-level encryption to keep your license information and payment details completely secure."
    },
    {
      icon: <Award className="w-8 h-8 text-softsell-600 dark:text-softsell-400" />,
      title: "Best Market Value",
      description: "Our proprietary valuation algorithm ensures you get the maximum value for your software licenses."
    },
    {
      icon: <Users className="w-8 h-8 text-softsell-600 dark:text-softsell-400" />,
      title: "Large Buyer Network",
      description: "We've built relationships with thousands of businesses looking to purchase discounted software licenses."
    },
    {
      icon: <Star className="w-8 h-8 text-softsell-600 dark:text-softsell-400" />,
      title: "5-Star Support",
      description: "Our dedicated support team is available 7 days a week to assist with any questions or concerns."
    },
  ];

  return (
    <section id="why-choose-us" className="section-container bg-gray-50 dark:bg-softsell-900">
      <div className="text-center mb-12">
        <h2 className="heading-lg text-softsell-800 dark:text-white mb-4">Why Choose SoftSell</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We've helped over 10,000 customers sell their software licenses and recover more than Rs 25 million.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {reasons.map((reason, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-softsell-800 p-6 rounded-xl border border-gray-100 dark:border-softsell-700 shadow-sm hover:shadow-md transition-all flex"
          >
            <div className="bg-softsell-50 dark:bg-softsell-900 p-4 rounded-lg mr-4 h-fit">
              {reason.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-softsell-800 dark:text-softsell-100">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
