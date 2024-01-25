import * as React from 'react';
import CategoryBlock from '@/app/ui/Homepage/CategoryBlock/CategoryBlock';
import InfoBlock from '@/app/ui/Homepage/InfoBlock';
import Tabs from '@/app/ui/Tabs';
import MainSlider from '@/app/ui/Homepage/MainSlider/MainSlider';

export default function Home() {
  return (
    <main>
      <MainSlider />
      <CategoryBlock />
      <InfoBlock />
      <Tabs />
    </main>
  );
}
