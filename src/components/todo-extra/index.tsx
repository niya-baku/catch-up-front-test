import { useStore } from "@/store/todo-extra";
import {
  Badge,
  Button,
  Card,
  Flex,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

export const TodoListExtra = () => {
  const {
    todos,
    inputValue,
    filter,
    addTodo,
    removeTodo,
    toggleTodo,
    setFilter,
    setInputValue,
    reset
  } = useStore();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

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
          onClick={() => setFilter("all")}
          variant={filter === "all" ? "solid" : "outline"}
          color={filter === "all" ? "black" : "white"}
        >
          All
        </Button>
        <Button
          onClick={() => setFilter("active")}
          variant={filter === "active" ? "solid" : "outline"}
          color={filter === "active" ? "black" : "white"}
        >
          Active
        </Button>
        <Button
          onClick={() => setFilter("completed")}
          variant={filter === "completed" ? "solid" : "outline"}
          color={filter === "completed" ? "black" : "white"}
        >
          Completed
        </Button>
      </Flex>
      <VStack as="ul" listStyleType="none" p="10" w="100%" spacing="0">
        {filteredTodos.map((todo) => (
          <Card key={todo.id} w="100%" p={4}>
            <Flex alignItems="center">
              <Text
                onClick={() => toggleTodo(todo.id)}
                textDecoration={todo.completed ? "line-through" : "none"}
                cursor="pointer"
                flex="1"
              >
                {todo.text}
              </Text>
              <Button
                onClick={() => removeTodo(todo.id)}
                colorScheme="red"
                mr={5}
              >
                Delete
              </Button>
              <Badge colorScheme={todo.completed ? "green" : "blue"}>
                {todo.completed ? "Completed" : "Active"}
              </Badge>
            </Flex>
          </Card>
        ))}
      </VStack>
    </>
  );
};