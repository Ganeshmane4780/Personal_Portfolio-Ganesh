import React from "react";

function Certificates() {
  const certificateData = [
    {
      title: "Full Stack Java Developer",
      platform: "SevenMentor & Training Pvt. Ltd.",
      date: "May 2025",
      link: "https://drive.google.com/file/d/1y_JC0DZ_zWWvEkpCXIxhf8v17mMDd3Dz/view?usp=drive_link", 
    },
    {
      title: "Software Engineering Virtual Internship",
      platform: "Accenture (via Forage)",
      date: "June 2025",
      link: "https://drive.google.com/file/d/1Ct-lWaXCkY6fBrWuRMwuejwP1Erf_Fhf/view", 
    },
    {
      title: "Technology Job Simulation",
      platform: "Deloitte (via Forage)",
      date: "June 2025",
      link: "https://drive.google.com/file/d/1M_KJud-oj3Wk86DA7Fb8Ndiq1rO2FbJ7/view", 
    },
    {
      title: "Frontend Developer (React)",
      platform: "HackerRank",
      date: "June 2025",
      link: "https://www.hackerrank.com/certificates/a224709bb7aa",
    },
    {
      title: "Full Stack Developer ",
      platform: "One Roadmap",
      date: "April 2025",
      link: "https://oneroadmap.io/skills/fs/certificate/CERT-1C7CED58",
    },
    {
      title: "Frontend Development ",
      platform: "One Roadmap",
      date: "April 2025",
      link: "https://oneroadmap.io/skills/frontend/certificate/CERT-92828B28",
    },
      {
      title: "React (Basics) Skill Certificate ",
      platform: "HackerRank",
      date: "Feb 2025",
      link: "https://www.hackerrank.com/certificates/9fcb7cf50033",
    },
  ];

  return (
    <div className="certificates-section" id="certificates">
      <h2 className="cert-section-title">📜 Certifications</h2>
      <div className="cert-grid">
        {certificateData.map((cert, index) => (
          <div className="cert-card" key={index}>
            <h3>{cert.title}</h3>
            <p><strong>{cert.platform}</strong></p>
            <p className="cert-date">{cert.date}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
