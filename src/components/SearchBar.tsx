//* Imports
import React, { FC, useState } from "react";
import clsx from "clsx";
import validateIp from "../utils/validate";
import { toast } from "react-toastify";
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
  const [searchText, setSearchText] = useState<string>("");
  const [isIpValid, setIsIpValid] = useState<boolean>(true);

  //* Handlers
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validateResult = validateIp(searchText);

    if (validateResult) {
      setIsIpValid(true);
      onSearch(searchText);
    } else {
      setIsIpValid(false);
      toast.error("Sorry, IP must be Valid!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <article
      className={clsx(
        "flex flex-col justify-center items-center gap-2",
        "w-full"
      )}
    >
      <form
        onSubmit={handleSubmit}
        className={clsx("flex justify-center items-center", "w-full")}
      >
        <input
          type="search"
          placeholder={placeholder}
          className={`bg-white/85 border-2 rounded-tl-xl rounded-bl-xl flex justify-center items-center outline-none w-[70%] sm:w-[60%] md:w-[50%] lg:w-[30%] py-3 sm:py-4 px-5 text-md duration-150 ${
            isIpValid
              ? "border-transparent placeholder:text-gray-400/80"
              : "border-red-500/75 placeholder:text-red-500/50"
          }`}
          onFocus={() => setPlaceholder("")}
          onBlur={() => setPlaceholder("Search for any IP adress or Domain")}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setSearchText(e.currentTarget.value)
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
    </article>
  );
};

export default SearchBar;
