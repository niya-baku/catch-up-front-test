import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useThemeStore } from "@/store/todo-extra";
import { useEffect, useState } from "react";
import theme from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  const { isDarkMode } = useThemeStore();
  const [currentTheme, setCurrentTheme] = useState(theme(true));

  useEffect(() => {
    setCurrentTheme(theme(isDarkMode));
  }, [isDarkMode]);

  return (
    <ChakraProvider theme={currentTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

