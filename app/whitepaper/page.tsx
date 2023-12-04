import * as React from 'react';
import Script from 'next/script';
import type { Metadata } from 'next';

import Page from '@/src/js/components/reusable/Page';
import Heading from '@/src/js/components/reusable/Heading';
import Paragraph from '@/src/js/components/reusable/Paragraph';
import Container from '@/src/js/components/reusable/Container';
import Step from '@/src/js/components/pages/Whitepaper/Step';

const TITLE = 'whitepaper | SatoshisPay';
const DESCRIPTION =
  'La roadmap di SatoshisPay, quali sono i nostri obiettivi. Project mission di SatoshisPay. Come contribuire a SatoshisPay.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL('https://satoshispay.app/whitepaper'),
  robots: 'noindex, nofollow',
  alternates: {
    canonical: 'https://satoshispay.app/whitepaper',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'SatoshisPay',
  },
};

const RoadmapPage = () => {
  return (
    <>
      <Script
        async
        src="https://analytics.veeso.dev/script.js"
        data-website-id="b4343ca0-5b4d-425b-984a-3aad3b411a02"
      />
      <Page.BlankPage>
        <Page.Body>
          <Heading.H1 className="mb-4">Whitepaper</Heading.H1>
          <Heading.H2 className="mb-4">Project Mission</Heading.H2>
          <Container.Container>
            <Heading.H3>Scopo</Heading.H3>
            <Paragraph.Leading>
              SatoshisPay è un&apos;applicazione per Android e iOS con
              l&apos;obiettivo di fornire ai commercianti Italiani uno strumento
              di pagamento semplice, sicuro e veloce per accettare pagamenti in
              Bitcoin dai loro clienti.
            </Paragraph.Leading>
            <Heading.H3>Accessibilità</Heading.H3>
            <Paragraph.Leading>
              SatoshisPay è focalizzato sulla semplicità di utilizzo, sia per il
              commerciante che per i suoi dipendenti. Uno dei grandi limiti
              all&apos;adozione di Bitcoin tra i commercianti in Italia è
              proprio che anche in caso si riesca a convincere il titolare del
              negozio, spesso i suoi dipendenti non sono in grado di utilizzare
              Bitcoin per ricevere pagamenti dai clienti. Per questo motivo,
              SatoshisPay è pensata per avere un training semplice, come quello
              di alcuni POS attualmente in commercio (vedi SumUp).
            </Paragraph.Leading>
            <Heading.H3>Sicurezza</Heading.H3>
            <Paragraph.Leading>
              SatoshisPay è un&apos;app che viene installata dal proprietario di
              un&apos;attività su un dispositivo condiviso tra i dipendenti
              dell&apos;attività. Per questo motivo, è fondamentale che i
              dipendenti possano accettare pagamenti in Bitcoin senza rischiare
              di perdere i fondi ricevuti o che questi vengano rubati dagli
              stessi (sì, questa cosa succede più di quanto ci si immagini). Per
              questo motivo, SatoshisPay deve fornire un&apos;esperienza di
              utilizzo senza protezioni per le operazioni di pagamento dei
              clienti e con protezioni per le operazioni di prelievo dei fondi.
            </Paragraph.Leading>
            <Heading.H3>Fiscalità</Heading.H3>
            <Paragraph.Leading>
              Uno dei limiti delle app di pagamento in Bitcoin attualmente in
              circolazione è spesso la mancanza di strumenti in-app per aiutare
              i commercianti ad essere in regola con il fisco italiano. Per
              questo SatoshisPay collabora con i commercialisti per poter
              fornire alle attività tutti gli strumenti semplificati per essere
              in regola con il fisco.
            </Paragraph.Leading>
            <Heading.H3>Uno standard nazionale</Heading.H3>
            <Paragraph.Leading>
              Vogliamo che SatoshisPay diventi uno standard nazionale per il POS
              in Bitcoin.
            </Paragraph.Leading>
            <Heading.H3>Open-Source</Heading.H3>
            <Paragraph.Leading>
              Inoltre, SatoshisPay è un progetto open source, questo significa
              che chiunque può contribuire al suo sviluppo. Per questo motivo,
              la roadmap è pubblica e visibile a tutti. Chiunque può
              spontaneamente unirsi al progetto e contribuire al suo sviluppo.
            </Paragraph.Leading>
          </Container.Container>
          <Heading.H2>Roadmap</Heading.H2>
          <Container.FlexCols className="gap-4">
            <Step.Step state="done">
              <Step.Title>
                0. Pubblicazione della prima versione sul Play Store
              </Step.Title>
              <Step.Paragraph>
                L&apos;app è disponibile su android
              </Step.Paragraph>
            </Step.Step>
            <Step.Step state="inProgress">
              <Step.Title>
                1. Presentazione ai commercianti locali e prima adozione di
                SatoshisPay
              </Step.Title>
              <Step.Paragraph>
                Il primo step è quello di presentare SatoshisPay ai commercianti
                della nostra regione. Ciò averrà in prima battuta in un primo
                incontro con i commercianti locali il 13 dicembre 2023, i quali
                cominceranno ad utilizzare SatoshisPay per accettare pagamenti
                in Bitcoin dai loro clienti.
              </Step.Paragraph>
            </Step.Step>
            <Step.Step state="todo">
              <Step.Title>2. Lancio della prima versione per iOS</Step.Title>
              <Step.Paragraph>
                Il secondo step è quello di lanciare la prima versione di
                SatoshisPay per iOS. Questo avverrà circa a gennaio 2024.
              </Step.Paragraph>
            </Step.Step>
            <Step.Step state="todo">
              <Step.Title>
                3. Sviluppo di un piano premium per la fiscalità semplificata
              </Step.Title>
              <Step.Paragraph>
                Prevediamo di sviluppare nel corso del 2024 una versione premium
                con un piano a pagamento in-app per la gestione della fiscalità
                semplificata ed eventuali funzioni extra. L&apos; rimarrà
                comunque gratuita ed open-source con almeno le funzionalità
                base.
              </Step.Paragraph>
            </Step.Step>
            <Step.Step state="todo">
              <Step.Title>4. Adozione a livello nazionale</Step.Title>
              <Step.Paragraph>
                Espandiamo l&apos;adozione di SatoshisPay a livello nazionale.
              </Step.Paragraph>
            </Step.Step>
          </Container.FlexCols>
        </Page.Body>
      </Page.BlankPage>
    </>
  );
};

export default RoadmapPage;
