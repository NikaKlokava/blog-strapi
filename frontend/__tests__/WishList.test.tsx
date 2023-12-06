import { WishList } from "@/app/components/wish-list/WishList";
import { render } from "@testing-library/react";

describe("Test the WishList component", () => {
  it("The WishList component renders correctly", async () => {
    const wishlistSnap = render(await (async () => await WishList())());
    expect(wishlistSnap).toMatchSnapshot();
  });
});
