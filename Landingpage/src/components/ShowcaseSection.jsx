import React from 'react';
import ShowcaseItem from './ShowcaseItem';

// Import images
import Image1 from '../assets/3.jpg';
import IlandImage from '../assets/iland1.jpg';
import Image2 from '../assets/moun1.jpg';

const showcaseData = [
  {
    title: 'Explore the Wonders of the World',
    description:
      "Embark on a journey to the world’s most iconic landmarks. Our guided tours take you to the heart of history, art, and culture. From the Eiffel Tower in Paris to the Great Wall of China, we bring you closer to the wonders that have shaped our world. Discover the beauty, history, and architecture of the most famous destinations across the globe",
    imgUrl: Image1, // Image imported here
    reverse: true,
  },
  {
    title: 'Exotic Island Getaway',
    description:
      ' Escape to paradise with our exclusive island tours. Enjoy the serene beauty of white sandy beaches, crystal-clear waters, and luxurious resorts that offer the perfect getaway from the hustle and bustle of daily life. Whether you’re seeking adventure or relaxation, our island tours provide the ideal destination for every traveler.',
    imgUrl: IlandImage, // Image imported here
    reverse: false,
  },
  {
    title: ' Mountain Adventures and Scenic Views',
    description:
      'Experience the thrill of mountain adventures, where breathtaking landscapes meet the great outdoors. Our tours offer you the chance to hike, explore, and immerse yourself in the stunning views of towering peaks and vast valleys. Whether youre a nature lover or an adventure seeker, our mountain excursions are the perfect way to connect with nature and create unforgettable memories.',
    imgUrl: Image2, // Image imported here
    reverse: true,
  },
];

const ShowcaseSection = () => {
  return (
    <section className="showcase">
      <div className="container-fluid p-0">
        {showcaseData.map((item, index) => (
          <ShowcaseItem
            key={index}
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl} // Passing imgUrl as prop
            reverse={item.reverse}
          />
        ))}
      </div>
    </section>
  );
};

export default ShowcaseSection;
