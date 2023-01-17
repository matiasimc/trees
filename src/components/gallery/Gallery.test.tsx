import Gallery from "./Gallery";
import { render, screen, waitFor } from "@testing-library/react";

test("renders children", async () => {
  render(
    <Gallery
      children={[<div key="1">child1</div>, <div key="2">child2</div>]}
    />
  );

  expect(await screen.findByText("child1")).toBeInTheDocument();
  expect(await screen.findByText("child2")).toBeInTheDocument();
});
