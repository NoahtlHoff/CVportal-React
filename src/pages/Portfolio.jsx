import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/NoahtlHoff/repos")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <main>
      <section className="portfolio-section">
          <h1>PORTFOLIO</h1>
          <div className="portfolio">
            {projects.map((p) => (
              <article
                className="card"
                key={p.name}
                onClick={() => setSelectedProject(p)}
              >
                {/* <div className="card-head">
                  <img
                    src="https://picsum.photos/200/300"
                    alt="Project thumbnail"
                  />
                </div> */}
                <div className="card-body">
                  <h3>{p.name}</h3>
                  <p>Language: {p.language || "Unknown language"}</p>
                  <a
                    href={p.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View on GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {selectedProject && (
        <div className="modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setSelectedProject(null)}>
              &times;
            </button>
            <h2>{selectedProject.name}</h2>
            <p>
              {selectedProject.description ||
                "No additional details available."}
            </p>
            <a
              href={selectedProject.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      )}
    </>
  );
}
