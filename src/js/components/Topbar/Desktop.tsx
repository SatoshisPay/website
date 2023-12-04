import * as React from 'react';
import * as Icon from 'react-feather';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import Container from '../reusable/Container';
import { Route } from '../../utils/routes';
import Link from './Link';

import Logo from '../../../assets/images/logo-alt.webp';
import Socials from './Socials';
import Submenu from './Submenu';

const Desktop = () => {
  const router = useRouter();

  const goHome = () => {
    router.push(Route.url(Route.HOME));
  };

  return (
    <Container.FlexRow className="sm:hidden fixed bg-brand text-white items-center gap-8 justify-center left-0 py-2 px-1 top-0 w-screen h-[80px] z-40 shadow-lg">
      <Container.FlexRow className="w-page justify-between items-center h-full gap-4">
        <Container.FlexRow>
          <Container.Flex className="items-center px-4">
            <Image
              src={Logo}
              alt="logo"
              className="cursor-pointer"
              loading="eager"
              width={48}
              height={48}
              onClick={goHome}
            />
          </Container.Flex>
          <nav className="flex gap-8 justify-between">
            <Link.RouterLink to={Route.url(Route.HOME)}>
              SatoshisPay
            </Link.RouterLink>
            <Link.RouterLink to={Route.url(Route.GET_STARTED)}>
              <Icon.Flag className="inline mr-2 fill-white" size={24} />
              Inizia da qui
            </Link.RouterLink>
            <Submenu
              title={
                <>
                  <Icon.LifeBuoy className="inline mr-2" size={24} />
                  Aiuto
                </>
              }
            >
              <Link.RouterLink
                className="!py-4 px-4 w-full"
                to={Route.url(Route.FAQ)}
              >
                F.A.Q.
              </Link.RouterLink>
              <Link.RouterLink
                className="!py-4 px-4 w-full"
                to={Route.url(Route.SUPPORT)}
              >
                Supporto
              </Link.RouterLink>
            </Submenu>
            <Submenu
              title={
                <>
                  <Icon.Users className="inline mr-2" size={24} />
                  Il Progetto
                </>
              }
            >
              <Link.RouterLink
                className="!py-4 w-full"
                to={Route.url(Route.ROADMAP)}
              >
                Roadmap
              </Link.RouterLink>
              <Link.NavLink
                className="!py-4  w-full"
                href={'https://github.com/SatoshisPay/satoshispay'}
                target="_blank"
              >
                <Icon.GitHub className="inline mr-2" size={24} />
                GitHub
              </Link.NavLink>
              <Link.NavLink
                className="!py-4  w-full"
                href={'https://t.me/+g-0OoyIPUS0yNWM0'}
                target="_blank"
              >
                <Icon.Send className="inline mr-2" size={24} />
                Gruppo Insiders
              </Link.NavLink>
              <Link.NavLink
                className="!py-4  w-full"
                href={'https://bitcoinmonfalcone.it'}
                target="_blank"
              >
                <Icon.Link className="inline mr-2" size={24} />
                Bitcoin Monfalcone
              </Link.NavLink>
            </Submenu>
          </nav>
        </Container.FlexRow>
        <Container.Flex className="justify-self-end">
          <Socials />
        </Container.Flex>
      </Container.FlexRow>
    </Container.FlexRow>
  );
};

export default Desktop;
