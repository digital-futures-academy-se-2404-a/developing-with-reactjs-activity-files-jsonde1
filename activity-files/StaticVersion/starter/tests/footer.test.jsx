import { render } from "@testing-library/react";
import Footer from "../src/Components/Footer";

describe("footer render test", () => {
  test("footer component renders correctly", () => {
    expect(render(<Footer />)).toMatchSnapshot();
  });
});
