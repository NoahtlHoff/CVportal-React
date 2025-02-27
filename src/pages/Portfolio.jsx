import { useState } from "react";

// Manually define which repo names should be considered pinned.
const pinnedRepoNames = [
  "Gymnasium - School DB / Console App",
  "Numbers Game - Can you guess the right number?"
];

export async function getStaticProps() {
  // Fetch your repositories from GitHub using the REST API.
  // Adjust the username ("NoahtlHoff") as needed.
  const res = await fetch("https://api.github.com/users/NoahtlHoff/repos");
  const repos = await res.json();

  // You might want to filter out forks or sort as needed here.

  return {
    props: {
      repos,
    },
    revalidate: 60, // re-generate every minute (adjust as needed)
  };
}

export default function Portfolio({ repos }) {
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [readme, setReadme] = useState("");

  // When a card is clicked, show the modal and load the README.
  const handleCardClick = async (repo) => {
    setSelectedRepo(repo);
    try {
      // Fetch the README from GitHub's API. Note: This returns a base64-encoded string.
      const response = await fetch(
        `https://api.github.com/repos/NoahtlHoff/${repo.name}/readme`
      );
      if (response.ok) {
        const data = await response.json();
        const decoded = atob(data.content);
        setReadme(decoded);
      } else {
        setReadme("No README available.");
      }
    } catch (error) {
      console.error("Error fetching README:", error);
      setReadme("No README available.");
    }
  };

  // Close the modal.
  const closeModal = () => {
    setSelectedRepo(null);
    setReadme("");
  };

  // Separate pinned repositories from the rest.
  const pinnedRepos = repos.filter((repo) =>
    pinnedRepoNames.includes(repo.name)
  );
  const otherRepos = repos.filter(
    (repo) => !pinnedRepoNames.includes(repo.name)
  );

  return (
    <main>
      <h1>PORTFOLIO</h1>

      {/* Pinned Projects Row */}
      {pinnedRepos.length > 0 && (
        <section className="pinned-cards">
          <h2>Pinned Projects</h2>
          <div className="cards-row">
            {pinnedRepos.map((repo) => (
              <div
                key={repo.id}
                className="card"
                onClick={() => handleCardClick(repo)}
                style={{ cursor: "pointer" }}
              >
                <h3>{repo.name}</h3>
                <p>Language: {repo.language || "N/A"}</p>
                {/* Prevent card click when clicking the GitHub link */}
                <a
                  href={repo.html_url}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Link
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* All Projects Rows */}
      <section className="all-cards">
        <h2>All Projects</h2>
        <div className="cards-row">
          {otherRepos.map((repo) => (
            <div
              key={repo.id}
              className="card"
              onClick={() => handleCardClick(repo)}
              style={{ cursor: "pointer" }}
            >
              <h3>{repo.name}</h3>
              <p>Language: {repo.language || "N/A"}</p>
              <a
                href={repo.html_url}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Link
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Popup */}
      {selectedRepo && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close" onClick={closeModal}>
              &times;
            </button>
            <h2>{selectedRepo.name}</h2>
            <div className="readme">
              <pre>{readme}</pre>
            </div>
            <a
              href={selectedRepo.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
