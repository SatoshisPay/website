import * as React from 'react';
import * as Icon from 'react-feather';

import Container from '../../reusable/Container';
import Heading from '../../reusable/Heading';
import Paragraph from '../../reusable/Paragraph';
import Accordion from '../../reusable/Accordion';

import WalletScreenshot from '@/src/assets/images/app-screen-wallet.webp';
import SettingsScreenshot from '@/src/assets/images/app-screen-settings.webp';
import FactoryResetScreenshot from '@/src/assets/images/app-screen-factory.webp';
import HistoryScreenshot from '@/src/assets/images/app-screen-history.webp';
import MoonpayScreenshot from '@/src/assets/images/app-screen-moonpay.webp';
import BuyBitcoinScreenshot from '@/src/assets/images/app-screen-btc-providers.webp';

import Device from '../../reusable/Device';
import Donate from '../../shared/Donate';

const Faq = () => (
  <Container.FlexCols className="gap-8">
    <Container.FlexCols>
      <Heading.H1>Domande frequenti</Heading.H1>
      <Paragraph.Center className="text-lg">
        Trova una risposta alle tue domande.
      </Paragraph.Center>
    </Container.FlexCols>
    <Container.FlexCols className="gap-4">
      <Container.Container className="border-t border-gray-200 p-2">
        <Accordion
          title={
            <Heading.H2 className="text-xl pt-4">
              Quali sono le commissioni per il venditore su SatoshisPay?
            </Heading.H2>
          }
        >
          <Paragraph.Leading>
            SatoshisPay non applica <strong>nessuna commissione</strong> sulle
            transazioni.
            <br />
            Le uniche commissioni in cui il venditore può incorrere sono quelle
            legate alla creazione di un channel Lightning Network.
          </Paragraph.Leading>
          <Heading.H3>Quando viene creato un channel?</Heading.H3>
          <Paragraph.Default>
            Un channel viene creato ogni qualvolta che il ricevente del
            pagamento, sta richiedendo un pagamento di un importo superiore a
            quello presente sul suo wallet Lightning Network, ovvero il wallet
            in-app.
          </Paragraph.Default>
          <Heading.H3>
            Perché se viene creato un nuovo channel vengono applicate delle
            commissioni?
          </Heading.H3>
          <Paragraph.Default>
            Il protocollo <strong>Lightning Network</strong> prevede che tra due
            utenti che effettuano transazioni, ci dev&apos;essere da entrambe le
            parti la liquidità necessaria per effettuare il pagamento. Nel caso
            questa non sia presente sarà anticipata da <strong>Breez</strong>,
            il nostro partner per la gestione dei nodi Lightning Network, il
            quale si prenderà una commissione.
          </Paragraph.Default>
          <Heading.H3>
            A quanto ammonta la commissione in caso di creazione del channel?
          </Heading.H3>
          <Paragraph.Default>
            In caso sia necessaria la creazione di un canale, viene applicata
            una commissione del <strong>0.4%</strong> sull&apos;importo
            ricevuto, con un minimo di <strong>2500 sats</strong>.
          </Paragraph.Default>
          <Heading.H3>
            Come posso evitare il pagamento delle commissioni?
          </Heading.H3>
          <Paragraph.Default>
            Per evitare il pagamento di commissioni sarà sufficiente depositare
            tramite la pagina <strong>Wallet</strong> -{' '}
            <strong>Deposito</strong> una quantità di Bitcoin sufficienti a
            coprire gli importi che si vogliono ricevere.
          </Paragraph.Default>
        </Accordion>
      </Container.Container>
      <Container.Container className="border-t border-gray-200 p-2">
        <Accordion
          title={
            <Heading.H2 className="text-xl pt-4">
              Come prelevo o pago utilizzando i miei Bitcoin?
            </Heading.H2>
          }
        >
          <Container.Flex className="flex-row sm:flex-col-reverse">
            <Container.Container className="flex-1">
              <Device.IPhone alt="wallet screenshot" image={WalletScreenshot} />
            </Container.Container>
            <Container.Container className="flex-1">
              <Paragraph.Leading>
                Per prelevare o fare pagamenti in Bitcoin dall&apos;app
                satoshispay ad un portafogli bitcoin esterno, sarà sufficiente
                andare nella pagina <strong>Wallet</strong> -{' '}
                <strong>Invia</strong> e inserire l&apos;indirizzo del
                portafogli esterno e la quantità di Bitcoin che si vuole
                prelevare.
              </Paragraph.Leading>
              <Paragraph.Leading>
                È anche possibile scannerizzare un codice QR di un indirizzo{' '}
                <strong>Bitcoin</strong> cliccando sull&apos;icona{' '}
                <Icon.Camera size={24} className="inline" />
              </Paragraph.Leading>
              <Paragraph.Leading>
                Una volta inseriti tutti i dati necessari al prelievo, premi
                &quot;Preleva&quot; e successivamente inserisci{' '}
                <strong>il PIN segreto</strong>.
              </Paragraph.Leading>
              <Paragraph.Leading>
                Una volta inviata la richiesta di prelievo vedrai il tuo
                prelievo nella lista dei prelievi{' '}
                <strong>Storico prelievi</strong> visibile sotto al form con lo
                stato del prelievo, la data dell&apos;operazione e gli importi
                in Sats e Euro.
              </Paragraph.Leading>
            </Container.Container>
          </Container.Flex>
        </Accordion>
      </Container.Container>
      <Container.Container className="border-t border-gray-200 p-2">
        <Accordion
          title={
            <Heading.H2 className="text-xl pt-4">
              {' '}
              Come ripristino SatoshisPay?
            </Heading.H2>
          }
        >
          <Container.FlexCols className="gap-4">
            <Container.Flex className="flex-row sm:flex-col-reverse">
              <Container.Container className="flex-1">
                <Device.IPhone
                  alt="settings screenshot"
                  image={SettingsScreenshot}
                />
              </Container.Container>
              <Container.FlexCols className="flex-1 items-center justify-center">
                <Paragraph.Leading>
                  In caso fosse necessario ripristinare l&apos;app SatoshisPay,
                  come per esempio in caso di smarrimento del PIN per effetuare
                  prelievi o compromissione della sicurezza, sarà sufficiente
                  andare nella pagina <strong>Impostazioni</strong> cliccando
                  sull&apos;icona{' '}
                  <Icon.MoreVertical size={24} className="inline" />.
                </Paragraph.Leading>
                <Paragraph.Leading>
                  Quindi cliccare su{' '}
                  <Icon.AlertTriangle className="inline mr-2" />
                  <strong>Ripristino App</strong> cliccando sull&apos;icona{' '}
                </Paragraph.Leading>
              </Container.FlexCols>
            </Container.Flex>
            <Container.Flex className="flex-row sm:flex-col-reverse">
              <Container.Container className="flex-1">
                <Device.IPhone
                  alt="factory reset screenshot"
                  image={FactoryResetScreenshot}
                />
              </Container.Container>
              <Container.FlexCols className="flex-1 items-center justify-center">
                <Paragraph.Leading>
                  A questo punto verrà chiesto di confermare il ripristino.
                </Paragraph.Leading>
                <Paragraph.Leading>
                  Una volta confermato il ripristino, l&apos;app verrà
                  ripristinata e verrai reindirizzato alla pagina di
                  configurazione dell&apos;app. A questo punto potrai scegliere
                  se ripristinare il <strong>wallet</strong> da un backup o
                  creare un nuovo wallet.
                </Paragraph.Leading>
              </Container.FlexCols>
            </Container.Flex>
          </Container.FlexCols>
        </Accordion>
      </Container.Container>
      <Container.Container className="border-t border-gray-200 p-2">
        <Accordion
          title={
            <Heading.H2 className="text-xl pt-4">
              Ho perso il PIN per effettuare i prelievi, come faccio?
            </Heading.H2>
          }
        >
          <Container.Container>
            <Paragraph.Leading>
              In caso di smarrimento del PIN, l&apos;unico modo per recuperare i
              fondi in app, sarà quello di ripristinare l&apos;app SatoshisPay.
            </Paragraph.Leading>
            <Paragraph.Leading>
              Leggi di più nella sezione{' '}
              <strong>Come ripristino SatoshisPay?</strong>.
            </Paragraph.Leading>
          </Container.Container>
        </Accordion>
      </Container.Container>
      <Container.Container className="border-t border-gray-200 p-2">
        <Accordion
          title={
            <Heading.H2 className="text-xl pt-4">
              Ho per sbaglio accettato una transazione poi cancellata. Come la
              rimuovo dalla cronologia?
            </Heading.H2>
          }
        >
          <Paragraph.Leading>
            La transazione risulterà in attesa per 24 ore, al termine delle
            quali, se non avrà effettivamente ricevuto un incasso, verrà
            cancellata automaticamente dall&apos;app.
          </Paragraph.Leading>
        </Accordion>
      </Container.Container>
      <Container.Container className="border-t border-gray-200 p-2">
        <Accordion
          title={
            <Heading.H2 className="text-xl pt-4">
              Come faccio ad esportare le transazioni?
            </Heading.H2>
          }
        >
          <Paragraph.Leading>
            Per esportare le transazioni, sarà sufficiente andare nella pagina{' '}
            <strong>&quot;Transazioni&quot;</strong> cliccando sull&apos; icona{' '}
            <Icon.Clock size={24} className="inline" />. Da qui sarà possibile
            selezionare le date di inizio e fine periodo per cui si vogliono
            esportare le transazioni. Quindi cliccare su{' '}
            <strong>&quot;Scarica CSV&quot;</strong>e verrà scaricato un file
            CSV con tutte le transazioni del periodo selezionato nella cartella{' '}
            <strong>Download</strong> del vostro dispositivo.
          </Paragraph.Leading>
          <Device.IPhone alt="wallet screenshot" image={HistoryScreenshot} />
        </Accordion>
      </Container.Container>
      <Container.Container className="border-t border-gray-200 p-2">
        <Accordion
          title={
            <Heading.H2 className="text-xl pt-4">
              È possibile acquistare Bitcoin direttamente da SatoshisPay?
            </Heading.H2>
          }
        >
          <Container.Container>
            <Container.FlexCols className="gap-8">
              <Container.Flex className="flex-row sm:flex-col-reverse">
                <Container.Container className="flex-1">
                  <Device.IPhone
                    alt="settings screenshot"
                    image={SettingsScreenshot}
                  />
                </Container.Container>
                <Paragraph.Leading className="flex-1">
                  Sì, è possibile acquistare Bitcoin direttamente da
                  SatoshisPay. Per farlo è sufficiente recarsi nella pagina{' '}
                  <strong>
                    <Icon.MoreVertical className="inline" />
                    Altro
                  </strong>{' '}
                  e cliccare su <strong>Acquista Bitcoin</strong>.
                </Paragraph.Leading>
              </Container.Flex>
              <Container.Flex className="flex-row sm:flex-col-reverse">
                <Container.Container className="flex-1">
                  <Device.IPhone
                    alt="buy bitcoin screenshot"
                    image={BuyBitcoinScreenshot}
                  />
                </Container.Container>
                <Paragraph.Leading className="flex-1">
                  A questo punto verrai reindirizzato alla pagina di selezione
                  della piattaforma da cui acquistare Bitcoin. Clicca su quella
                  che preferisci.
                </Paragraph.Leading>
              </Container.Flex>
              <Container.Flex className="flex-row sm:flex-col-reverse">
                <Container.Container className="flex-1">
                  <Device.IPhone
                    alt="buy bitcoin screenshot"
                    image={MoonpayScreenshot}
                  />
                </Container.Container>
                <Paragraph.Leading className="flex-1">
                  Una volta selezionata la piattaforma, verrai reindirizzato al
                  sito della piattaforma scelta per completare l&apos;acquisto.
                  Una volta completato l&apos;acquisto, i Bitcoin verranno
                  inviati al tuo wallet.
                </Paragraph.Leading>
              </Container.Flex>
            </Container.FlexCols>
          </Container.Container>
        </Accordion>
      </Container.Container>
      <Container.Container className="border-t border-gray-200 p-2">
        <Accordion
          title={
            <Heading.H2 className="text-xl pt-4">
              SatoshisPay è no-custodial?
            </Heading.H2>
          }
        >
          <Container.Container>
            <Paragraph.Leading>
              SatoshisPay è <strong>no-custodial</strong>. Non c&apos;è nessun
              ente terzo che custodisce i tuoi fondi, hai il{' '}
              <strong>pieno controllo</strong> del tuo wallet.
            </Paragraph.Leading>
          </Container.Container>
        </Accordion>
      </Container.Container>
      <Container.Container className="border-t border-gray-200 p-2">
        <Accordion
          title={
            <Heading.H2 className="text-xl pt-4">
              SatoshisPay è gratuita?
            </Heading.H2>
          }
        >
          <Container.Container>
            <Paragraph.Leading>
              SatoshisPay è completamente <strong>gratuita</strong> e{' '}
              <strong>open-source</strong> e lo sarà sempre.
            </Paragraph.Leading>
            <Paragraph.Leading>
              Ti invitiamo però a supportare il progetto con una donazione in
              BTC all&apos;indirizzo:{' '}
              <code>bc1qql247l894ahqvd5affjk69mrf49dcnxg7c0l74</code>
            </Paragraph.Leading>
            <Donate center address />
          </Container.Container>
        </Accordion>
      </Container.Container>
    </Container.FlexCols>
  </Container.FlexCols>
);

export default Faq;
