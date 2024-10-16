export type Colors =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";

export type ColorMapping = {
  [key in Colors]: string; // Each key is a Colors value, and the value is a string
};

export type Size = "large" | "medium" | "small";

export type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "overline"
  | "helper";
