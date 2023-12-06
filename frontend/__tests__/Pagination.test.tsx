import { Pagination } from "@/app/components/pagination/Pagination";
import { render } from "@testing-library/react";

afterEach(() => {
  jest.clearAllMocks();
});

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
  useSearchParams() {
    return {
      params: () => null,
    };
  },
  usePathname() {
    return {
      path: () => null,
    };
  },
}));

describe("Test the Pagination component", () => {
  it("The Pagination component renders correctly", () => {
    const paginationSnap = render(<Pagination numOfPosts={2} pageSize={3} />);
    expect(paginationSnap).toMatchSnapshot();
  });
});
