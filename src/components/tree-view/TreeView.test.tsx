import TreeView from "./TreeView";
import { act } from "@testing-library/react";
import { render, screen, waitFor } from "@testing-library/react";

test("renders tree names", async () => {
  render(<TreeView name="tree1" species_name="species1" image="image1" />);

  expect(await screen.findByText("tree1")).toBeInTheDocument();
  expect(await screen.findByText("species1")).toBeInTheDocument();
});

test("image initially hidden", async () => {
  render(<TreeView name="tree1" species_name="species1" image="image1" />);

  waitFor(() => expect(screen.queryByText("image1")).not.toBeInTheDocument());
});

test("show image on button click", async () => {
  render(<TreeView name="tree1" species_name="species1" image="image1" />);

  const showImage = screen.queryByText("Show image");
  act(() => showImage?.click());

  waitFor(() => expect(screen.findByText("image1")).toBeInTheDocument());
});

test("hide image on button click", async () => {
  render(<TreeView name="tree1" species_name="species1" image="image1" />);

  const showImage = screen.queryByText("Show image");
  act(() => showImage?.click());

  const hideImage = screen.queryByText("Hide image");
  act(() => hideImage?.click());

  waitFor(() => expect(screen.findByText("image1")).not.toBeInTheDocument());
});

test("focus image on button click", async () => {
  render(<TreeView name="tree1" species_name="species1" image="image1" />);

  const showImage = screen.queryByText("Show image");
  act(() => showImage?.click());

  waitFor(() => expect(screen.findByText("image1")).toHaveFocus());
});
