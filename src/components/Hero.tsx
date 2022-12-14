import {
  Box,
  Text,
  Container,
  HStack,
  Image,
  VStack,
  Heading,
  Button,
  Link,
  Stack,
} from '@chakra-ui/react';
import pic from '../assets/pic.jpg';
import { DownloadIcon } from '@chakra-ui/icons';
import Technologies from './Technologies';

function Hero() {
  return (
    <Box
      bgGradient='linear(to-b, orange.100, orange.200)'
      w='100%'
      id='hero'
      paddingBottom={{ base: '12', md: '20' }}
    >
      <Container maxWidth='950px' margin='auto' paddingTop={24}>
        <Stack
          mt={12}
          justify='space-between'
          align='center'
          h='auto'
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: '10', lg: '0' }}
        >
          <Box>
            <Image
              width={{ base: '200px', md: '280px' }}
              height='auto'
              objectFit='fill'
              src={pic}
              alt='Facundo Faccioli'
              borderRadius='10px'
              shadow='dark-lg'
            />
          </Box>
          <VStack align={{ base: 'center', lg: 'flex-start' }} gap={10}>
            <VStack
              align={{ base: 'center', lg: 'flex-start' }}
              justify='center'
            >
              <Heading
                color='orange.500'
                size='3xl'
                textAlign={{ base: 'center', lg: 'start' }}
              >
                Hello, I'm Facundo.
              </Heading>
              <Text
                fontSize='lg'
                width={{ base: '300px', lg: '400px' }}
                m={0}
                textAlign={{ base: 'center', lg: 'start' }}
              >
                FullStack Developer with formation in JavaScript, React, Redux,
                Node.js and many other technologies.
              </Text>
            </VStack>
            <VStack align={{ base: 'center', lg: 'flex-start' }} gap={2}>
              <HStack
                gap={3}
                wrap='wrap'
                justify={{ base: 'center', lg: 'flex-start' }}
              >
                <Link
                  href='https://www.linkedin.com/in/facundofaccioli/'
                  isExternal={true}
                >
                  <Image
                    src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
                    w={10}
                    h={10}
                  />
                </Link>
                <Link href='https://github.com/facuf18' isExternal={true}>
                  <Image
                    src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
                    w={10}
                    h={10}
                  />
                </Link>
                <Link href='mailto:facufaccioli18@gmail.com' isExternal={true}>
                  <Image
                    src='https://camo.githubusercontent.com/e1fb4ce58fc1074489bdbdacd0c175ffa7cbd1182ecb3ac4cb77ea8b8271288f/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676d61696c2f676d61696c2d69636f6e2e737667'
                    w={12}
                    h={12}
                  />
                </Link>
                <Link href='https://wa.me/3564646349' isExternal={true}>
                  <Image
                    src='https://es.logodownload.org/wp-content/uploads/2018/10/whatsapp-logo-11.png'
                    w={10}
                    h={10}
                  />
                </Link>
              </HStack>
              <Link
                href='https://drive.google.com/file/d/1MnyRV6aH0vEITIUji67-7V09A1H8eRYz/view?usp=sharing'
                isExternal
                _hover={{ textDecoration: 'none' }}
              >
                <Button
                  variant='solid'
                  colorScheme='orange'
                  rightIcon={<DownloadIcon />}
                >
                  Download CV
                </Button>
              </Link>
            </VStack>
          </VStack>
        </Stack>
        <Technologies />
      </Container>
    </Box>
  );
}

export default Hero;
