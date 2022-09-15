import {
  Box,
  HStack,
  Text,
  Container,
  Collapse,
  useBreakpointValue,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

function Navbar() {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      as='header'
      bgColor='blackAlpha.900'
      opacity={0.95}
      w='100%'
      p={6}
      position='fixed'
      borderBottom='1px'
      borderBottomColor='orange.500'
      zIndex={100}
    >
      <Container maxWidth='1400px' margin='auto' color='whiteAlpha.800'>
        <HStack justify='space-between' align='center'>
          <Text fontSize='larger' fontWeight='bold' color='whiteAlpha.800'>
            Facundo Faccioli
          </Text>
          {isDesktop ? (
            <DesktopNav />
          ) : (
            <IconButton
              variant='ghost'
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              aria-label='Open Menu'
            />
          )}
        </HStack>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav onToggle={onToggle} />
        </Collapse>
      </Container>
    </Box>
  );
}

export default Navbar;
