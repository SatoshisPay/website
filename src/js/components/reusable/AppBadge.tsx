import * as React from 'react';
import Image from 'next/image';

import Container from './Container';

import GooglePlayBadge from '@/src/assets/images/it_badge_web_generic.webp';
import ApkBadge from '@/src/assets/images/apk_badge.webp';
// import AppStoreBadge from '@/src/assets/images/appstore.webp';

interface Props {
  containerClassName?: string;
}

const AppBadge = ({ containerClassName }: Props) => (
  <Container.Container className={`${containerClassName}`}>
    <a
      className="block hover:underline text-xl"
      href="https://play.google.com/store/apps/details?id=com.satoshispay&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
      target="_blank"
    >
      <Image
        src={GooglePlayBadge}
        alt="scarica da google play"
        width="200"
        height="100"
      />
    </a>
    <a
      className="block hover:underline text-xl"
      href="https://github.com/SatoshisPay/satoshispay/releases/latest/download/app-release.apk"
      target="_blank"
    >
      <Image
        src={ApkBadge}
        className="border border-gray-400 rounded-lg"
        alt="scarica apk"
        width="200"
        height="100"
      />
    </a>
    {/*
    <a className="block hover:underline text-xl" href="" target="_blank">
      <Image
        src={AppStoreBadge}
        alt="appstore badge"
        width="200"
        height="100"
      />
    </a>
*/}
  </Container.Container>
);

export default AppBadge;
