import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
}

export default function AllProjectsPage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/ARUN-Nadarajah/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(
          data
            .filter((r: any) => !r.fork) // skip forks optionally
            .sort(
              (a: any, b: any) =>
                new Date(b.updated_at).getTime() -
                new Date(a.updated_at).getTime()
            )
        );
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <p className="text-center text-white">Loading repositories...</p>;
  if (repos.length === 0)
    return <p className="text-center text-white">No repositories found.</p>;

  return (
    <section className="min-h-screen px-8 py-12 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-10 text-center">
        All GitHub Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 bg-opacity-30 border border-white/10 rounded-xl p-6 shadow-md hover:shadow-blue-500/50 transition-all duration-300 flex flex-col"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-400">
              {repo.name}
            </h2>
            <p className="text-gray-300 flex-grow">
              {repo.description || "No description available."}
            </p>
            <div className="mt-4 text-sm text-gray-400">
              {repo.language
                ? `Primary Language: ${repo.language}`
                : "No primary language specified."}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
