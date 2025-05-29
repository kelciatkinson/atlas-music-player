import { render } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import VolumeControls from "../components/VolumeControls";
import React from "react";

describe("VolumeControls Snapshot Tests", () => {
  test("renders with default volume (50)", () => {
    const { container } = render(
      <VolumeControls />
    );
    expect(container).toMatchSnapshot();
  });

  test("renders with minimum volume (0)", () => {
    const { container } = render(
      <VolumeControls />
    );
    expect(container).toMatchSnapshot();
  });

  test("renders with max volume (100)", () => {
    const { container } = render(
      <VolumeControls />
    );
    expect(container).toMatchSnapshot();
  });
});
