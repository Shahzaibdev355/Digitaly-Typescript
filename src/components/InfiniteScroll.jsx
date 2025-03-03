import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const InfiniteCarousel = ({ services }) => {
  const [items, setItems] = useState([...services, ...services]); // Duplicate items
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let timer;

    const startScrolling = () => {
      if (!carousel) return;

      let scrollPosition = 0;
      const scrollSpeed = 2; // Adjust speed (pixels per frame)

      const scroll = () => {
        scrollPosition += scrollSpeed;

        // Reset to the start of the duplicated list seamlessly
        if (scrollPosition >= carousel.scrollWidth / 2) {
          scrollPosition = 0;
        }

        carousel.scrollLeft = scrollPosition;
        timer = requestAnimationFrame(scroll);
      };

      timer = requestAnimationFrame(scroll);
    };

    startScrolling();

    return () => cancelAnimationFrame(timer); // Cleanup on component unmount
  }, []);

  return (
    <div ref={carouselRef} className="overflow-hidden w-full">
      <Carousel>
        <CarouselContent className="flex">
          {items.map((service, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 w-1/4 px-2" // Adjust width for visible cards
            >
              <div className="p-4 border rounded-lg">
                <img
                  src={service.image}
                  alt={`Service ${index}`}
                  className="w-full h-auto"
                />
                <p className="mt-2">{service.para1}</p>
                <p>{service.para2}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default InfiniteCarousel;
