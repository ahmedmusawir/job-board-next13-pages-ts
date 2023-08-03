import { Job, JobData } from '@/entities';
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';

// Define the shape of the context
interface JobContextProps {
  jobs: Job[];
  // searchJobs: (apiUrl: string, formsStates: any) => void;
  // ... add more properties as needed
}

// Create the context
const JobContext = createContext<JobContextProps | undefined>(undefined);

export const JobProvider = ({
  children,
  jobs,
}: {
  children: ReactNode;
  jobs: Job[];
}) => {
  const [displayedJobs, setDisplayedJobs] = useState(jobs);
  //... other state variables

  const searchJobs = async (apiUrl: string, formsStates: any) => {
    //... the searchJobs function
  };

  //... useEffect calls

  return (
    <JobContext.Provider value={{ jobs: displayedJobs }}>
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
