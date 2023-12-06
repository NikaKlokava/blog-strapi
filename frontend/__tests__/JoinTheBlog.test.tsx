import { JoinTheBlog } from "@/app/components/join-the-blog/JoinTheBlog";
import { render } from "@testing-library/react";

describe("Test the JoinTheBlog component", () => {
  it("The JoinTheBlog component renders correctly", () => {
    jest.mock("../app/components/join-the-blog/JoinTheBlog");
    const joinTheBlogSnap = render(<JoinTheBlog />);
    expect(joinTheBlogSnap).toMatchSnapshot();
  });
});
