import Link from "next/link";

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  remote: boolean;
};

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="border p-4 mb-4 rounded">
      <h2 className="font-bold">{job.title}</h2>
      <p>
        {job.company} — {job.location}
      </p>

      <Link href={`/jobs/${job.id}`} className="text-blue-600 hover:underline">
        Voir l'offre
      </Link>
    </div>
  );
}
