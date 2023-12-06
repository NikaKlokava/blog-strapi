import { instaAestheticData } from "@/__mocks__/mocks";
import { InstaPost } from "@/app/components/insta-post/InstaPost";
import { render } from "@testing-library/react";

describe("Test the InstaPost component", () => {
  it("The InstaPost component renders correctly", () => {
    const instaPostSnap = render(
      <InstaPost
        post={instaAestheticData[0].attributes}
        close={() => console.log("test")}
      />
    );
    expect(instaPostSnap).toMatchSnapshot();
  });
});
