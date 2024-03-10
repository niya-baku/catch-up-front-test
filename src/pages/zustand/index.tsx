import React from "react";
import { VStack, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import { TodoList } from "@/components/todo";

const Page: NextPage = () => {
  return (
    <VStack maxW="500px" mx="auto" p="20px" textAlign="center" spacing="20px">
      <Heading as="h1" size="lg">
        Todo List
      </Heading>
      <TodoList />
    </VStack>
  );
};

export default Page;