import React from "react";

import Link from "next/link";

function SidebarLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className: string;
}) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
export default SidebarLink;
