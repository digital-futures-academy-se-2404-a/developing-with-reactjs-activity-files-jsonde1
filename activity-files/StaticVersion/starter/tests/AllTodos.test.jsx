import { render, screen } from "@testing-library/react";
import Todo from "../src/Components/Todo";
import sampleTodos from "../src/sampleTodos.json";
import AllTodos from "../src/Components/AllTodos";

describe("AllTOdo render test", () => {
  test("it should render the correct number of Todo components based on the todo array supplied", () => {
    const sampleTodoLength = sampleTodos.length;
    render(<AllTodos todos={sampleTodos} />);
    const numberOfRows = screen.getAllByText(/sample/i).length;
    expect(numberOfRows).toEqual(sampleTodoLength);
  });
});
