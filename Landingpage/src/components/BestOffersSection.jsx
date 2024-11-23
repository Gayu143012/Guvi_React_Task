import React from 'react';
import OfferCard from './OfferCard';
import turkeyImg from '../assets/turkey.jpg';
import spainImg from '../assets/spain.jpg';
import ukImg from '../assets/uk.jpg';

const offersData = [
  {
    imgSrc: turkeyImg,
    title: 'Turkey',
    description: 'Istanbul, Antalya, Ephesus',
  },
  {
    imgSrc: spainImg,
    title: 'Spain',
    description: 'Madrid, Andalucia, Barcelona',
  },
  {
    imgSrc: ukImg,
    title: 'United Kingdom',
    description: 'England, Scotland, Wales',
  },
];

const BestOffersSection = () => {
  return (
    <section className="best-offers text-center bg-light">
      <div className="container">
        <h2 className="mb-5">Best Offers</h2>
        <div className="row">
          {offersData.map((offer, index) => (
            <OfferCard
              key={index}
              imgSrc={offer.imgSrc}
              title={offer.title}
              description={offer.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestOffersSection;
