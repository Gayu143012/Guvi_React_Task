import React from 'react';
import { IoMdDoneAll } from "react-icons/io";
import { LiaHandshakeSolid } from "react-icons/lia";
import { IoHeartCircleOutline } from "react-icons/io5"; // Updated
import { FaHotel } from "react-icons/fa";

import FeatureItem from './FeatureItem';

const features = [
    {
        icon: <LiaHandshakeSolid />,
        title: 'Best Value Guarantee',
        description: 'Enjoy competitive pricing and exclusive deals, making every journey worth every penny.',
      },
  {
    icon: <FaHotel />,
    title: 'Handpicked Accommodations',
    description: 'Experience the best stays, carefully selected to meet the highest standards of comfort and quality.',
  },
  {
    icon: <IoHeartCircleOutline />,
    title: 'Customer-Centric Service',
    description: 'Your satisfaction is our top priority. We go the extra mile to make your travel dreams a reality',
  },
  
];

const FeaturesSection = () => {
  return (
    <section className="features-icons bg-light text-center">
      <div className="container">
        <div className="row">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
