import App from "./App";
import { render, screen, waitFor } from "@testing-library/react";

const TREE_MOCK = {
  trees: [
    { name: "tree1", species_name: "species1", image: "image1" },
    { name: "tree2", species_name: "species2", image: "image2" },
  ],
};

beforeEach(() => {
  jest
    .spyOn(global, "fetch")
    .mockImplementation(
      jest.fn(() =>
        Promise.resolve({ json: () => Promise.resolve(TREE_MOCK) })
      ) as jest.Mock
    );
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("renders tree names", async () => {
  render(<App />);

  waitFor(() => expect(screen.findByText("tree1")).toBeInTheDocument());
  waitFor(() => expect(screen.findByText("species1")).toBeInTheDocument());
  waitFor(() => expect(screen.findByText("tree2")).toBeInTheDocument());
  waitFor(() => expect(screen.findByText("species2")).toBeInTheDocument());
});

test("images initially hidden", async () => {
  render(<App />);

  waitFor(() => expect(screen.queryByText("image1")).not.toBeInTheDocument());
  waitFor(() => expect(screen.queryByText("image2")).not.toBeInTheDocument());
});
