import React, { Component } from "react";
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';

 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>WELCOME TO ALEXIS HEIGHTS</h2>
        <p>This is our place to connect with you and the community about upcoming events, project, HOA meetings and much more.</p>
 
        <p>Next HOA meeting will be done remotely via Zoom.</p>
      </div>
    );
  }
}
const items = [
  {
    id: 1,
    altText: 'Food Share',
    caption: 'Alexis Heights Food Share is now Open!'
  },
  {
    id: 2,
    altText: 'HOA',
    caption: 'Next HOA Meeting will be done via Zoom Meetings'
  },
  {
    id: 3,
    altText: 'Office Hours',
    caption: 'Office Hours will be done virtually or by phone'
  }
];

const Announce = (props) => {
  const [activeIndex, setActiveIndex] = Announce(0);
  const [animating, setAnimating] = Announce(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="announcement"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.announcement {
              max-width: 100%;
              height: 500px;
              background: trasparent;
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  ); 
}
 
export default Home;