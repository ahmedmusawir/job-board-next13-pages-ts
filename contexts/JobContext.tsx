import { Job, JobData } from '@/entities';
import { useEffectAfterFirstRender } from '@/utils';
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';

interface SidebarFormState {
  jobTypes: string[];
  experienceLevels: string[];
  remoteOk: boolean;
  featured: boolean;
  baseSalaryOptions: number[];
  baseSalaryBounds: number[];
  selectedTags: string[];
}

// Defining the shape of the context
interface JobContextProps {
  jobs: Job[];
  sideBarFormState: SidebarFormState;
  searchFormState: string;
  setSideBarFormState: React.Dispatch<React.SetStateAction<SidebarFormState>>;
  setSearchFormState: React.Dispatch<React.SetStateAction<string>>;
}

// Creating the context
const JobContext = createContext<JobContextProps | undefined>(undefined);

export const JobProvider = ({
  children,
  jobs,
}: {
  children: ReactNode;
  jobs: Job[];
}) => {
  // MAIN JOBS TO DISPLAY
  const [displayedJobs, setDisplayedJobs] = useState(jobs);

  // ALL STATES FROM SIDEBAR
  const [sideBarFormState, setSideBarFormState] = useState<SidebarFormState>({
    jobTypes: [],
    experienceLevels: [],
    remoteOk: false,
    featured: false,
    baseSalaryOptions: [],
    baseSalaryBounds: [],
    selectedTags: [],
  });

  // SEARCHBAR TEXT STATE
  const [searchFormState, setSearchFormState] = useState('');

  const searchJobs = async (apiUrl: string, formsStates: any) => {
    //... the searchJobs function
  };

  //... useEffect calls
  // trigger a search whenever the sidebar form state changes
  useEffectAfterFirstRender(() => {
    console.log(
      'sidebar state form changed => sideBarFormState',
      sideBarFormState
    );
    // const formsStates = { searchFormState, sideBarFormState };
    // searchJobs('api/search-jobs', formsStates);
  }, [sideBarFormState]);

  // trigger a search whenever the search form state changes && length >= 3 -OR- length == 0 (implying a reset)
  // useEffectAfterFirstRender(() => {
  //   console.log(
  //     'search form changed && length >= 3 OR ==0 => triggering a search'
  //   );
  //   if (searchFormState.length >= 3 || searchFormState.length == 0) {
  //     // const formsStates = { searchFormState, sideBarFormState };
  //     // searchJobs('api/search-jobs', formsStates);
  //   }
  // }, [searchFormState]);

  return (
    <JobContext.Provider
      value={{
        jobs: displayedJobs,
        sideBarFormState,
        setSideBarFormState,
        searchFormState,
        setSearchFormState,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = (): JobContextProps => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
};
