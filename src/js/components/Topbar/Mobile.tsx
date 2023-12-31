import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import * as Icon from 'react-feather';
import Image from 'next/image';

import Container from '../reusable/Container';
import { Route } from '../../utils/routes';
import Link from './Link';

import BurgerMenu from './BurgerMenu';

import Logo from '../../../assets/images/logo-alt.webp';
import Socials from './Socials';
import Hr from '../reusable/Hr';
import Submenu from './Submenu';

const Mobile = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [lastPathname, setLastPathname] = React.useState(pathname);
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrollPosition, setScrollPosition] = React.useState({ x: 0, y: 0 });

  const scrollingProps =
    scrollPosition.y > 0 || pathname !== '/'
      ? 'bg-brand shadow-lg'
      : 'bg-transparent';

  const goHome = () => {
    router.push(Route.url(Route.HOME));
  };

  const handleScroll = () => {
    setScrollPosition({ x: window.scrollX, y: window.scrollY });
  };

  React.useEffect(() => {
    setLastPathname(pathname);

    if (pathname !== lastPathname) {
      setIsOpen(false);
    }
  }, [pathname, lastPathname]);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      if (typeof window === 'undefined') return;
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${scrollingProps} h-[80px] z-50 items-center hidden sm:flex left-0 gap-4 justify-start py-2 px-8 fixed top-0 w-full`}
    >
      <Container.Flex className="flex-1">
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
      <BurgerMenu isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)}>
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
            to={Route.url(Route.WHITEPAPER)}
          >
            Whitepaper
          </Link.RouterLink>
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
            href={'https://github.com/SatoshisPay/satoshispay'}
            target="_blank"
          >
            <Icon.GitHub className="inline mr-2" size={24} />
            GitHub
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
        <Link.RouterLink to={Route.url(Route.MAP)}>
          <Icon.MapPin className="inline mr-2" size={24} />
          Dove spendere
        </Link.RouterLink>
        <Hr />
        <Socials />
      </BurgerMenu>
    </div>
  );
};

export default Mobile;
