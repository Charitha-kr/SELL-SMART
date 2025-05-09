
import { MessageSquare } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Jain",
      role: "IT Director",
      company: "TechCorp Global",
      content: "SoftSell helped us recover over Rs 50,000 from unused enterprise licenses after our company downsized. The process was straightforward and the valuation was better than we expected.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Rajesh Kumar",
      role: "Operations Manager",
      company: "Innovate Systems",
      content: "We were skeptical at first, but SoftSell delivered exactly what they promised. The valuation was competitive and payment was processed within 48 hours of accepting the offer.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  return (
    <section id="testimonials" className="section-container bg-white">
      <div className="text-center mb-12">
        <h2 className="heading-lg text-softsell-800 mb-4">What Our Customers Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it - hear from businesses who have successfully sold their software licenses with SoftSell.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-softsell-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all relative"
          >
            <div className="absolute -top-4 -left-4 bg-softsell-600 rounded-full p-2 shadow-lg">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
            <div className="flex items-center">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="font-semibold text-softsell-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
