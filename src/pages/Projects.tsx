import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // back arrow icon

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
}

export default function AllProjectsPage() {
  const navigate = useNavigate();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/ARUN-Nadarajah/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(
          data
            .filter((r: any) => !r.fork)
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
    return (
      <p className="text-center text-text">Loading repositories...</p>
    );
  if (repos.length === 0)
    return <p className="text-center text-text">No repositories found.</p>;

  return (
    <section className="min-h-screen px-8 py-12 bg-surface text-text">
      {/* Modern Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium transition-transform duration-300 border rounded-md bg-surface border-muted text-text hover:bg-accent hover:text-surface hover:scale-105"
      >
        <FaArrowLeft className="text-base" />
        Back
      </button>

      <h1 className="text-4xl font-bold mb-10 text-center">All GitHub Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface border border-muted/30 rounded-xl p-6 shadow-md hover:shadow-accent/50 transition-all duration-300 flex flex-col"
          >
            <h2 className="text-xl font-semibold mb-2 text-accent">
              {repo.name}
            </h2>
            <p className="text-muted mb-4">
              {repo.description || "No description available."}
            </p>
            {repo.language && (
              <div className="mb-2">
                <span className="inline-block bg-surface text-text text-xs font-medium px-2 py-1 rounded-full border border-muted">
                  {repo.language}
                </span>
              </div>
            )}
          </a>
        ))}
      </div>

      <p className="text-center text-muted mt-8 italic">
        More projects coming soon — stay tuned!
      </p>

      <p className="text-center text-accent mt-4 font-medium">
        🚀 Currently building: <span className="italic">TreatBox</span> — a full-stack e-commerce bakery app with features like cart, checkout, admin dashboard, reviews, and dark mode.
      </p>
    </section>
  );
}