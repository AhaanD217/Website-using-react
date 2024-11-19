import React from "react";

const Events = () => {
  const pastEvents = [
    {
      title: "Aaryavarta 3.0",
      image: "/one.png",
    },
    {
      title: "Illuminaire",
      image: "/e2.jpeg",
    },
    {
      title: "Court Charades",
      image: "/Express-fam.jpeg",
    },
    
  ];

  return (
    <div className="bg-purple-500 min-h-screen flex flex-col items-center justify-start p-10">
      {/* Memory Wall Section */}
      <section className="py-16 w-full">
        <h2 className="text-5xl font-bold text-purple-900 mb-8 text-center ">Our eXpress Family</h2>
        <img src="/exp4.png" alt="Memory Wall" className="w-full rounded-lg shadow-lg " /> 
      </section>

      {/* Past Events Section */}
      <section className="py-16 w-full">
        <h2 className="text-5xl font-bold text-purple-900 mb-8 text-center">A Glimpses of The Past</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pastEvents.map((event, index) => (
            <div key={index} className="bg-black rounded-lg shadow-lg p-4">
              <img src={event.image} alt={event.title} className="w-full rounded-lg mb-4 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg" />
              <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
