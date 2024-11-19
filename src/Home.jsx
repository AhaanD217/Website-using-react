import React from "react";
const Home = () => {
    return (
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          <span className="text-purple-500">DJS eXpress</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Express. Create. Inspire.
          </p>
        </section>
  
        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-800">
          <h3 className="text-3xl font-bold text-center mb-10">Contact Us</h3>
          <div className="flex flex-wrap justify-center gap-8 px-4">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-80">
              <h4 className="text-xl font-semibold mb-2 hover:text-purple-500 hover:underline"><a href="https://www.instagram.com/djsce.express/">Instagram</a></h4>
              <p className="text-gray-400">
                Check out our Reels !!
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-80">
              <h4 className="text-xl font-semibold mb-2 hover:text-purple-500 hover:underline">Linkedin</h4>
              <p className="text-gray-400">
                <a href="https://www.linkedin.com/company/djexpress/posts/?feedView=all">Check out our Posts !</a>
              </p>
              {/* <p><FontAwesomeIcon icon="fa-brands fa-linkedin" /></p> */}
              
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-80">
              <h4 className="text-xl font-semibold mb-2">Email</h4>
              <p className="text-gray-400"> djsexpress@gmail.com
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Home;
  