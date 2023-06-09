import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import Loading from "./Loading";
import PageBtnContainer from "./PageBtnContainer";
import { Link } from "react-router-dom";

const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    search,
    searchStatus,
    sort,
    searchType,
    numOfPages,
  } = useAppContext();

  useEffect(() => {
    getJobs();
  }, [page, search, searchStatus, sort, searchType]);

  if (isLoading) {
    return <Loading center />;
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h5>No Jobs to display...</h5>
        <Link to="../add-job" className="btn ">
          Add Jobs
        </Link>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map(job => {
          return <Job key={jobs._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};
export default JobsContainer;
