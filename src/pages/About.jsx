export default function About() {
    return (
      <main>
        <h1>ABOUT</h1>
        <section className="portfolio">
          <div className="card" data-href="cv.html">
            <h2>CV - Noah Hoff</h2>
            <p>Noah Hoff CV, Work experiences and projects.</p>
            <a href="../Docs/CV.pdf" className="download-link">Download as PDF</a>
          </div>
  
          <div className="card" data-href="about-me.html">
            <h2>About Me</h2>
            <p>Who is Noah Hoff? Hobbies & Personal Info</p>
            <a href="#" className="download-link">Download as PDF</a>
          </div>
  
          <div className="card" data-href="website-doc.html">
            <h2>About Website</h2>
            <p>An AI written documentation of how and why this website was created.</p>
            <a href="../Docs/Website doc.pdf" className="download-link">Download the PDF</a>
          </div>
        </section>
      </main>
    );
  }
  