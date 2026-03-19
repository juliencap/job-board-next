import JobCard from "@/components/JobCard";
import { jobs } from "@/data/jobs";

export default async function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Job Board</h1>

      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </main>
  );
}
