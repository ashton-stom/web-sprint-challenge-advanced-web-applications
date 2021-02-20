import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
beforeAll(() => localStorage.setItem('token', "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"))
test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />)
});

test("Fetches data and renders the bubbles on mounting", () => {
  // Finish this test
  render(<BubblePage />)
  const value = screen.queryAllByRole('circle')
  expect(value).not.toBeNull()
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading