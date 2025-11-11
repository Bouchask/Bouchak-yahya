import { Presentation } from '@/components/Presentation';
import { Slide1 } from '@/components/slides/Slide1';
import { Slide2 } from '@/components/slides/Slide2';
import { Slide3 } from '@/components/slides/Slide3';
import { Slide4 } from '@/components/slides/Slide4';
import { Slide5 } from '@/components/slides/Slide5';
import { Slide6 } from '@/components/slides/Slide6';
import { Slide7 } from '@/components/slides/Slide7';
import { Slide8 } from '@/components/slides/Slide8';
import { Slide9 } from '@/components/slides/Slide9';
import { Slide10 } from '@/components/slides/Slide10';
import { Slide11 } from '@/components/slides/Slide11';

const Index = () => {
  const slides = [
    <Slide1 key="slide1" />,
    <Slide2 key="slide2" />,
    <Slide3 key="slide3" />,
    <Slide4 key="slide4" />,
    <Slide5 key="slide5" />,
    <Slide6 key="slide6" />,
    <Slide7 key="slide7" />,
    <Slide8 key="slide8" />,
    <Slide9 key="slide9" />,
    <Slide10 key="slide10" />,
    <Slide11 key="slide11" />,
  ];

  return <Presentation slides={slides} />;
};

export default Index;
