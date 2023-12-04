import { instaAestheticData } from "@/__mocks__/mocks";
import { ViewMoreBtn } from "@/app/components/view-more-btn/ViewMoreBtn";
import { render } from "@testing-library/react";

describe("Test the ViewMoreBtn component", () => {
  it("The ViewMoreBtn component renders correctly", () => {
    const viewMoreBtnSnap = render(
      <ViewMoreBtn post={instaAestheticData[0].attributes} />
    );
    expect(viewMoreBtnSnap).toMatchSnapshot();
  });
});
