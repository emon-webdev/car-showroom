import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <section className="flex items-center h-screen p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <p className="text-2xl font-semibold md:text-3xl">404 ERROR!</p>
            <p className="mt-4 mb-8 dark:text-gray-400">
              Look like something went wrong! The page you were looking for is
              not here. Go Home or try a search.
            </p>
            <Link
              to="/"
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 font-semibold rounded btn btn-outline btn-secondary"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
