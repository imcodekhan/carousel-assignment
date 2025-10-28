import React from "react";
import Carousel from "./Components/Carousel";

const App: React.FC = () => {
  return (
    <main className="w-full max-w-6xl">
      <section
        aria-labelledby="carousel-heading"
        className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl"
      >
        <h2
          id="carousel-heading"
          className="text-3xl font-semibold mb-6 text-center tracking-tight"
        >
          🎬 Featured Movies
        </h2>
        <Carousel />
      </section>
    </main>
  );
};

export default App;
