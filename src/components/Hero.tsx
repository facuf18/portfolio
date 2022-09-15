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
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: '10', md: '0' }}
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
          <VStack align={{ base: 'center', md: 'flex-start' }} gap={10}>
            <VStack
              align={{ base: 'center', md: 'flex-start' }}
              justify='center'
            >
              <Heading
                color='orange.500'
                size='3xl'
                textAlign={{ base: 'center', md: 'start' }}
              >
                Hello, I'm Facundo.
              </Heading>
              <Text
                fontSize='lg'
                width='400px'
                m={0}
                textAlign={{ base: 'center', md: 'start' }}
              >
                FullStack Developer with formation in JavaScript, React, Redux,
                Node.js and many other technologies.
              </Text>
            </VStack>
            <HStack gap={3}>
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
              <Link
                href='https://drive.google.com/file/d/1MnyRV6aH0vEITIUji67-7V09A1H8eRYz/view?usp=sharing'
                isExternal
              >
                <Button
                  variant='solid'
                  colorScheme='orange'
                  rightIcon={<DownloadIcon />}
                >
                  CV
                </Button>
              </Link>
            </HStack>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Hero;
