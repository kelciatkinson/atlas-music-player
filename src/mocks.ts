import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/posts/1", () => {
    return HttpResponse.json({
      id: 1,
      title: "Lorem Ipsum",
      artist: "Lorem ipsum dolor",
    });
  }),
];

export const server = setupServer(...handlers);
