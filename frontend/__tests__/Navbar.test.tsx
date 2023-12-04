import { Navbar } from "@/app/components/navbar/Navbar";
import { render } from "@testing-library/react";

describe("Test the Navbar component", () => {
  it("The Navbar component renders correctly", () => {
    const navbarSnap = render(<Navbar />);
    expect(navbarSnap).toMatchSnapshot();
  });
});
