// three types of debouncer
//1. take a value as input and return debounce value : search form or input form, filtering lists.
//2. return a value : window size or window scroll
//3. take a function as input and return debounce function : button clicked

import React, { useState, useEffect, useRef, useCallback } from "react";

// 1. VALUE DEBOUNCER: Good for derived values (like search results)
export function useDebounceValue(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
}

// 2. FUNCTION DEBOUNCER: Good for action-based events (like saving to DB)
export function useDebounceFn(callbackFn, delay) {
  const timeRef = useRef(null);
  const callbackRef = useRef(callbackFn);

  // Keep latest callback reference
  useEffect(() => {
    callbackRef.current = callbackFn;
  }, [callbackFn]);

  // Clean up on unmount
  useEffect(
    () => () => {
      if (timeRef.current) clearTimeout(timeRef.current);
    },
    []
  );

  const debounceFn = useCallback(
    (...args) => {
      if (timeRef.current) clearTimeout(timeRef.current);
      timeRef.current = setTimeout(() => {
        callbackRef.current(...args);
      }, delay);
    },
    [delay]
  );

  return debounceFn;
}

// 3. WINDOW DEBOUNCERS: Good for tracking continuous browser events
export function useWindowSize(delay = 100) {
  const isClient = typeof window !== "undefined";
  const [size, setSize] = useState({
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
  });

  const timeRef = useRef(null);

  useEffect(() => {
    if (!isClient) return;

    function handleResize() {
      if (timeRef.current) clearTimeout(timeRef.current);
      timeRef.current = setTimeout(() => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
      }, delay);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      if (timeRef.current) clearTimeout(timeRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [delay]);

  return size;
}

export function useWindowScroll(delay = 100) {
  const isClient = typeof window !== "undefined";
  const [scroll, setScroll] = useState({
    x: isClient ? window.scrollX : 0,
    y: isClient ? window.scrollY : 0,
  });
  const timeRef = useRef(null);

  useEffect(() => {
    if (!isClient) return;

    function handleScroll() {
      if (timeRef.current) clearTimeout(timeRef.current);
      timeRef.current = setTimeout(() => {
        setScroll({ x: window.scrollX, y: window.scrollY });
      }, delay);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (timeRef.current) clearTimeout(timeRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [delay]);

  return scroll;
}


//stale closures
//SSR-safe (typeof window !== "undefined")
//window hooks share the same debounce logic: “We can extract a generic useDebouncedWindowEvent hook and build size/scroll on top of it.”
//Passive event listeners (performance bonus): window.addEventListener("scroll", handleScroll, { passive: true });
//.cancel() and .flush()
//how to add a leading option to your useDebounceFn