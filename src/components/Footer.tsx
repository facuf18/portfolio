import { Box, Text, Container, HStack, Image, Link } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      bgColor='blackAlpha.900'
      w='100%'
      h='auto'
      borderTop='1px'
      borderTopColor='orange.500'
    >
      <Container maxWidth='1400px' margin='auto'>
        <HStack justify='center' align='center' gap={20} py={2}>
          <Text fontSize='larger' fontWeight='bold' color='whiteAlpha.800'>
            Facundo Faccioli
          </Text>
          <HStack gap={3}>
            <Link
              href='https://www.linkedin.com/in/facundofaccioli/'
              isExternal={true}
            >
              <Image
                src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
                w={6}
                h={6}
              />
            </Link>
            <Link href='https://github.com/facuf18' isExternal={true}>
              <Image
                src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
                w={6}
                h={6}
              />
            </Link>
            <Link href='mailto:facufaccioli18@gmail.com' isExternal={true}>
              <Image
                src='https://camo.githubusercontent.com/e1fb4ce58fc1074489bdbdacd0c175ffa7cbd1182ecb3ac4cb77ea8b8271288f/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676d61696c2f676d61696c2d69636f6e2e737667'
                w={8}
                h={8}
              />
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}

export default Footer;
