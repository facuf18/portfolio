import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  components: {
    Button: {
      variants: {
        'nav-link': {
          bg: 'transparent',
          color: 'whiteAlpha.800',
          borderBottom: '2px',
          borderRadius: '0px',
          borderBottomColor: 'transparent',
          _hover: {
            bg: 'transparent',
            color: 'orange.200',
            borderBottom: '2px',
            borderRadius: '0px',
            borderBottomColor: 'orange.200',
          },
        },
      },
    },
  },
});

export default theme;
