import { render } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import SongTitle from "../components/SongTitle";
import React from "react";


describe("SongTitle Snapshot Tests", () => {
  test("renders with title and artist", () => {
    const { container } = render(
      <SongTitle title="Beautiful Song" artist="Amazing Artist" />
    );
    expect(container).toMatchSnapshot();
  });

  test("renders with empty title", () => {
    const { container } = render(
      <SongTitle title="" artist="Unknown Artist" />
    );
    expect(container).toMatchSnapshot();
  });

  test("renders with empty artist", () => {
    const { container } = render(
      <SongTitle title="Mystery Song" artist="" />
    );
    expect(container).toMatchSnapshot();
  });

  test("renders with both empty", () => {
    const { container } = render(
      <SongTitle title="" artist="" />
    );
    expect(container).toMatchSnapshot();
  });

  test("renders with long title and artist names", () => {
    const { container } = render(
      <SongTitle 
        title="This is a Very Long Song Title That Might Wrap to Multiple Lines"
        artist="This is Also a Very Long Artist Name That Could Be A Little Lengthy"
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("renders with special characters", () => {
    const { container } = render(
      <SongTitle 
        title="Song with Special Characters: !@#$%^&*()"
        artist="Artist & The Band (ft. Someone Else)"
      />
    );
    expect(container).toMatchSnapshot();
  });
});