import { Header } from "@/app/components/header/Header";
import { render } from "@testing-library/react";

describe("Test the Header component", () => {
  it("The Header component renders correctly", () => {
    const headerSnap = render(<Header />);
    expect(headerSnap).toMatchSnapshot();
  });
});
