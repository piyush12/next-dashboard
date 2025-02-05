import React from "react";

import { cn } from "@/utils/utils";

function SidebarLinkText({
  text,
  isOpen,
  icon,
}: {
  text: string;
  isOpen: boolean;
  icon: React.ReactNode;
}) {
  return (
    <>
      {icon}{" "}
      <span
        className={cn(
          "opacity-100 transition-opacity duration-200 ease-linear",
          {
            hidden: isOpen,
          },
        )}
      >
        {text}
      </span>
    </>
  );
}

export default SidebarLinkText;
