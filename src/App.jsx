import "./App.css";

function App() {
  const technicalSkills = [
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "C Programming",
    "Inter-VLAN Routing",
    "ACL Routing",
    "VLAN Configuration",
    "WLAN Configuration",
    "Linux Server Administration",
    "Samba Domain Server",
    "Zimbra Mail Server",
    "DHCP Configuration",
  ];

  const softSkills = [
    "Project Management",
    "Time Management",
    "Leadership Skills",
    "Teamwork",
    "Problem Solving",
  ];

  const projects = [
    {
      title: "Home Automation System with IoT",
      description:
        "Developed a home automation system using IoT concepts under the Fundamentals of Computing module. The project focused on automating home devices and improving convenience through smart technology.",
    },
    {
      title: "Company Network Design with Subnetting",
      description:
        "Designed a company network under the Data Communication and Networking module. The project included IP addressing, subnetting, routing, and network planning.",
    },
    {
      title: "Java-Based Toy Store Web Application",
      description:
        "Created a Java-based web design project for a toy store. The system included basic web pages and functionality for displaying toy store-related information.",
    },
    {
      title: "Road Mark Detection using AI/ML",
      description:
        "Trained an AI/ML model using Python for road mark detection. This project was completed during Year 2 Semester 2 and focused on applying machine learning techniques to image-based road marking recognition.",
    },
    {
      title: "Ticket Management System",
      description:
        "Developed a ticket management system under the Object Oriented Programming module. The project used Microsoft SQL Server as the database and applied object-oriented programming concepts.",
    },
    {
      title: "Database Design and Development Project",
      description:
        "Designed and developed a database system under the Database Design and Development module. The project included database planning, table creation, relationships, and SQL operations.",
    },
    {
      title: "Virtual Server-Client System",
      description:
        "Created a virtual server-client environment for a company under the Network Management and Administration module. The server was configured using CentOS and the client using Ubuntu. The system included Samba Domain Server, Zimbra Mail Server, and DHCP IP assigning.",
    },
    {
      title: "WLAN and LAN Network for Bepaya IT Company",
      description:
        "Created a WLAN and LAN network for Bepaya IT Company under the Data Communication and Wireless Networks module. The project included VLAN separation, inter-VLAN routing, and network configuration for more than 120 devices.",
    },
  ];

  return (
    <>
      <header>
        <nav>
          <h2 className="logo">Nimesh</h2>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="home">
        <div className="home-text">
          <h1>
            Hello, I'm <span>J.P. Nimesh Dulanjana Jayasingha</span>
          </h1>

          <h3>Computer Systems and Network Engineering Undergraduate</h3>

          <p>
            I am an undergraduate student at SLIIT, following a degree in
            Computer Systems and Network Engineering. I am interested in
            networking, system administration, software development, IoT,
            and AI/ML-based solutions.
          </p>

          <a href="#contact" className="btn">Contact Me</a>
        </div>

        <div className="home-image">
         <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Nimesh Profile" />
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>

        <p>
          I am passionate about computer networks, server administration,
          programming, database systems, and smart technology solutions.
          Through my academic projects, I have gained practical experience
          in VLAN configuration, inter-VLAN routing, ACL routing, WLAN
          configuration, Linux server-client environments, IoT systems,
          web development, and AI/ML model training.
        </p>
      </section>

      <section id="skills" className="skills">
        <h2>Technical Skills</h2>

        <div className="skill-container">
          {technicalSkills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>

        <h2 className="soft-title">Soft Skills</h2>

        <div className="skill-container">
          {softSkills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>

        <div className="project-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="education">
        <h2>Education</h2>

        <div className="education-card">
          <h3>BSc in Computer Systems and Network Engineering</h3>
          <p>Sri Lanka Institute of Information Technology - SLIIT</p>
          <p>Undergraduate Student</p>
        </div>

        <div className="education-card">
          <h3>School Education</h3>
          <p>Henegama National College</p>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Me</h2>

        <div className="contact-box">
          <p><strong>Phone:</strong> 0711016478</p>
          <p><strong>Email:</strong> nimeshdulanajan590@gmail.com</p>

          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/nimesh-jayasingha-3385b1350"
              target="_blank"
              rel="noreferrer"
            >
              View My LinkedIn Profile
            </a>
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/nimeshdulanjana-hub"
              target="_blank"
              rel="noreferrer"
            >
              View My GitHub Profile
            </a>
          </p>

          <p>
            <strong>Portfolio Code:</strong>{" "}
            <a
              href="https://github.com/nimeshdulanjana-hub/Nimesh-Portfolio"
              target="_blank"
              rel="noreferrer"
            >
              View Repository
            </a>
          </p>
        </div>

        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <p>© 2026 J.P. Nimesh Dulanjana Jayasingha. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
