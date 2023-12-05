import * as React from 'react';
import Script from 'next/script';
import type { Metadata } from 'next';

import BtcMap from '@/src/js/components/shared/BtcMap';
import Container from '@/src/js/components/reusable/Container';

const TITLE = 'Mappa dei commercianti | SatoshisPay';
const DESCRIPTION =
  'Mappa con i commercianti che accettano Bitcoin e Lightning Network in Italia e nel mondo.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL('https://satoshispay.app/map'),
  alternates: {
    canonical: 'https://satoshispay.app/map',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'SatoshisPay',
  },
};

const MapPage = () => {
  return (
    <>
      <Script
        async
        src="https://analytics.veeso.dev/script.js"
        data-website-id="b4343ca0-5b4d-425b-984a-3aad3b411a02"
      />
      <Container.Container className="map-screen">
        <BtcMap className="w-full h-full" width={'auto'} height={'auto'} />
      </Container.Container>
    </>
  );
};

export default MapPage;
