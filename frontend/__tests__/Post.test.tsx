import { postsMockData } from "@/__mocks__/mocks";
import { PostItem } from "@/app/components/post-item/Post";
import { render } from "@testing-library/react";

describe("Test the PostItem component", () => {
  it("The PostItem component renders correctly", () => {
    const postSnap = render(<PostItem posts={postsMockData} />);
    expect(postSnap).toMatchSnapshot();
  });
});
