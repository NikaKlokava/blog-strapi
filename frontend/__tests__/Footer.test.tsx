import { Footer } from "@/app/components/footer/Footer";
import { render } from "@testing-library/react";

describe("Test the Footer component", () => {
  it("The Footer component renders correctly", async () => {
    const footerSnap = render(await (async () => await Footer())());
    expect(footerSnap).toMatchSnapshot();
  });
})

