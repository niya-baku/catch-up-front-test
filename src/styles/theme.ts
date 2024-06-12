import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const lightTheme = {
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'black',
      },
    },
  },
};

const darkTheme = {
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white',
      },
    },
  },
};

const theme = (isDarkMode: boolean) =>
  extendTheme({
    ...config,
    ...(isDarkMode ? darkTheme : lightTheme),
  });

export default theme;