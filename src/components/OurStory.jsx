import React from "react";

const OurStory = () => {
  const videoId = "g9Euwg4tGBE";

  return (
    <section id="our-story" className="story-section py-12 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <h2
          className="text-center text-4xl md:text-5xl mb-8 md:mb-12 text-rose-500"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Our Story
        </h2>

        {/* Responsive Video Container */}
        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=0`}
            title="Our Story Video"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
        </div>

        <div className="mt-8 md:mt-12 text-center space-y-4">
          <p
            className="text-rose-600 font-bold text-2xl md:text-3xl px-2"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Every 17th is a win for us, Babyy Ko.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;