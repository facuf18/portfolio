import { Box, Heading, Container, VStack, Text } from '@chakra-ui/react';

function About() {
  return (
    <Box
      bgGradient='linear(to-b, orange.200, orange.100)'
      w='100%'
      h='auto'
      pt={10}
      paddingBottom={{ base: '12', md: '20' }}
      id='about'
    >
      <Container maxWidth='1400px' margin='auto'>
        <VStack align='center' gap={6}>
          <Heading color='orange.500' size='3xl' textTransform='uppercase'>
            About me
          </Heading>
          <Box maxWidth='800px'>
            <Text fontSize='xl' align='justify'>
              My name is Facundo Faccioli, and I'm from Devoto, Córdoba,
              Argentina. For many years I had been studying Electromechanical
              Engineering, but in the pandemic I started asking if that was what
              I really want to dedicate my life. Researching and trying new
              things I notice that I really like web development, so in 2021 I
              started with the Frontend Coderhouse courses. In 2022, I decide to
              take in serious this matter and start the Soy Henry's FullStack
              Bootcamp. It was an excelent experience where I had learned most
              of the web development things I know now. At this moment, I am
              looking for my first IT job where I want to prove my knowledge and
              keep learning just to be, every day, a better developer.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default About;
