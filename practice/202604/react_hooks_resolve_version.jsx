import React, { useState, useRef, useEffect, useLayoutEffect, useMemo, useCallback, memo } from "react";

// 🔧 Custom Hook: useLatest (解决闭包问题)
function useLatest(value) {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref;
}

// 🔧 Custom Hook: useDebounce
function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

// 👶 子组件（配合 memo + useCallback）
const Child = memo(({ onClick }) => {
  console.log("👶 Child render");
  return (
    <button onClick={onClick} className="px-3 py-1 bg-purple-500 text-white rounded">
      Child Button
    </button>
  );
});

export default function AdvancedHooksDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 🧠 useRef 基础
  const inputRef = useRef(null);
  const renderCount = useRef(0);
  renderCount.current++;

  // ⚠️ 闭包问题 + 解决
  const latestCount = useLatest(count);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("❌ closure count:", count);
      console.log("✅ latest count:", latestCount.current);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // ⚡ useMemo（性能优化）
  const expensiveValue = useMemo(() => {
    console.log("🔥 expensive calc");
    let total = 0;
    for (let i = 0; i < 50000000; i++) total += i;
    return total + count;
  }, [count]);

  // ⚡ useCallback + React.memo
  // =====================这个函数只在组件首次渲染时创建一次，之后永远复用同一个函数引用
  const handleChildClick = useCallback(() => {
    console.log("child click");
  }, []);

  const debouncedText = useDebounce(text, 500);

  // =====================
  // ⚡ useLayoutEffect
  // =====================
  useLayoutEffect(() => {
    console.log("useLayoutEffect run");
  }, [count]);

  // =====================
  // ⚡ useEffect
  // =====================
  useEffect(() => {
    console.log("useEffect run");
  }, [count]);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🔥 Advanced Hooks Demo</h1>

      {/* useState */}
      <div>
        <h2 className="font-semibold">useState</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)} className="px-3 py-1 bg-blue-500 text-white rounded">
          +1
        </button>
      </div>

      {/* useRef */}
      <div>
        <h2 className="font-semibold">useRef</h2>
        <input
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-1"
        />
        <button onClick={() => inputRef.current.focus()} className="ml-2 px-2 py-1 bg-green-500 text-white rounded">
          Focus
        </button>
      </div>

      {/* useDebounce */}
      <div>
        <h2 className="font-semibold">useDebounce</h2>
        <p>Debounced Text: {debouncedText}</p>
      </div>

      {/* useMemo */}
      <div>
        <h2 className="font-semibold">useMemo</h2>
        <p>Expensive Value: {expensiveValue}</p>
      </div>

      {/* memo + useCallback */}
      <div>
        <h2 className="font-semibold">React.memo + useCallback</h2>
        <Child onClick={handleChildClick} />
      </div>

      {/* render count */}
      <div>
        <h2 className="font-semibold">Render Count</h2>
        <p>{renderCount.current}</p>
      </div>

      {/* 提示 */}
      <div>
        <h2 className="font-semibold">Console</h2>
        <p>观察 closure vs latest 值对比 + hooks 执行顺序</p>
      </div>
    </div>
  );
}
