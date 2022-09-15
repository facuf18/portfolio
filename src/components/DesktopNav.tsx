import { Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-scroll';

function DesktopNav() {
  return (
    <HStack>
      <Button variant='nav-link'>
        <Link
          activeClass='active'
          to='hero'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Home
        </Link>
      </Button>
      <Button variant='nav-link'>
        <Link
          to='projects'
          spy={true}
          smooth={true}
          offset={-85}
          duration={500}
        >
          Projects
        </Link>
      </Button>
      <Button variant='nav-link'>
        <Link to='about' spy={true} smooth={true} offset={-85} duration={500}>
          About me
        </Link>
      </Button>
      <Button variant='nav-link'>
        <Link to='contact' spy={true} smooth={true} offset={-85} duration={500}>
          Contact
        </Link>
      </Button>
    </HStack>
  );
}

export default DesktopNav;
