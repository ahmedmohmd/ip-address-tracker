//* Imports
import { FC, useState } from "react";
import clsx from "clsx";
import SearchBar from "./components/SearchBar";
import Result from "./components/Result";

//* JSX
const App: FC = () => {
  //* Stats
  const [ip, setIp] = useState<string>("");

  //* Handlers
  const ipHandler = (ip: string) => {
    setIp(ip);
    console.log(ip);
  };

  return (
    <article
      className={clsx(
        "min-w-screen min-h-screen",
        "flex justify-center items-center flex-col",
        "relative"
      )}
    >
      <section
        className={clsx(
          "w-full",
          "flex justify-center items-center flex-col gap-6 md:gap-8",
          "absolute left-1/2 top-16 -translate-x-1/2",
          "mx-auto px-5"
        )}
      >
        <h1
          className={clsx(
            "text-center text-xl md:text-2xl text-white font-semibold"
          )}
        >
          IP Address Tracker
        </h1>

        <SearchBar onSearch={ipHandler} />
        <Result />
      </section>

      <figure className={clsx("w-full h-full", "grow-[1] basis-1")}>
        <img
          className={clsx("w-full h-full", "object-cover")}
          src="/media/images/pattern-bg.png"
          alt="Pattern Background"
        />
      </figure>

      <figure className={clsx("w-full h-auto", "grow-[2] basis-2")}>
        <img
          className={clsx("w-full h-full", "object-cover")}
          src="/media/images/map.jpg"
          alt="Map"
        />
      </figure>
    </article>
  );
};

export default App;
