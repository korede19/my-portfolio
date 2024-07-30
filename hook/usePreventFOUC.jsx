"use client";
import { useEffect, useState } from "react";

const usePreventFOUC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
};

export default usePreventFOUC;
