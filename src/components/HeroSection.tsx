
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-softsell-950 dark:to-softsell-900 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <h1 className="heading-xl text-softsell-900 dark:text-white">
              Turn Unused Software Licenses Into 
              <span className="text-softsell-600 dark:text-softsell-300"> Cash</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-lg">
              SoftSell helps businesses and individuals sell their unused software licenses quickly, securely, and for the best possible price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2">
                Sell My Licenses
                <ArrowRight size={18} />
              </a>
              <a href="#how-it-works" className="btn-secondary flex items-center justify-center gap-2">
                Learn How It Works
              </a>
            </div>
            <div className="pt-4 flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <svg className="w-5 h-5 text-softsell-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>No fees until your license sells</span>
            </div>
          </div>
          <div className="hidden md:block animate-slide-right">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-softsell-200 dark:bg-softsell-800 rounded-full filter blur-3xl opacity-40"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-200 dark:bg-blue-900 rounded-full filter blur-3xl opacity-30"></div>
              <div className="relative bg-white dark:bg-softsell-800 p-8 rounded-2xl shadow-xl">
                <div className="bg-softsell-50 dark:bg-softsell-900 p-4 rounded-lg mb-6">
                  <div className="flex justify-between mb-3">
                    <div className="text-softsell-800 dark:text-softsell-100 font-semibold">Adobe Creative Cloud</div>
                    <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs px-2 py-1 rounded-full">Valuation Complete</div>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div className="h-2 bg-softsell-500 rounded-full w-full"></div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">License Type:</span>
                    <span className="font-medium">Enterprise (5 seats)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Validity:</span>
                    <span className="font-medium">14 months remaining</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Estimated Value:</span>
                    <span className="text-softsell-800 dark:text-softsell-300 font-bold text-xl">₹1,20,785 – ₹1,41,610</span>
                  </div>
                  <button className="w-full btn-primary">Accept Offer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
