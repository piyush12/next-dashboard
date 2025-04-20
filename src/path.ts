export const ROUTES = {
  HOME: "/",
  TICKETS: "/tickets",
  TICKETS_DETAIL: "/tickets/:id",
  TICKETS_EDIT: "/tickets/:id/edit",
  LOGIN: "/login",
  REGISTER: "/signup",
  MYTICKETS: "/tickets/my-ticket",
  ACCOUNT: "/account/profile",
  PASSWORD_REST_PATH: "/reset-password",
} as const;

export type RoutePathType = (typeof ROUTES)[keyof typeof ROUTES];

export const generateRoutePath = (
  path: RoutePathType,
  params?: Record<string, string>,
) => {
  if (!params || Object.keys(params).length === 0) return path;
  return Object.keys(params).reduce((acc, item) => {
    return acc.replace(`:${item}`, encodeURIComponent(String(params[item])));
  }, path);
};
