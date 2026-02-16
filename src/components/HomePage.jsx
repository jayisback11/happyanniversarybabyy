import React from "react";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { mockData } from "../mock";

const HomePage = () => {
  const scrollToStory = () => {
    document
      .getElementById("love-letter")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="hero-section relative h-screen w-full overflow-hidden flex flex-col justify-between items-center text-center"
    >
      <div className="hero-overlay absolute inset-0 z-0"></div>

      <div
        className="hero-background absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/IMG_5539.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* 1. Main Content Container (Top/Center) */}
      <div className="hero-content z-10 pt-20 px-4 flex-grow flex flex-col justify-center">
        <div className="hero-text">
          <p className="hero-tagline fade-in text-rose-200 font-medium tracking-widest mb-4">
            ❤️ Different skies. Same love. ❤️
          </p>

          <h1 className="hero-title fade-in-delay-1 italic text-4xl md:text-6xl font-bold text-white leading-tight">
            Babyy,
            <br />
            Our First Year Together
            <br />
            Is Just The Beginning.
          </h1>

          <p className="hero-subtitle fade-in-delay-2 text-white/80 mt-6 text-lg">
            365 days. Miles apart, but never in heart.
          </p>

          <div className="mt-10">
            <Button
              onClick={scrollToStory}
              className="hero-cta fade-in-delay-3 rounded-full px-10 py-6 bg-rose-500 hover:bg-rose-600 border-none transition-all shadow-lg shadow-rose-500/20"
              size="lg"
            >
              Explore Our Love Story
            </Button>
          </div>
        </div>
      </div>
      {/* 2. Scroll Indicator - Fixed Centering */}
      <div
        className="hero-scroll-indicator z-10 pb-10 w-full flex flex-col items-center justify-center cursor-pointer"
        onClick={scrollToStory}
      >
        <div className="animate-bounce flex flex-col items-center">
          <Heart className="text-rose-400 fill-rose-400" size={32} />
          <p className="text-[10px] uppercase tracking-[0.3em] mt-3 text-white/60 text-center">
            Scroll for more
          </p>
        </div>
      </div>

      {/* Background Decorative Hearts - using absolute to keep them out of the flow */}
      <div className="absolute top-20 left-[10%] opacity-20 animate-pulse hidden md:block">
        <Heart size={40} className="text-white fill-white" />
      </div>
      <div className="absolute bottom-40 right-[10%] opacity-20 animate-pulse delay-700 hidden md:block">
        <Heart size={50} className="text-white fill-white" />
      </div>
    </section>
  );
};

export default HomePage;
