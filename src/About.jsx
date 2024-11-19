import React from "react";

const About = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
    

     

      {/* Header Section */}
      
      <section className="bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">About Our Committee</h1>
        <p className="text-lg md:text-xl mt-4 text-gray-200">
          Driving innovation, teamwork, and excellence in all we do.
        </p>
      </section>
      

      {/* Who We Are Section */}
      
      <section className="py-16 px-4 md:px-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-300">
              The official Debate and Public speaking Club of DJ Sanghvi . 
            </p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/500x300"
              alt="Committee members"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      

      {/* Our Vision Section */}
      <section className="py-16 px-4 md:px-20 bg-gray-800">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://via.placeholder.com/500x300"
              alt="Vision in action"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300">
            To empower individuals to become confident, articulate, and persuasive communicators who can effectively engage with diverse audiences and contribute meaningfully to society.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
    
      <section className="py-16 px-4 md:px-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300">
              Our mission is to deliver outstanding results in everything we do,
              from planning impactful events to fostering relationships within our
              community. By embracing challenges and celebrating achievements, we
              aim to make a difference that matters.
            </p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/500x300"
              alt="Mission highlights"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default About;
