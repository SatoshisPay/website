import * as React from 'react';
import * as Icon from 'react-feather';

import HeroDs from '../../../reusable/Hero';
import Parallax from '../../../reusable/Parallax';
import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';
import Paragraph from '../../../reusable/Paragraph';
import Card from './Card';
import Link from '../../../reusable/Link';
import { Route } from '@/src/js/utils/routes';
import AppBadge from '../../../reusable/AppBadge';

const Hero = () => {
  return (
    <HeroDs>
      <Parallax
        image={'/img/hero-bg.webp'}
        className="w-screen min-h-screen h-auto"
      >
        <Container.Flex className="text-white bg-brand/40 min-h-screen h-full justify-center items-center py-24 sm:py-4 m-auto w-full text-center">
          <Container.FlexCols className="gap-8 w-page">
            <Container.FlexCols>
              <Heading.H1 className="text-3xl sm:text-2xl text-white">
                SatoshisPay
              </Heading.H1>
              <Paragraph.Center className="!text-2xl sm:text-xl text-white font-bold">
                Accetta pagamenti in Bitcoin nella tua attività
              </Paragraph.Center>

              <span className="text-white text-2xl sm:text-xl py-2 block text-center font-bold">
                Perché SatoshisPay?
              </span>

              <Container.Container className="grid grid-cols-3 sm:grid-cols-1 gap-8">
                <Card title={'Fiscalità sotto controllo'}>
                  <Paragraph.Center>
                    Abbiamo sviluppato SatoshisPay con la consulenza di un
                    commercialista, per garantire la{' '}
                    <strong>massima sicurezza fiscale</strong>. SatoshisPay
                    offre tutte le funzionalità necessarie per gestire il fisco
                    in materia di <strong>Critpovalute</strong>.
                  </Paragraph.Center>
                </Card>
                <Card title={'Zero Commissioni'}>
                  <>
                    <Paragraph.Center>
                      <strong>Nessuna commissione</strong> di transazione,
                      nessuna commissione di gestione*.
                    </Paragraph.Center>
                    <Paragraph.Center className="text-xs text-text">
                      *Solo nel caso il ricevente non abbia nel wallet una
                      quantità di bitcoin uguale o maggiore all&apos;importo, è
                      prevista una commissione del 0.4% sull&apos;importo
                      ricevuto, con un minimo di 2500 sats,
                    </Paragraph.Center>
                  </>
                </Card>
                <Card title={'Open Source e No-Profit'}>
                  <Container.FlexCols className="items-center justify-center">
                    <Paragraph.Center>
                      La nostra app è <strong>open-source</strong>: chiunque può
                      leggere il nostro codice e verificare che cosa fa la
                      nostra app con i soldi degli utenti.
                    </Paragraph.Center>
                    <Link.Button
                      href="https://github.com/SatoshisPay/satoshispay"
                      target="_blank"
                      className="bg-gray-900"
                    >
                      <Icon.GitHub className="inline mr-2" size={24} />
                      GitHub
                    </Link.Button>
                  </Container.FlexCols>
                </Card>
              </Container.Container>
              <Container.FlexCols className="items-center justify-center mt-4">
                <Link.Button
                  className="shadow-xl text-xl"
                  href={Route.url(Route.GET_STARTED)}
                >
                  Comincia ad accettare Bitcoin adesso
                </Link.Button>
              </Container.FlexCols>
              <AppBadge containerClassName="mt-8 w-full flex flex-row gap-4 items-center justify-center" />
            </Container.FlexCols>
          </Container.FlexCols>
        </Container.Flex>
      </Parallax>
    </HeroDs>
  );
};

export default Hero;
