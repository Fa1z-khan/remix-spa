import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "This is a note",
    },
  ]);

  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold my-12">Welcome to Remix</h1>
      <button
        type="button"
        className="px-4 py-2 rounded-md bg-blue-500 text-white"
        onClick={() =>
          setNotes([
            ...notes,
            {
              id: notes.length + 1,
              text: `Note ${notes.length + 1}`,
            },
          ])
        }
      >
        Create a Note
      </button>
      <ul>
        {notes.map((note) => {
          return <li key={note.id}>{note.text}</li>;
        })}
      </ul>
    </main>
  );
}
