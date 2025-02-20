import React from 'react';
import Hero from '../components/Hero';
import HomeCard from '../components/HomeCard';
import JobListing from '../components/JobListing';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
        <Hero 
            title="Become a React Dev" 
            subtitle="Find the React job that fits your skills and needs"
        />
        <HomeCard />
        <JobListing isHome={true} />
        <ViewAllJobs />
    </>
  ) 
}

export default HomePage