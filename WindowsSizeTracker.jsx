import { useState, useEffect } from "react";

function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}

export default function App() {
  const size = useWindowSize(); // Use the custom Hook

  return (
    <div>
      <h1>Window Size Tracker</h1>
      <p>Width: {size.width}</p>
      <p>Height: {size.height}</p>
    </div>
  );
}
