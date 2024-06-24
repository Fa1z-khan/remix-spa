import { json } from "@remix-run/node";
import { createRemixStub } from "@remix-run/testing";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import HomePage from "~/routes/_index";

describe("Home Page", () => {
  const user = userEvent.setup();
  const RemixStub = createRemixStub([
    {
      path: "/",
      Component: HomePage,
      loader() {
        return json({ message: "hello from loader" });
      },
    },
  ]);
  render(<RemixStub />);

  it('should render the "hello from loader" message', async () => {
    await waitFor(() => screen.getByText("hello from loader"));
  });

  it("should create a new note when click the button", async () => {
    await waitFor(async () => {
      const createNoteButton = screen.getByRole("button", {
        name: "Create a Not",
      });

      await user.click(createNoteButton);
      const notesList = screen.getByRole("list");

      expect(notesList).toContain(screen.getByText("Note 2"));
    });
  });
});
