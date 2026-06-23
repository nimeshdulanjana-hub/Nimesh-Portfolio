// ============================================================
// Portfolio Data – J.P. Nimesh Dulanjana Jayasingha
// ============================================================

export const personalInfo = {
  name: "J.P. Nimesh Dulanjana Jayasingha",
  shortName: "Nimesh",
  title: "Computer Systems & Network Engineering Undergraduate",
  university: "SLIIT – Sri Lanka Institute of Information Technology",
  phone: "+94 711 016 478",
  email: "nimeshdulanajan590@gmail.com",
  linkedin: "https://www.linkedin.com/in/nimesh-jayasingha-3385b1350",
  github: "https://github.com/nimeshdulanjana-hub",
  cvUrl: "#",
  typingTitles: [
    "Computer Systems & Network Engineer",
    "Full-Stack Developer",
    "Network & Security Enthusiast",
    "IoT & AI/ML Developer",
    "Linux System Administrator",
    "SLIIT Undergraduate",
  ],
};

export const aboutStats = [
  { label: "Academic Projects", value: 9, suffix: "+" },
  { label: "Technical Skills", value: 20, suffix: "+" },
  { label: "Certifications", value: 4, suffix: "+" },
  { label: "Years of Learning", value: 3, suffix: "+" },
];

// ── Skills ──────────────────────────────────────────────────
export const skillCategories = [
  {
    id: "programming",
    label: "Programming",
    icon: "FaCode",
    skills: [
      { name: "Java", level: 80, icon: "FaJava" },
      { name: "Python", level: 75, icon: "FaPython" },
      { name: "C", level: 65, icon: "SiC" },
      { name: "SQL", level: 78, icon: "SiMysql" },
      { name: "HTML", level: 85, icon: "FaHtml5" },
      { name: "CSS", level: 80, icon: "FaCss3Alt" },
      { name: "JavaScript", level: 70, icon: "FaJs" },
    ],
  },
  {
    id: "networking",
    label: "Networking",
    icon: "FaNetworkWired",
    skills: [
      { name: "VLAN Configuration", level: 85, icon: "FaNetworkWired" },
      { name: "Inter-VLAN Routing", level: 82, icon: "FaRoute" },
      { name: "ACL Routing", level: 78, icon: "FaShieldAlt" },
      { name: "WLAN Configuration", level: 80, icon: "FaWifi" },
      { name: "Subnetting", level: 88, icon: "FaSitemap" },
      { name: "Routing Protocols", level: 75, icon: "FaRoute" },
      { name: "Network Design", level: 83, icon: "FaProjectDiagram" },
    ],
  },
  {
    id: "server",
    label: "Server Admin",
    icon: "FaServer",
    skills: [
      { name: "Linux Administration", level: 80, icon: "FaLinux" },
      { name: "CentOS", level: 75, icon: "SiCentos" },
      { name: "Ubuntu", level: 78, icon: "SiUbuntu" },
      { name: "Samba Domain Controller", level: 72, icon: "FaServer" },
      { name: "Zimbra Mail Server", level: 68, icon: "FaEnvelopeOpen" },
      { name: "DHCP Configuration", level: 80, icon: "FaNetworkWired" },
    ],
  },
  {
    id: "soft",
    label: "Soft Skills",
    icon: "FaUsers",
    skills: [
      { name: "Leadership", level: 85, icon: "FaStar" },
      { name: "Project Management", level: 80, icon: "FaTasks" },
      { name: "Time Management", level: 83, icon: "FaClock" },
      { name: "Team Collaboration", level: 90, icon: "FaUsers" },
      { name: "Problem Solving", level: 87, icon: "FaBrain" },
    ],
  },
];

