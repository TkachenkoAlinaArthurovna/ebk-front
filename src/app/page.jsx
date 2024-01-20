import * as React from 'react';
import CategoryBlock from '@/app/ui/Homepage/CategoryBlock/CategoryBlock';
import InfoBlock from '@/app/ui/Homepage/InfoBlock';
import Tabs from '@/app/ui/Tabs';

export default function Home() {
  return (
    <main>
      <CategoryBlock />
      <InfoBlock />
      <Tabs />
    </main>
  );
}
