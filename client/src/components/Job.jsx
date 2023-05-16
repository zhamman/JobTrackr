import moment from "moment";

const Job = ({ company, createdAt }) => {
  let date = moment(createdAt);
  date = date.format("MMM Do, YYYY");
  return (
    <div>
      {company} {date}
    </div>
  );
};
export default Job;
