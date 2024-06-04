import { render, screen } from "@testing-library/react";
import ComponentWithProps from "../src/ComponentWithProps";

describe("ComponentWithProps", () => {
  it("renders correct heading from props", () => {
    //Arrange
    const testHeaderValue = "Test Header";
    //Act
    render(<ComponentWithProps header={testHeaderValue} />);
    //Assert
    expect(screen.getByText(testHeaderValue)).toBeInTheDocument();
  });

  it("renders correct content from props", () => {
    //Arrange
    const testContentValue = "Test Content";
    //Act
    render(<ComponentWithProps content={testContentValue} />);
    //Assert
    expect(screen.getByText(testContentValue)).toBeInTheDocument();
  });

  it("renders correct number from props", () => {
    //Arrange
    const testNumberValue = 20;
    //Act
    render(<ComponentWithProps number={testNumberValue} />);
    //Assert
    expect(screen.getByTestId("numberPara").textContent).toBe(
      `This number is: ${testNumberValue}`
    );
  });
});
