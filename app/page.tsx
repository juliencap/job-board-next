import JobCard from "@/components/JobCard";

async function getJobs() {
  const res = await fetch("http://localhost:3000/api/jobs", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erreur API");
  }

  return res.json();
}

export default async function Home() {
  const jobs = await getJobs();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Job Board</h1>

      {jobs.map((job: any) => (
        <JobCard key={job.id} job={job} />
      ))}
    </main>
  );
}
