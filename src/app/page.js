'use client'

import React from 'react';
import NavMenu from './components/NavMenu';
import { PlantSection } from './components/PlantsSection';

export default function Home() {
  return (
    <div>
      {/* <NavMenu/> */}
      Welcome to Plantopedia
      <PlantSection></PlantSection>
    </div>
  );
}
