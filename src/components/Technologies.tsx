import { HStack, Image } from '@chakra-ui/react';

function Technologies() {
  return (
    <HStack gap={5} mt={20} justify='center' wrap='wrap'>
      <Image
        src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
        alt='javascript'
        w={12}
      />
      <Image
        src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg'
        alt='node'
        w={12}
      />
      <Image
        src='https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg'
        alt='express'
        w={12}
      />
      <Image
        src='https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg'
        alt='psql'
        w={12}
      />
      <Image
        src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
        alt='react'
        w={12}
      />
      <Image
        src='https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg'
        alt='redux'
        w={12}
      />
      <Image
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png'
        alt='tailwind'
        w={12}
      />
      <Image
        src='https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logo-colored@2x.png?raw=true'
        alt='chakra'
        w={16}
      />
    </HStack>
  );
}

export default Technologies;
