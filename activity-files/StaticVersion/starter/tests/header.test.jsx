import { render } from "@testing-library/react";
import Header from "../src/Components/Header";

describe("Header render test", () => {
  test("Header component renders correctly", () => {
    expect(render(<Header />)).toMatchSnapshot();
  });
});
