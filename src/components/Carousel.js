import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import ImageOne from "../img/brain.jpg";
import ImageTwo from "../img/school.jpg";
import ImageThree from "../img/padlock.jpg";
import "../styles/_Carousel.scss";

const items = [
  {
    src: ImageOne,
    altText: 'Steampunk Style Image of Human Skull and Brain',
    caption: 'At AimLearn our goal is to unlock your brain\'s full potential.',
    header: 'Building Knowledge',
    key: '1'
  },
  {
    src: ImageTwo,
    altText: 'Chalkboard and Rubber',
    caption: 'We want to change the modern day classroom to use Artificial Intelligence',    
    header: 'Making the Future Happen',
    key: '2'
  },
  {
    src: ImageThree,
    altText: 'Padlock and Keys',
    caption: 'We can unlock your future, you are the key to making this happen.',
    header: 'Unlock Your Potential',
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;