// ── Projects ─────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "Home Automation System with IoT",
    shortDesc: "Smart home automation using IoT sensors and devices.",
    description:
      "Developed a home automation system using IoT concepts under the Fundamentals of Computing module. The project focused on automating home devices and improving convenience through smart technology including temperature sensors, motion detectors, and smart lighting controls.",
    category: "IoT",
    tags: ["IoT", "Sensors", "Automation", "Smart Devices"],
    image: "iot",
    gradient: "linear-gradient(135deg, #0f3460 0%, #16213e 50%, #0e4d3a 100%)",
    accentColor: "#00d4aa",
    github: "https://github.com/nimeshdulanjana-hub",
    demo: "#",
  },
  {
    id: 2,
    title: "Company Network Design",
    shortDesc: "Enterprise network with subnetting, routing, and planning.",
    description:
      "Designed a complete company network under the Data Communication and Networking module. The project included IP addressing, subnetting, routing protocol configuration, VLAN setup, and comprehensive network planning for a multi-department organization.",
    category: "Networking",
    tags: ["Subnetting", "Routing", "VLAN", "Network Design", "Packet Tracer"],
    image: "network",
    gradient: "linear-gradient(135deg, #0a1628 0%, #1a3a6b 50%, #0d2444 100%)",
    accentColor: "#00b4d8",
    github: "https://github.com/nimeshdulanjana-hub",
    demo: "#",
  },
  {
    id: 3,
    title: "Java Toy Store Web Application",
    shortDesc: "Full-featured e-commerce toy store built with Java.",
    description:
      "Created a Java-based web application for a toy store including product catalog, shopping functionality, and customer management. Built using Java servlets, JSP, and a relational database for data persistence.",
    category: "Software",
    tags: ["Java", "Web Development", "JSP", "Database"],
    image: "java",
    gradient: "linear-gradient(135deg, #1a0533 0%, #3d1a78 50%, #1a0533 100%)",
    accentColor: "#a855f7",
    github: "https://github.com/nimeshdulanjana-hub",
    demo: "#",
  },
  {
    id: 4,
    title: "Road Mark Detection using AI/ML",
    shortDesc: "Python ML model for road marking detection using computer vision.",
    description:
      "Trained an AI/ML model using Python for road mark detection. Completed during Year 2 Semester 2, this project applied machine learning techniques with OpenCV for image-based road marking recognition, achieving accurate detection of lane boundaries and road markings.",
    category: "AI/ML",
    tags: ["Python", "Machine Learning", "Computer Vision", "OpenCV"],
    image: "aiml",
    gradient: "linear-gradient(135deg, #0d1117 0%, #1a3a2a 50%, #0d2217 100%)",
    accentColor: "#22c55e",
    github: "https://github.com/nimeshdulanjana-hub",
    demo: "#",
  },
  {
    id: 5,
    title: "Ticket Management System",
    shortDesc: "OOP-based ticket system with MS SQL Server backend.",
    description:
      "Developed a ticket management system under the Object Oriented Programming module. The project used Microsoft SQL Server as the database and applied OOP concepts including inheritance, polymorphism, and encapsulation for a clean software architecture.",
    category: "Software",
    tags: ["OOP", "Java", "Microsoft SQL Server", "JDBC"],
    image: "ticket",
    gradient: "linear-gradient(135deg, #1a0e2e 0%, #2d1b5e 50%, #1a0e2e 100%)",
    accentColor: "#818cf8",
    github: "https://github.com/nimeshdulanjana-hub",
    demo: "#",
  },
  {
    id: 6,
    title: "Database Design & Development",
    shortDesc: "Complete database system with ER diagrams and normalization.",
    description:
      "Designed and developed a database system under the Database Design and Development module. The project included comprehensive database planning, ER diagram design, normalization to 3NF, table creation with constraints, and complex SQL queries and stored procedures.",
    category: "Software",
    tags: ["SQL", "ER Diagrams", "Database Normalization", "MySQL"],
    image: "database",
    gradient: "linear-gradient(135deg, #0c1a2e 0%, #1a3350 50%, #0c1a2e 100%)",
    accentColor: "#38bdf8",
    github: "https://github.com/nimeshdulanjana-hub",
    demo: "#",
  },
  {
    id: 7,
    title: "Virtual Server-Client Environment",
    shortDesc: "Full Linux server-client setup with Samba, Zimbra, and DHCP.",
    description:
      "Created a virtual server-client environment under Network Management and Administration. The server was configured using CentOS and clients using Ubuntu. The system included Samba Domain Controller for file sharing, Zimbra Mail Server for email, and DHCP for dynamic IP assignment.",
    category: "Server",
    tags: ["CentOS", "Ubuntu", "Samba", "Zimbra Mail", "DHCP", "Linux"],
    image: "server",
    gradient: "linear-gradient(135deg, #0a1f0a 0%, #1a3d1a 50%, #0a1f0a 100%)",
    accentColor: "#4ade80",
    github: "https://github.com/nimeshdulanjana-hub",
    demo: "#",
  },
  {
    id: 8,
    title: "WLAN & LAN for Bepaya IT Company",
    shortDesc: "Enterprise wireless & wired network for 120+ devices.",
    description:
      "Designed and implemented a WLAN and LAN network for Bepaya IT Company under Data Communication and Wireless Networks. The project included VLAN separation for different departments, inter-VLAN routing, wireless access point configuration, and network management for over 120 devices.",
    category: "Networking",
    tags: ["WLAN", "VLAN", "Inter-VLAN Routing", "Enterprise Network", "120+ Devices"],
    image: "wlan",
    gradient: "linear-gradient(135deg, #0d1b3e 0%, #1a2f6e 50%, #0d1b3e 100%)",
    accentColor: "#60a5fa",
    github: "https://github.com/nimeshdulanjana-hub",
    demo: "#",
  },
  {
    id: 9,
    title: "Vehicle KM Monitoring System",
    shortDesc: "Spring Boot fleet management with service scheduling.",
    description:
      "A comprehensive vehicle KM monitoring and service management system built with Spring Boot. Features include fleet dashboard, service schedule tracking, mileage logging, maintenance alerts, and MySQL database integration for complete fleet management.",
    category: "Software",
    tags: ["Spring Boot", "Java", "MySQL", "REST API", "Fleet Management"],
    image: "vehicle",
    gradient: "linear-gradient(135deg, #1a0a0a 0%, #3d1515 50%, #1a0a0a 100%)",
    accentColor: "#f87171",
    github: "https://github.com/nimeshdulanjana-hub",
    demo: "#",
  },
];

