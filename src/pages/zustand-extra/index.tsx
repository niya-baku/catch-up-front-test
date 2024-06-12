import React from "react";
import { VStack, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import { TodoListExtra } from "@/components/todo-extra";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'

const Page: NextPage = () => {
  return (
    <VStack maxW="500px" mx="auto" p="20px" textAlign="center" spacing="20px">
      <Heading as="h1" size="lg">
        Todo List EXTRA
        <IconButton
          ml={5}
          colorScheme={'cyan'}
          aria-label='switch theme'
          icon={<MoonIcon />}
          onClick={() => null}
        />
      </Heading>
      <TodoListExtra />
    </VStack>
  );
};

export default Page;