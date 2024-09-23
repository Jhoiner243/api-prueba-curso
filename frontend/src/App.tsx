import { useEffect, useState, FormEvent } from "react";

const App = (): React.JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const res = await fetch("http://localhost:3000/api/v1/saludo", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setData(data.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/v1/saludo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setGreeting(data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (greeting !== "") {
      alert(greeting);
    }
  }, [greeting]);

  return (
    <div>
      <h1>Hello</h1>
      <p>Count: {count}</p>
      <div className="grid gap-5">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <h1>{data}</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="name">Enter your name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Greet</button>
      </form>
    </div>
  );
};

export default App;