// ── Gallery ──────────────────────────────────────────────────
export const galleryCategories = ["All", "Networking", "Server Administration", "Software Development", "AI & Machine Learning", "IoT"];

export const galleryItems = [
  { id: 1, category: "Networking", title: "Company Network Topology", image: "network", description: "Cisco Packet Tracer network design" },
  { id: 2, category: "Networking", title: "WLAN & LAN Design", image: "wlan", description: "Bepaya IT enterprise wireless network" },
  { id: 3, category: "Server Administration", title: "Virtual Server Setup", image: "server", description: "CentOS server configuration" },
  { id: 4, category: "Software Development", title: "Toy Store UI", image: "java", description: "Java web application interface" },
  { id: 5, category: "Software Development", title: "Ticket Management System", image: "ticket", description: "OOP ticket system dashboard" },
  { id: 6, category: "Software Development", title: "Database Schema", image: "database", description: "ER diagram and normalization" },
  { id: 7, category: "AI & Machine Learning", title: "Road Mark Detection", image: "aiml", description: "AI/ML model output visualization" },
  { id: 8, category: "IoT", title: "Home Automation Dashboard", image: "iot", description: "Smart home IoT control panel" },
];

// ── Education ────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    institution: "Henegama National College",
    degree: "Secondary Education – G.C.E. Advanced Level",
    period: "Completed",
    description: "Completed secondary education with a strong foundation in Mathematics, Science, and Technology subjects.",
    icon: "FaSchool",
    type: "school",
  },
  {
    id: 2,
    institution: "SLIIT – Sri Lanka Institute of Information Technology",
    degree: "Bachelor of Science (Honours)",
    field: "Computer Systems and Network Engineering",
    period: "2023 – Present",
    description: "Pursuing a comprehensive degree covering computer systems architecture, network engineering, software development, database systems, IoT, and AI/ML. Actively involved in academic projects spanning networking, server administration, and software development.",
    icon: "FaGraduationCap",
    type: "university",
    current: true,
  },
];

// ── Certifications ───────────────────────────────────────────
export const certifications = [
  {
    id: 1,
    title: "CCNA",
    issuer: "Cisco Networking Academy",
    status: "In Progress",
    description: "Cisco Certified Network Associate – covers networking fundamentals, routing & switching, and network security.",
    icon: "SiCisco",
    color: "#00bceb",
    category: "Networking",
  },
  {
    id: 2,
    title: "Network+ Certification",
    issuer: "CompTIA",
    status: "Planned",
    description: "CompTIA Network+ covers core networking concepts, protocols, security, troubleshooting, and infrastructure.",
    icon: "FaNetworkWired",
    color: "#e2231a",
    category: "Networking",
  },
  {
    id: 3,
    title: "Python Programming",
    issuer: "Online Platform",
    status: "Completed",
    description: "Comprehensive Python programming certification covering OOP, data structures, algorithms, and ML libraries.",
    icon: "FaPython",
    color: "#3776ab",
    category: "Programming",
  },
  {
    id: 4,
    title: "Linux Essentials",
    issuer: "Linux Professional Institute",
    status: "Planned",
    description: "LPI Linux Essentials covers command line skills, scripting, system administration, and security fundamentals.",
    icon: "FaLinux",
    color: "#fcc624",
    category: "Server",
  },
];
