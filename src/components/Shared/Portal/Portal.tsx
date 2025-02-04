"use client";
import React, { useLayoutEffect, useState } from "react";

import { createPortal } from "react-dom";

function Portal({
  children,
  selector,
}: {
  children: React.ReactNode;
  selector: string;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted
    ? createPortal(children, document.querySelector(selector)!)
    : null;
}

export default Portal;
