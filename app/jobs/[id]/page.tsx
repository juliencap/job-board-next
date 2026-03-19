import Link from "next/link";
import { notFound } from "next/navigation";
import { jobs } from "@/data/jobs";

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  remote: boolean;
  description: string;
};

type JobPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function JobDetailPage({ params }: JobPageProps) {
  const { id } = await params;

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    notFound();
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Retour aux offres
      </Link>

      <div className="mt-6 border rounded-lg p-6 shadow-sm">
        <h1 className="text-3xl font-bold">{job.title}</h1>

        <p className="mt-2 text-gray-700">
          {job.company} — {job.location}
        </p>

        <p className="mt-2 text-sm">{job.remote ? "Remote" : "On-site"}</p>

        <p className="mt-6 leading-7 text-gray-800">{job.description}</p>
      </div>
    </main>
  );
}
