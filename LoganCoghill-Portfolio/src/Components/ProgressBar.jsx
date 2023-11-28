import { Fragment } from "react";

export default function ProgressBar({ name, children }) {
  return (
    <section className="m-4 px-28">
      <div className="mb-1 text-lg font-medium text-stone-600">{name}</div>
      <div className="w-full h-4 mb-1 bg-gray-200 rounded-full dark:bg-gray-700">
        {children}
      </div>
    </section>
  );
}
