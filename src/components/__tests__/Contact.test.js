import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Component", () => {
    test("should render the Contact component", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
      
        //Assertion
        expect(heading).toBeInTheDocument();
      });
      
      test("should load button inside Contact component", () => {
        render(<Contact />);
        const button = screen.getByRole("button");
      
        //Assertion
        expect(button).toBeInTheDocument();
      });
      
      test("should load placeholder inside Contact component", () => {
        render(<Contact />);
      
        //Querying
        const inputName = screen.getByPlaceholderText("name");
        //Assertion
        expect(inputName).toBeInTheDocument();
      });
      
})
