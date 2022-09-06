//* Imports
import { FC, useEffect, useState } from "react";
import clsx from "clsx";
import SearchBar from "./components/SearchBar";
import Result from "./components/Result";
import { toast, ToastContainer } from "react-toastify";
import getLocation from "./utils/getLocation";

//* JSX
const App: FC = () => {
  //* Stats & Defaults
  const [searchText, setSearchText] = useState<string>("192.168.1.1");
  const [location, setLocation] = useState<any>({});
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getLocation(searchText);
        setLocation(data);
      } catch (error) {
        toast.error("Sorry, There is Problem in Internet!", {
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

    getData();
  }, [searchText]);

  //* Handlers
  const ipHandler = (searchText: string) => {
    setSearchText(searchText);
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
        <Result location={location} />
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
          src={`https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
          &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
          &markers=color:red%7Clabel:C%7C40.718217,-73.998284
          &key=AIzaSyDOyLfwxUo4TeokgkFAq6OOLkQR7L2Pu9w&signature=YOUR_SIGNATURE`}
          alt="Map"
        />
      </figure>

      <ToastContainer />
    </article>
  );
};

export default App;
