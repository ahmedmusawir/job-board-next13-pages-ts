import React from 'react';
import { Box, Container, Row } from '../layouts';
import db from '../../data/jobs.json';

import JobList from '../data-view/JobList';
import Sidebar from '../ui-ux/Sidebar';

import { JobProvider, useJobs } from '../../contexts/JobContext';
import SearchForm from '../forms/SearchForm';

export default function Dashboard() {
  const jobsData = db.data;
  // console.log('Local Data:', jobsData);

  return (
    <JobProvider jobs={jobsData}>
      <DashboardContent />
    </JobProvider>
  );
}

const DashboardContent = () => {
  const { jobs } = useJobs();

  return (
    <Container className={'flex mx-auto border-2 border-blue-400'} FULL={false}>
      {/* SIDEBAR - LEFT BLOCK */}
      <Box className="min-w-[30%]">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
          <div className="flex h-16 shrink-0 items-center">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </div>
          <Sidebar />
        </div>
      </Box>
      {/* JOB LIST - RIGHT BLOCK */}
      <Box className="min-w-[70%]">
        <Row>
          <SearchForm />
        </Row>
        <Row className="bg-gray-200">
          <h2 className="text-lg font-bold mb-5">Current Jobs</h2>
          <JobList jobs={jobs} />
        </Row>
      </Box>
    </Container>
  );
};
