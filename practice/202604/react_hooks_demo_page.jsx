import React, { useState, useRef, useEffect, useLayoutEffect, useMemo, useCallback } from "react";

export default function HooksDemo() {
  // 1. useState
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 2. useRef
  const inputRef = useRef(null);
  const renderCount = useRef(0);
  // 3. useEffect 依赖数组是空
  useEffect(() => {
    console.log("run");
  });
  // 3. useEffect
  useEffect(() => {
    console.log("useEffect: count changed", count);
  }, [count]);

  // 4. useLayoutEffect
  useLayoutEffect(() => {
    console.log("useLayoutEffect: DOM updated before paint");
  }, [count]);

  // Track render times
  renderCount.current += 1;

  // 5. useMemo (expensive calculation simulation)
  const expensiveValue = useMemo(() => {
    console.log("Calculating expensive value...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }
    return total + count;
  }, [count]);

  // 6. useCallback (avoid unnecessary re-renders)
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">React Hooks Demo</h1>

      {/* useState */}
      <div>
        <h2 className="font-semibold">useState</h2>
        <p>Count: {count}</p>
        <button onClick={handleClick} className="px-3 py-1 bg-blue-500 text-white rounded">+1</button>
      </div>

      {/* useRef */}
      <div>
        <h2 className="font-semibold">useRef</h2>
        <input ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} className="border p-1" />
        <button onClick={focusInput} className="ml-2 px-2 py-1 bg-green-500 text-white rounded">Focus Input</button>
      </div>

      {/* useMemo */}
      <div>
        <h2 className="font-semibold">useMemo</h2>
        <p>Expensive Value: {expensiveValue}</p>
      </div>

      {/* render count */}
      <div>
        <h2 className="font-semibold">Render Count (useRef)</h2>
        <p>{renderCount.current}</p>
      </div>

      {/* useEffect / useLayoutEffect logs in console */}
      <div>
        <h2 className="font-semibold">Check Console</h2>
        <p>useEffect & useLayoutEffect logs will appear when count changes.</p>
      </div>
    </div>
  );
}
