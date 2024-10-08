import React from 'react';

const randomGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const PhotoBackground = ({ clImages }) => {
  if (!clImages) return <></>;

  const randomPos = randomGenerator(0, clImages.length - 1);
  const randomImage = clImages[randomPos];

  return (
    <>
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-offwhite from-10% to-50% md:bg-gradient-to-br z-[5]" />
      <div className="photo-background w-full h-full overflow-hidden absolute top-0">
        <img
          className="object-cover w-full h-full"
          src={randomImage.node.secure_url}
          alt={randomImage.node.resource_type}
        />
      </div>
    </>
  );
};
export default PhotoBackground;
