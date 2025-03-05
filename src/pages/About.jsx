import React from 'react';
import cvData from '../components/cvData.json';
function About() {
  return (
    <main>
      <section id="about-me" className="Regular-Page">
        <h1>ABOUT ME</h1>
        <p>
          Hello, I'm Noah Hoff — a fullstack .NET developer student passionate about technology, problem-solving,
          and continuous learning. I worked for many years in the Foodmarket industry, which I loved, but felt it was time for a change.
        </p>
        <h3>Hobbies</h3>
        <p>
          Cooking is one of my main hobbies. Experimenting in the kitchen sparks creativity and always leads to
          delicious results.
        </p>
        <figure>
          <img src="/CVportal-React/Cooking.jpg" alt="Noah cooking a meal" />
          <figcaption>Cooking up something special in the kitchen</figcaption>
        </figure>
        <h3>Interests</h3>
        <p>
          I love solving problems and learning new things. This means that I enjoy everything from games, puzzles and math to gardening or carpentry.
        </p>
        <h3>Health</h3>
        <p>
          I used to be a rock climber, which I loved, but moved a little too far away from the place I trained at. To keep myself active without climbing I go to the gym 3 times a week, and try to get outside once a day.
        </p>
        <h3>Projects</h3>
        <p>
          Last year, a friend and I began watching movies together, discussing, and rating each film.
          Inspired by this hobby I decided to develop a movie-rating website that offers a broader score
          range (0-100) and a more intuitive way to sort movies. I'm currently working on this side project.
        </p>
        <h3>Personal & Relationships</h3>
        <p>
          I live in Trångsund with my girlfriend of 5 years, and our crazy cat Luna.
        </p>
      </section>

      <section id="cv" className="cv-section">
        <h1>Fullstack Dev.</h1>
        <p>
          Dedicated full-stack developer in training with a solid technical background and real-world leadership experience from retail operations. I am currently expanding my expertise in Microsoft .NET to build reliable, efficient software solutions.
        </p>
        <p><strong>Contact me:</strong></p>
        <p>Phone: (+46) 73-969 48 04</p>
        <p>Email: <a href="mailto:Noah.Hoff@outlook.com">Noah.Hoff@outlook.com</a></p>
      
        <h3 className="section-title">TECHNICAL SKILLS</h3>
        <p><strong>Programming Languages & Frameworks:</strong> C#, Entity Framework, ASP.NET Core, SQL, HTML/CSS, JavaScript, REACT</p>
        <p><strong>Tools & Environments:</strong> VS/VSCODE, SSMS, Github, Git</p>
        <p><strong>Other Software:</strong> Microsoft Word, PowerPoint, basic Excel skills, basic Adobe Photoshop.</p>

        <h3 className="section-title">RELEVANT EXPERIENCE</h3>
        {cvData.experience.map((job, index) => (
          <div key={index}>
            <h4>{job.title}</h4>
            {job.company && <p><strong>{job.company}</strong></p>}
            <p>{job.description}</p>
          </div>
        ))}

        <h3 className="section-title">EDUCATION</h3>
        {cvData.education.map((edu, index) => (
          <div key={index}>
            <h4>{edu.title}</h4>
            {edu.description && <p>{edu.description}</p>}
          </div>
        ))}

        <p>For further inquiries, please reach out via phone or email.</p>
        <p>Sincerely,</p>
        <p>Noah Hoff</p>
      </section>

      {/* <section id="cv" className="cv-section">
    <h1>Fullstack Dev.</h1>
    <p>
      Dedicated full-stack developer in training with a solid technical background and real-world leadership experience from retail operations. I am currently expanding my expertise in Microsoft .NET to build reliable, efficient software solutions.
    </p>
    <p><strong>Contact me:</strong></p>
    <p>Phone: (+46) 73-969 48 04</p>
    <p>Email: <a href="mailto:Noah.Hoff@outlook.com">Noah.Hoff@outlook.com</a></p>
 
    <h3 className="section-title">TECHNICAL SKILLS</h3>
    <p><strong>Programming Languages &amp; Frameworks:</strong> C#, Entity Framework, ASP.NET Core, SQL, HTML/CSS, JavaScript, REACT</p>
    <p><strong>Tools &amp; Environments:</strong> VS/VSCODE, SSMS, Github, Git</p>
    <p><strong>Other Software:</strong> Microsoft Word, PowerPoint, basic Excel skills, basic Adobe Photoshop.</p>

    <h3 className="section-title">RELEVANT EXPERIENCE</h3>
    <h4>Shift Supervisor (2016 – Present)</h4>
    <p><strong>Hemköp, Huddinge</strong></p>
    <ul>
      <li>Responsible for evening operations and closing procedures, including supervision of staff, handling daily financials, ensuring store security, and addressing any customer or operational issues.</li>
      <li>Develop strong problem-solving and leadership skills while maintaining excellent customer service standards.</li>
    </ul>
    <h4>Machine Operator (Aug 2013 – Dec 2015)</h4>
    <p><strong>Hallbergs-Sekrom, Täby</strong></p>
    <ul>
      <li>Managed a personal workstation, loading and maintaining machines, ensuring cleanliness and efficiency.</li>
    </ul>
    <h4>Entrepreneurship &amp; Projects</h4>
    <ul>
      <li>Organized school events for younger students, handling logistics and team coordination.</li>
      <li>Completed a course in entrepreneurship covering basic business economics, teamwork under pressure, and public speaking.</li>
    </ul>

    <h3 className="section-title">EDUCATION</h3>
    <h4>Ongoing: .NET Full-Stack Development</h4>
    <p>Comprehensive study of C#, ASP.NET Core, Entity Framework, SQL, and front-end frameworks.</p>
    <h4>Aug 2012 – Jun 2015: Upper Secondary Education, Åva Gymnasium – Täby</h4>
    <p>Technical Program with a focus on Information and Media Technology. Courses included Programming 1, Network Programming, and Web Development (HTML, CSS).</p>
    <h4>Aug 2002 – Jul 2012: Primary Education, Bålbroskolan – Rimbo</h4>

    <p>For further inquiries, please reach out via phone or email.</p>
    <p>Sincerely,</p>
    <p>Noah Hoff</p>
  </section> */}
    </main>
  );
}

export default About;
  