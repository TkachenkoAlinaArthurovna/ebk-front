import * as React from 'react';
import CategoryBlock from '@/app/ui/Homepage/CategoryBlock';
import InfoBlock from '@/app/ui/Homepage/InfoBlock';
import Tabs from '@/app/ui/Tabs';
import MainSlider from '@/app/ui/Homepage/MainSlider';
import ReviewsBlock from '@/app/ui/Homepage/ReviewsBlock/';

export default function Home() {
  return (
    <main>
      <MainSlider />
      <CategoryBlock />
      <InfoBlock />
      <Tabs />
      {/* <ReviewsBlock /> */}
    </main>
  );
}
