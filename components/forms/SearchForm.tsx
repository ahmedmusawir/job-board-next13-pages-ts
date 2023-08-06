import React from 'react';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import { useJobs } from '@/contexts/JobContext';

const SearchForm = () => {
  const { searchFormState, setSearchFormState } = useJobs();
  return (
    <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
      <form className="relative flex flex-1" action="#" method="GET">
        <label htmlFor="search-field" className="sr-only">
          Search
        </label>

        <input
          id="search-field"
          className="block h-full w-full border-1 border-gray-300 focus:ring-0 focus:border-0 py-3 pl-8 pr-0 text-gray-900 placeholder:text-gray-400  sm:text-sm ml-4"
          placeholder="Search..."
          type="search"
          name="search"
          value={searchFormState}
          onChange={(e) => setSearchFormState(e.target.value)}
        />
        <button
          className="absolute inset-0 right-auto group"
          type="submit"
          aria-label="Search"
        >
          <MagnifyingGlassIcon
            className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400 ml-6"
            aria-hidden="true"
          />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
