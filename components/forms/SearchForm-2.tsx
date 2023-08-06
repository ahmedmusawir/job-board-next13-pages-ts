import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useJobs } from '@/contexts/JobContext';
import { debounce } from 'lodash';

const SearchForm = () => {
  const { searchFormState, setSearchFormState, findJobs, sideBarFormState } =
    useJobs();

  const handleSearch = debounce(() => {
    if (searchFormState.length >= 3 || searchFormState.length == 0) {
      console.log('SearchForm: searchFormState', searchFormState);
      // const formsStates = { searchFormState, sideBarFormState };
      // findJobs('api/jobs-search', formsStates);
    }
  }, 2000);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFormState(e.target.value);
    handleSearch();
  };

  return (
    <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
      <form className="relative flex flex-1" action="#" method="GET">
        <label htmlFor="search-field" className="sr-only">
          Search
        </label>
        <MagnifyingGlassIcon
          className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400 ml-6"
          aria-hidden="true"
        />

        <input
          id="search-field"
          className="block h-full w-full border-1 border-gray-300 focus:ring-0 focus:border-0 py-3 pl-8 pr-0 text-gray-900 placeholder:text-gray-400  sm:text-sm ml-4"
          placeholder="Search..."
          type="search"
          name="search"
          value={searchFormState}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default SearchForm;
