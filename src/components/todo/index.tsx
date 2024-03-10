import { useStore } from "@/store/todo";
import {
  Badge,
  Button,
  Card,
  Flex,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

export const TodoList = () => {
  const {
    todos,
    inputValue,
    addTodo,
    setInputValue,
  } = useStore();

  return (
    <>
      <Flex alignItems="center" w="100%">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          placeholder="Add a new todo..."
        />
        <Button
          onClick={() => addTodo(inputValue)}
          ml={5}
          p={5}
          colorScheme="teal"
        >
          Add Todo
        </Button>
      </Flex>
      <Flex justifyContent="space-between" w="100%">
        <Button
          onClick={() => null}
        >
          All
        </Button>
        <Button
          onClick={() => null}
        >
          Active
        </Button>
        <Button
          onClick={() => null}
        >
          Completed
        </Button>
      </Flex>
      <VStack as="ul" listStyleType="none" p="0" w="100%" spacing="0">
        {todos.map((todo) => (
          <Card key={todo.id} w="100%" p={4}>
            <Flex alignItems="center">
              <Text
                onClick={() => null}
                cursor="pointer"
                flex="1"
              >
                {todo.text}
              </Text>
              <Button
                onClick={() => null}
                colorScheme="red"
                mr={5}
              >
                Delete
              </Button>
              <Badge>
                Active
              </Badge>
            </Flex>
          </Card>
        ))}
      </VStack>
    </>
  );
};