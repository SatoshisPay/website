import * as React from 'react';
import Link from './Link';

interface Props {
  children: React.ReactNode;
  title: React.ReactNode;
}

const Submenu = ({ children, title }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      // Rimuovi l'event listener quando il componente viene smontato
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      className="relative h-full sm:w-full"
      onClick={() => setIsOpen(!isOpen)}
    >
      <Link.NavLink onClick={toggleMenu}>{title}</Link.NavLink>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute sm:relative left-0 sm:left-auto top-[80px] sm:top-auto bg-brand shadow-lg sm:shadow-none h-fit w-[300px] sm:w-full px-2 sm:animate__animated sm:animate__faster sm:animate__slideInDown z-10"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Submenu;
