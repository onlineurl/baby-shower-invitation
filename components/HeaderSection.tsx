import React from 'react';

const HeaderSection: React.FC = () => {
  // This component now just serves as a spacer to create the initial view height
  // and enable scrolling. The actual content is now in ParallaxBackground to be part
  // of the animation.
  return (
    <section className="h-screen" />
  );
};

export default HeaderSection;