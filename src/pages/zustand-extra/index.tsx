import React from "react";
import { VStack, Heading, Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { TodoListExtra } from "@/components/todo-extra";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { useThemeStore } from "@/store/todo-extra";
import { IconButton } from '@chakra-ui/react'

const Page: NextPage = () => {
  const { isDarkMode, toggleTheme } = useThemeStore()
  return (
    <VStack maxW="500px" mx="auto" p="20px" textAlign="center" spacing="20px">
      <Heading as="h1" size="lg">
        Todo List EXTRA
        <IconButton
          ml={5}
          colorScheme={isDarkMode ? 'cyan' : 'orange'}
          aria-label='switch theme'
          icon={isDarkMode ? <MoonIcon /> : <SunIcon />}
          onClick={toggleTheme}
        />
      </Heading>
      <TodoListExtra />
    </VStack>
  );
};

export default Page;