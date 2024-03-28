import React from "react";

export default function TimelineEntry({
  place,
  dateInitial,
  dateFinal,
  description,
}) {
  return (
    <li className="relative mb-6 sm:mb-0 group transition duration-300 ease-in-out">
      <div className="flex items-center hover:cursor-pointer">
        <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 group-hover:ring-8 group-hover:bg-blue-200 dark:group-hover:bg-blue-700 transition duration-300 ease-in-out">
          <svg
            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300 transition duration-300 ease-in-out"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
      </div>
      <div className="mt-3 sm:pe-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white hover:cursor-pointer group-hover:text-blue-500 dark:group-hover:text-yellow-200 transition duration-300 ease-in-out">
          {place}
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 hover:cursor-pointer dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition duration-300 ease-in-out">
          From {dateInitial} to {dateFinal}
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400 hover:cursor-pointer group-hover:text-gray-700 dark:group-hover:text-gray-300 transition duration-300 ease-in-out">
          {description}
        </p>
      </div>
    </li>
  );
}
