import { render } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import PlayListItem from "../components/PlayListItem";
import React from "react";


describe("PlayListItem Snapshot Tests", () => {
  test("renders with basic props", () => {
    const { container } = render(
      <PlayListItem 
        title="Song Title"
        artist="Artist Name"
        duration={180}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("renders with inactive state", () => {
    const { container } = render(
      <PlayListItem 
        title="Inactive Song"
        artist="Another Artist"
        duration={300}
        isActive={false}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("renders with long duration (hours)", () => {
    const { container } = render(
      <PlayListItem 
        title="Long Song"
        artist="Epic Artist"
        duration={3665}
      />
    );
    expect(container).toMatchSnapshot();
  });
});