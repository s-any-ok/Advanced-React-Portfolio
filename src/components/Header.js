import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { Box, HStack } from '@chakra-ui/react';

const socials = [
  {
    icon: faEnvelope,
    url: 'mailto: sashavytvyckyj@gmail.com',
  },
  {
    icon: faGithub,
    url: 'https://github.com/s-any-ok',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/oleksandr-levak-49a134161/',
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const headerRef = useRef(null);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current) {
        headerRef.current.style.transform = 'translateY(-200px)';
      } else {
        headerRef.current.style.transform = 'translateY(0)';
      }
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <Box
      position='fixed'
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty='transform'
      transitionDuration='.3s'
      transitionTimingFunction='ease-in-out'
      backgroundColor='#18181b'
      ref={headerRef}
    >
      <Box color='white' maxWidth='1280px' margin='0 auto'>
        <HStack
          px={16}
          py={4}
          justifyContent='space-between'
          alignItems='center'
        >
          <nav>
            <HStack spacing={8}>
              {socials.map(({ icon, url }) => (
                <a
                  key={url}
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon icon={icon} size='2x' key={url} />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href='#projects' onClick={handleClick('projects')}>
                Projects
              </a>
              <a href='#skills' onClick={handleClick('contactme')}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
