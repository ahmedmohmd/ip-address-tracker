//* Imports
import { FC } from "react";
import clsx from "clsx";

//* Props Interface
interface ResultProps {
  location: {
    isp: string;
    timezone: string;
    ip: string;
    country: string;
    region: string;
  };
}
interface ResultHeadingProps {
  heading: string;
  value: string;
}

//* Result Heading JSX
const ResultHeading: FC<ResultHeadingProps> = ({ heading, value }) => {
  return (
    <section className={clsx("md:text-start text-center")}>
      <span
        className={clsx(
          "text-gray-400",
          "text-sm font-semibold tracking-wider"
        )}
      >
        {heading}
      </span>
      <h3 className={clsx("lg:text-2xl font-bold text-xl", "mt-3")}>{value}</h3>
    </section>
  );
};

//* Result JSX
const Result: FC<ResultProps> = ({
  location: { ip, timezone, isp, country, region },
}) => {
  return (
    <article
      className={clsx(
        "flex md:justify-center justify-start items-center md:items-center gap-5 md:gap-10 flex-col md:flex-row",
        "px-8 py-8 md:py-12",
        "bg-white",
        "rounded-2xl",
        "w-full md:w-auto"
      )}
    >
      <ResultHeading heading="IP ADDRESS" value={ip ? ip : "192.212.174.101"} />
      <ResultHeading
        heading="LOCATION"
        value={
          country && region ? `${country}, ${region}` : "Brooklyn, NY 10001"
        }
      />
      <ResultHeading
        heading="TIMEZONE"
        value={timezone ? `UTC${timezone}` : "UTC-05:00"}
      />
      <ResultHeading heading="ISP" value={isp ? isp : "SPACEX Starlink"} />
    </article>
  );
};

export default Result;
