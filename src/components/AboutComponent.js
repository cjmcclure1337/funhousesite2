import React, { useState } from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators} from 'reactstrap';


const slides = [
    {
      src: "/images/slides/codycarousel.png",
      altText: "The Potter"
    },
    {
      src: "/images/slides/screamcarousel.png",
      altText: "'The Scream' Pot"
    },
    {
      src: "/images/slides/displaycarousel.png",
      altText: "Pottery Display"
    }
  ];



function About() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const Slides = slides.map((slide) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={slide.src}
          >
            <img src={slide.src} alt={slide.altText} className="w-100" />
          </CarouselItem>
        );
    });

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }
    
      const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }
    
      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }
    
    return (
        <>
            <div className="container mt-3">
            <div className="row mb-4">
                <div className="col-md-8 mx-auto">
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                    >
                        <CarouselIndicators items={slides} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {Slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque convallis a cras semper auctor. In arcu cursus euismod quis viverra nibh. Interdum consectetur libero id faucibus nisl. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. A cras semper auctor neque vitae tempus. Consequat semper viverra nam libero justo. Adipiscing commodo elit at imperdiet dui accumsan sit. Cursus vitae congue mauris rhoncus aenean. Vitae turpis massa sed elementum. </p>
                    <p>Vitae congue mauris rhoncus aenean vel elit scelerisque. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Amet massa vitae tortor condimentum lacinia quis vel. Elementum tempus egestas sed sed risus pretium quam. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Interdum velit euismod in pellentesque massa placerat. Massa massa ultricies mi quis hendrerit dolor magna eget. Leo in vitae turpis massa sed elementum tempus.</p>
                </div>
            </div>
            <div className="row my-2">
                <div className="col text-center">
                    <img src="/images/artpot1.webp" alt="Art Pot" />
                </div>
            </div>
        </div>
        </>
    );
}

export default About;