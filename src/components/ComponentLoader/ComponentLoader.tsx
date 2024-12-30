import React from "react";

import { IconLoader2 } from "@tabler/icons-react";

function ComponentLoader({
  width = "20",
  height = "20",
}: {
  width?: string;
  height?: string;
}) {
  return (
    <IconLoader2
      stroke={2}
      className="animate-spin text-light-primary dark:text-dark-primary"
      width={width}
      height={height}
    />
  );
}

export default ComponentLoader;
