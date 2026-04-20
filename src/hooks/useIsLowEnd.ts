"use client";
import { useEffect, useState } from "react";

export function useIsLowEnd() {
  const [isLowEnd, setIsLowEnd] = useState(false);
  useEffect(() => {
    const nav = navigator as any;
    const lowMemory = nav.deviceMemory !== undefined && nav.deviceMemory <= 2;
    const lowCPU = nav.hardwareConcurrency !== undefined && nav.hardwareConcurrency <= 2;
    const oldSafari = /iPhone OS ([0-9]+)/.test(navigator.userAgent) &&
      parseInt(navigator.userAgent.match(/iPhone OS ([0-9]+)/)?.[1] || "99") <= 14;
    const slowConnection = nav.connection?.effectiveType === "2g" || nav.connection?.effectiveType === "slow-2g";
    setIsLowEnd(lowMemory || lowCPU || oldSafari || slowConnection);
  }, []);
  return isLowEnd;
}
