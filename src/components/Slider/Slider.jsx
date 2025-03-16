export const jobList = [
  {
    ApplicationStatus: "Open",
    Company: "Government School",
    Deadline: "2024-03-30 23:59",
    Description:
      "Join the prestigious Government School of India as a dedicated teacher. Inspire and educate the future leaders of our nation. Qualified candidates with a passion for teaching and a commitment to student success are encouraged to apply. Help shape the minds of tomorrow and make a difference in education.",
    EligibilityCriteria: "M.Sc.",
    HR: "Akshat Jain",
    JobId: 1,
    JobLocation: "Bijnor",
    Vacancies: 10,
    jobTitle: "Teacher",
  },
  {
    jobTitle: "Counselor",
    Company: "Special Education Center",
    Deadline: "2024-04-15 23:59",
    Description:
      "Join our Special Education Center as a compassionate counselor. Provide guidance and support to students with disabilities, helping them overcome challenges and achieve their full potential. Ideal candidates possess empathy, patience, and strong communication skills.",
    EligibilityCriteria: "B.A. in Psychology or related field",
    HR: "Emily Johnson",
    JobId: 2,
    JobLocation: "Mumbai",
    Vacancies: 5,
    ApplicationStatus: "Open",
  },
  {
    jobTitle: "Sign Language Interpreter",

    Company: "Deaf Education Institute",
    Deadline: "2024-04-10 23:59",
    Description:
      "Join our Deaf Education Institute as a proficient sign language interpreter. Facilitate communication between deaf or hard-of-hearing students and educators, ensuring inclusive learning environments. Qualified candidates must be fluent in sign language and possess strong interpersonal skills.",
    EligibilityCriteria: "Certification in Sign Language Interpretation",
    HR: "David Smith",
    JobId: 3,
    JobLocation: "Delhi",
    Vacancies: 3,
    ApplicationStatus: "Open",
  },
  {
    jobTitle: "Occupational Therapist",
    Company: "Rehabilitation Center for Disabilities",
    Deadline: "2024-04-20 23:59",
    Description:
      "Join our Rehabilitation Center for Disabilities as a dedicated occupational therapist. Provide therapeutic interventions to individuals with physical or cognitive disabilities, promoting independence and improving quality of life. Candidates with experience in rehabilitation settings are preferred.",
    EligibilityCriteria: "Bachelor's Degree in Occupational Therapy",
    HR: "Sarah Brown",
    JobId: 4,
    JobLocation: "Kolkata",
    Vacancies: 2,
    ApplicationStatus: "Open",
  },
];

const Slider = () => {
  return (
    <marquee className="hidden text-sm md:text-[18px] py-2 lg:block">
      {jobList.map((job) => (
        <span key={job.JobId}>
          Job Id: {job.JobId}, Job Title: {job.jobTitle}, Company:
          {job.Company}, Deadline: {job.Deadline}, Description:
          {job.Description}, Eligibility Criteria: {job.EligibilityCriteria},
          HR: {job.HR}, Job Location: {job.JobLocation}, Vacancies:
          {job.Vacancies}, Application Status: {job.ApplicationStatus}
        </span>
      ))}
    </marquee>
  );
};

export default Slider;
