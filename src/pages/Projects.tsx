import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PROFILE } from "../data/portfolioData";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  fork: boolean;
  updated_at: string;
}

export default function AllProjectsPage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://api.github.com/users/ARUN-Nadarajah/repos?per_page=100", {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Unable to load repositories from GitHub.");
        }
        return res.json();
      })
      .then((data: Repo[]) => {
        const filtered = data
          .filter((r) => !r.fork)
          .sort(
            (a, b) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime()
          );
        setRepos(filtered);
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(
          err instanceof Error
            ? err.message
            : "Unable to load repositories right now."
        );
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  const languages = useMemo(() => {
    const unique = Array.from(
      new Set(repos.map((r) => r.language).filter((l): l is string => Boolean(l)))
    );
    return ["All", ...unique];
  }, [repos]);

  const visibleRepos = useMemo(() => {
    if (selectedLanguage === "All") return repos;
    return repos.filter((r) => r.language === selectedLanguage);
  }, [repos, selectedLanguage]);

  return (
    <main
      id="main-content"
      className="min-h-screen bg-background text-foreground py-12"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border text-sm font-medium text-foreground hover:border-accent/60 hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xs font-medium tracking-wider text-accent uppercase">
              GitHub Archive
            </span>
            <span className="h-px w-8 bg-border" aria-hidden="true" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            All GitHub Repositories
          </h1>
          <p className="mt-2 text-sm sm:text-base text-muted max-w-2xl">
            Public non-forked repositories fetched directly from GitHub, ordered by most recently updated.
          </p>
        </div>

        {!loading && !error && languages.length > 1 && (
          <div
            className="flex flex-wrap gap-2 mb-8"
            role="group"
            aria-label="Filter repositories by language"
          >
            {languages.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setSelectedLanguage(lang)}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium border transition-colors ${
                  selectedLanguage === lang
                    ? "bg-accent/15 border-accent text-accent"
                    : "bg-surface border-border text-muted hover:text-foreground"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        )}

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-surface border border-border p-6 h-44 animate-pulse"
              />
            ))}
          </div>
        )}

        {error && (
          <div className="rounded-xl bg-surface border border-border p-6 text-center space-y-4">
            <p className="text-sm sm:text-base text-muted">{error}</p>
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-background text-sm font-semibold hover:bg-accent/90 transition-colors"
            >
              <FaGithub className="w-4 h-4" aria-hidden="true" />
              <span>View Repositories on GitHub</span>
            </a>
          </div>
        )}

        {!loading && !error && visibleRepos.length === 0 && (
          <p className="text-muted text-sm">No repositories found.</p>
        )}

        {!loading && !error && visibleRepos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleRepos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl bg-surface border border-border p-6 flex flex-col justify-between hover:border-accent/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <FolderGit2
                      className="w-5 h-5 text-accent shrink-0"
                      aria-hidden="true"
                    />
                    <ExternalLink
                      className="w-4 h-4 text-muted group-hover:text-accent transition-colors shrink-0"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors break-words">
                    {repo.name}
                  </h2>
                  <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">
                    {repo.description || "Repository source code on GitHub."}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-border/70 flex items-center justify-between text-xs text-muted">
                  {repo.language ? (
                    <span className="font-mono px-2.5 py-0.5 rounded-md bg-background border border-border/80 text-accent">
                      {repo.language}
                    </span>
                  ) : (
                    <span>Repository</span>
                  )}
                  <span className="font-mono">
                    {new Date(repo.updated_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}