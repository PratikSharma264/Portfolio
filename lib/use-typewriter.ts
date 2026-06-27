"use client";

import { useEffect, useState } from "react";

export function useTypewriter(words: string[], options?: { typeSpeed?: number; deleteSpeed?: number; pause?: number }) {
  const { typeSpeed = 55, deleteSpeed = 28, pause = 1400 } = options ?? {};
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pause);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), pause);
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), deleteSpeed);
      } else {
        // This effect is a timer-driven state machine (typing/pausing/deleting);
        // advancing word/phase here is the intended response to the timeout,
        // not a derived-state antipattern.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setWordIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}
