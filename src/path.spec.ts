import { expect, it } from "vitest";

import { generateRoutePath } from "./path";

it("test the route path if no parameter given", () => {
  const route = generateRoutePath("/tickets/:id");
  expect(route).toEqual("/tickets/:id");
});

it("test the route path if blanl parameter given", () => {
  const route = generateRoutePath("/tickets", {});
  expect(route).toEqual("/tickets");
});

it("test the route path with 1 parameter", () => {
  const route = generateRoutePath("/tickets/:id", { id: "20" });
  expect(route).toEqual("/tickets/20");
});

it("test the route with multiple paramer", () => {
  // @ts-expect-error throwing error exceptionaly to test the function
  const route = generateRoutePath("/tickets/:id/edit/:editId/:viewId", {
    id: "20",
    editId: "30",
    viewId: "40",
  });
  expect(route).toEqual("/tickets/20/edit/30/40");
  expect(route).not.toEqual("/tickets/20/edit/30");
});
