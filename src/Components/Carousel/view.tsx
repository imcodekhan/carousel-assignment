import Slider from "react-slick";
import type { Slide } from "../../hooks/useMovies";


type CarouselProps = {
  headingId: string;
  liveId: string;
  onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  sliderRef: React.RefObject<Slider | null>;
  settings: object;
  slides: Slide[];
  current: number;
  goTo: (index: number) => void;
  autoPlay: boolean;
  setAutoPlay: React.Dispatch<React.SetStateAction<boolean>>;
};

const View = ({
  headingId,
  liveId,
  onKeyDown,
  sliderRef,
  settings,
  slides,
  current,
  goTo,
  autoPlay,
  setAutoPlay,
}: CarouselProps) => {
  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-labelledby={headingId}
      aria-describedby={liveId}
      className="relative"
    >
      <h3 id={headingId} className="sr-only">
        Featured Movies Carousel
      </h3>

      <div
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="relative outline-none"
        onFocus={()=>{
          setAutoPlay(false)
          sliderRef.current?.slickPause()
        }}
      >
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, i) => (
            <div key={i} className="px-1">
              <figure
                id={`slide-${i}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${i + 1} of ${slides.length}: ${slide.title}`}
                className="relative overflow-hidden rounded-xl shadow-md"
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-[420px] object-cover rounded-xl"
                />
                <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 flex justify-center items-center">
                  <h4 className="text-xl font-semibold hover:bg-black w-auto p-3 rounded">{slide.title}</h4>
                </figcaption>
              </figure>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => sliderRef.current?.slickPrev()}
            aria-label="Previous Slide"
            className="px-3 py-2 rounded-lg bg-white/10 hover:bg-red-600 focus:bg-red-600 transition shadow"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => sliderRef.current?.slickNext()}
            aria-label="Next Slide"
            className="px-3 py-2 rounded-lg bg-white/10 hover:bg-red-600 focus:bg-red-600 transition shadow"
          >
            Next
          </button>
        </div>

        <button
          type="button"
          onClick={() => {
            setAutoPlay((v) => !v)
            if (autoPlay) { sliderRef.current?.slickPause() }
            else { sliderRef.current?.slickPlay() }

          }}
          aria-pressed={autoPlay}
          aria-label={autoPlay ? "Pause carousel autoplay" : "Start carousel autoplay"}
          
          className="px-3 py-2 rounded-lg bg-white/10 hover:bg-red-600 focus:bg-red-600 transition shadow"
        >
          {autoPlay ? "Pause" : "Play"}
        </button>
      </div>

      <nav
        className="mt-3"
        aria-label="Carousel Pagination"
      >
        <ul className="flex items-center justify-center gap-3">
          {slides.map((_, i) => {
            const isActive = i === current;
            return (
              <li key={`dot-${i}`}>
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`h-3 w-3 rounded-full transition
                      ${isActive ? "bg-red-600 scale-110" : "bg-white/40 hover:bg-white/70"}`}
                >
                  <span className="sr-only">Slide {i + 1}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <p
        id={liveId}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        Slide {current + 1} of {slides.length}: {slides[current]?.title}
      </p>
    </section>
  )
}

export default View;