import { Button, VStack, Divider } from '@chakra-ui/react';
import { Link } from 'react-scroll';

type Props = {
  onToggle: VoidFunction;
};

function MobileNav({ onToggle }: Props) {
  return (
    <VStack pt={2}>
      <Button variant='nav-link' onClick={onToggle}>
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
      <Divider />
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
      <Divider />
      <Button variant='nav-link'>
        <Link to='about' spy={true} smooth={true} offset={-85} duration={500}>
          About me
        </Link>
      </Button>
      <Divider />
      <Button variant='nav-link'>
        <Link to='contact' spy={true} smooth={true} offset={-85} duration={500}>
          Contact
        </Link>
      </Button>
    </VStack>
  );
}

export default MobileNav;
