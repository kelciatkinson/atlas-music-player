import { render } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import CoverArt from "../components/CoverArt";
import React from "react";

describe("CoverArt Snapshot Tests", () => {
  test("renders with valid cover and songId", () => {
    const { container } = render(
      <CoverArt cover="https://example.com/cover.jpg" songId="123" />
    );
    expect(container).toMatchSnapshot();
  });

  test("renders with cover but no songId", () => {
    const { container } = render(
      <CoverArt cover="https://example.com/cover.jpg" />
    );
    expect(container).toMatchSnapshot();
  });

  test("renders with empty cover string", () => {
    const { container } = render(
      <CoverArt cover="" songId="456" />
    );
    expect(container).toMatchSnapshot();
  });

});
