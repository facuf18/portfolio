import {
  Button,
  Box,
  Text,
  Container,
  Heading,
  HStack,
  VStack,
  Image,
  Link,
  Stack,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

type Project = {
  id: number;
  name: string;
  img: string;
  repoUrl: string;
  webUrl: string;
  isGroupal: boolean;
};

const projectsArr: Project[] = [
  {
    id: 1,
    name: 'Countries App',
    img: 'https://ucarecdn.com/efb53318-be23-4973-8e86-2b0597beb0f0/countriesapp.png',
    repoUrl: 'https://github.com/facuf18/PI-27c-Countries',
    webUrl: 'https://find-your-country.vercel.app/',
    isGroupal: false,
  },
  {
    id: 2,
    name: 'Play Center',
    img: 'https://ucarecdn.com/0a48c902-c49e-441a-9ca5-157409605c28/playcenter.png',
    repoUrl: '',
    webUrl: 'https://gamer-network-pf.vercel.app/',
    isGroupal: true,
  },
];

function Projects() {
  return (
    <Box
      bgGradient='linear(to-b, orange.200, orange.200)'
      w='100%'
      h='auto'
      pt={10}
      paddingBottom={{ base: '12', md: '20' }}
      id='projects'
    >
      <Container maxWidth='1400px' margin='auto'>
        <VStack align='center' gap={10}>
          <Heading color='orange.500' size='3xl' textTransform='uppercase'>
            Projects
          </Heading>
          <Stack gap={5} direction={{ base: 'column', md: 'row' }}>
            {projectsArr?.length > 0 &&
              projectsArr.map(project => {
                return (
                  <Box
                    key={project.id}
                    maxW={{ base: 'xs', md: 'sm' }}
                    bgColor='orange.100'
                    borderWidth='2px'
                    borderColor='orange.500'
                    borderRadius='lg'
                    overflow='hidden'
                    shadow='lg'
                  >
                    <Image src={project.img} />
                    <VStack mb={3}>
                      <Text
                        fontSize='2xl'
                        fontWeight='bold'
                        color='blackAlpha.800'
                        py={3}
                      >
                        {project.name}
                      </Text>
                      <HStack>
                        {project.repoUrl !== '' ? (
                          <Button
                            rightIcon={<ExternalLinkIcon />}
                            variant='solid'
                            colorScheme='orange'
                          >
                            <Link
                              href={project.repoUrl}
                              isExternal={true}
                              _hover={{ textDecoration: 'none' }}
                            >
                              Repository
                            </Link>
                          </Button>
                        ) : (
                          ''
                        )}
                        <Button
                          rightIcon={<ExternalLinkIcon />}
                          variant='solid'
                          colorScheme='orange'
                        >
                          <Link
                            href={project.webUrl}
                            isExternal={true}
                            _hover={{ textDecoration: 'none' }}
                          >
                            Deploy
                          </Link>
                        </Button>
                      </HStack>
                    </VStack>
                  </Box>
                );
              })}
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
}

export default Projects;
