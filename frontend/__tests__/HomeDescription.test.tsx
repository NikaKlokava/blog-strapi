import { HomeDescription } from "@/app/components/home-description/HomeDescription";
import { render } from "@testing-library/react";

describe("Test the HomeDescription component", () => {
  it("The HomeDescription component renders correctly", async () => {
    const homeDescriptionSnap = render(
      await (async () => await HomeDescription())()
    );
    expect(homeDescriptionSnap).toMatchSnapshot();
  });
});
