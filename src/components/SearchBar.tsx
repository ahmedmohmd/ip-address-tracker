//* Imports
import React, { FC, useState } from "react";
import clsx from "clsx";

//* Props INterface
interface SearchBarProps {
  onSearch: (ip: string) => void;
}

//* SearchBar JSX
const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  //* Stats
  const [placeholder, setPlaceholder] = useState<string>(
    "Search for any IP adress or Domain"
  );
  const [ip, setIp] = useState<string>("");

  //* Handlers
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(ip);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx("flex justify-center items-center", "w-full")}
    >
      <input
        type="search"
        placeholder={placeholder}
        className={clsx(
          "block",
          "rounded-tl-xl rounded-bl-xl",
          "flex justify-center items-center",
          "outline-none",
          "w-[70%] sm:w-[60%] md:w-[50%] lg:w-[30%]",
          "py-3 sm:py-4 px-5",
          "text-md",
          "duration-150"
        )}
        onFocus={() => setPlaceholder("")}
        onBlur={() => setPlaceholder("Search for any IP adress or Domain")}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setIp(e.currentTarget.value)
        }
      />
      <button
        className={clsx(
          "h-full",
          "rounded-tr-xl rounded-br-xl",
          "px-6 py-5 sm:py-6",
          "bg-black hover:bg-slate-800",
          "outline-none",
          "duration-300"
        )}
        type="submit"
      >
        <img
          src="/media/images/icon-arrow.svg"
          className={clsx("w-3 h-3")}
          alt="Arrow Icon"
        />
      </button>
    </form>
  );
};

export default SearchBar;
