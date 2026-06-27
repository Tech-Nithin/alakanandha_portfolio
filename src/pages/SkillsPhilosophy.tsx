// import { motion } from "framer-motion";
// import FlowingMenu from "./FlowingMenu";

// const skillCategories = [
//   {
//     link: "#",
//     text: "Business Intelligence & Visualization",
//     items: [
//       { name: "Power BI", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" },
//       { name: "Tableau", url: "https://img.icons8.com/color/48/tableau-software.png" },
//       { name: "SSRS", url: "https://img.icons8.com/color/48/microsoft-sql-server.png" },
//       { name: "Power Query & DAX", url: "https://img.icons8.com/color/48/power-bi.png" },
//       { name: "Power BI Service & Gateway", url: "https://img.icons8.com/color/48/power-bi.png" },
//       { name: "Excel PivotTables & Power Pivot", url: "https://img.icons8.com/color/48/microsoft-excel-2019.png" },
//       { name: "KPI Dashboards & Self-Service BI", url: "https://img.icons8.com/color/48/combo-chart.png" }
//     ]
//   },
//   {
//     link: "#",
//     text: "SQL & Data Modeling",
//     items: [
//       { name: "SQL & T-SQL & PL/SQL", url: "https://img.icons8.com/color/48/sql.png" },
//       { name: "SQL Server & Azure SQL", url: "https://img.icons8.com/color/48/microsoft-sql-server.png" },
//       { name: "MySQL & PostgreSQL & Oracle", url: "https://img.icons8.com/color/48/mysql-logo.png" },
//       { name: "Stored Procedures & Views", url: "https://img.icons8.com/color/48/database.png" },
//       { name: "CTEs, Window Functions & Joins", url: "https://img.icons8.com/color/48/table.png" },
//       { name: "Query Optimization & Indexing", url: "https://img.icons8.com/color/48/speed.png" },
//       { name: "Star Schema & Fact/Dim Tables", url: "https://img.icons8.com/color/48/data-configuration.png" }
//     ]
//   },
//   {
//     link: "#",
//     text: "ETL, Tools & Methods",
//     items: [
//       { name: "SSIS & Azure Data Factory", url: "https://img.icons8.com/color/48/azure-1.png" },
//       { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
//       { name: "ETL Pipelines & Workflows", url: "https://img.icons8.com/color/48/data-transfer.png" },
//       { name: "Data Cleaning & Validation", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
//       { name: "Git & GitHub & SSMS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
//       { name: "Copilot & AI Analytics", url: "https://img.icons8.com/color/48/artificial-intelligence.png" },
//       { name: "Data Governance & HIPAA", url: "https://img.icons8.com/color/48/security-shield-green.png" },
//       { name: "UAT Support & Agile/Scrum", url: "https://img.icons8.com/color/48/jira.png" }
//     ]
//   }
// ];

// const SkillsPhilosophy = () => {
//   return (
//     <section className="min-h-screen bg-white text-black font-sans flex flex-col justify-center">
//       <div className="w-full px-6 md:px-12 lg:px-16 pt-24 pb-12 md:pt-12 md:pb-12 bg-white z-10 md:flex-shrink-0">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="grid grid-cols-1 md:grid-cols-5 gap-y-8"
//         >
//           <div className="md:col-span-1">
//             <h2 className="text-xs font-bold uppercase tracking-widest">Skills & Philosophy</h2>
//           </div>
//           <div className="md:col-span-4">
//             <blockquote className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-tight">
//               "The function of good software is to make the complex appear to be simple."
//             </blockquote>
//             <p className="mt-6">— Grady Booch</p>
//           </div>
//         </motion.div>
//       </div>

//       <div className="w-full border-t border-black relative overflow-hidden">
//         <FlowingMenu
//           items={skillCategories}
//           speed={3}
//           marqueeBgColor="#000000"
//         />
//       </div>
//     </section>
//   );
// };

// export default SkillsPhilosophy;























































// import { motion } from "framer-motion";
// import FlowingMenu from "./FlowingMenu";

// const skillCategories = [
//   {
//     link: "#",
//     text: "Agile, Scrum & Delivery",
//     items: [
//       { name: "Scrum & Kanban", url: "https://img.icons8.com/color/48/jira.png" },
//       { name: "Sprint Planning & Retrospectives", url: "https://img.icons8.com/color/48/conference-call.png" },
//       { name: "Backlog Refinement", url: "https://img.icons8.com/color/48/task-planning.png" },
//       { name: "Release & Deployment Planning", url: "https://img.icons8.com/color/48/rocket.png" },
//       { name: "RAID Logs & Risk Tracking", url: "https://img.icons8.com/color/48/high-risk.png" },
//       { name: "UAT Coordination", url: "https://img.icons8.com/color/48/test-passed.png" },
//       { name: "Velocity & Burndown Tracking", url: "https://img.icons8.com/color/48/increase.png" }
//     ]
//   },
//   {
//     link: "#",
//     text: "BI, Reporting & Analytics",
//     items: [
//       { name: "Power BI", url: "https://img.icons8.com/color/48/power-bi.png" },
//       { name: "Tableau", url: "https://img.icons8.com/color/48/tableau-software.png" },
//       { name: "SQL & T-SQL", url: "https://img.icons8.com/color/48/sql.png" },
//       { name: "Excel & Power Query", url: "https://img.icons8.com/color/48/microsoft-excel-2019.png" },
//       { name: "KPI & Executive Dashboards", url: "https://img.icons8.com/color/48/combo-chart.png" },
//       { name: "SLA & Agile Metrics Reporting", url: "https://img.icons8.com/color/48/scorecard.png" },
//       { name: "Root Cause & Trend Analysis", url: "https://img.icons8.com/color/48/graph-report.png" }
//     ]
//   },
//   {
//     link: "#",
//     text: "Tools, Platforms & Methods",
//     items: [
//       { name: "Jira & Rally & Confluence", url: "https://img.icons8.com/color/48/jira.png" },
//       { name: "ServiceNow", url: "https://img.icons8.com/color/48/service.png" },
//       { name: "DocuSign CLM & DocuGen", url: "https://img.icons8.com/color/48/contract.png" },
//       { name: "Salesforce CPQ", url: "https://img.icons8.com/color/48/salesforce.png" },
//       { name: "SharePoint", url: "https://img.icons8.com/color/48/microsoft-sharepoint-2019.png" },
//       { name: "AI-Assisted Workflow Design", url: "https://img.icons8.com/color/48/artificial-intelligence.png" },
//       { name: "Azure Data Factory & SSIS", url: "https://img.icons8.com/color/48/azure-1.png" },
//       { name: "Agile Coaching & Scrum of Scrums", url: "https://img.icons8.com/color/48/training.png" }
//     ]
//   }
// ];

// const SkillsPhilosophy = () => {
//   return (
//     <section className="min-h-screen bg-white text-black font-sans flex flex-col justify-center">
//       <div className="w-full px-6 md:px-12 lg:px-16 pt-24 pb-12 md:pt-12 md:pb-12 bg-white z-10 md:flex-shrink-0">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="grid grid-cols-1 md:grid-cols-5 gap-y-8"
//         >
//           <div className="md:col-span-1">
//             <h2 className="text-xs font-bold uppercase tracking-widest">Skills & Philosophy</h2>
//           </div>
//           <div className="md:col-span-4">
//             <blockquote className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-tight">
//               "The function of good software is to make the complex appear to be simple."
//             </blockquote>
//             <p className="mt-6">— Grady Booch</p>
//           </div>
//         </motion.div>
//       </div>

//       <div className="w-full border-t border-black relative overflow-hidden">
//         <FlowingMenu
//           items={skillCategories}
//           speed={3}
//           marqueeBgColor="#000000"
//         />
//       </div>
//     </section>
//   );
// };

// export default SkillsPhilosophy;










































import { motion } from "framer-motion";
import FlowingMenu from "./FlowingMenu";

// Inline SVG data URIs — no CDN dependency, guaranteed to render
const icons = {
  javascript: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23F7DF1E'%3E%3Cpath d='M3 3h18v18H3V3zm11.525 10.74c-.06-.88-.53-1.57-1.7-1.57-.96 0-1.42.53-1.42 1.25 0 1 .73 1.34 1.95 1.83 1.63.66 2.76 1.15 2.76 3.12 0 1.93-1.46 3.16-3.8 3.16-2.58 0-3.78-1.12-3.95-3.08h1.96c.07.96.65 1.48 1.9 1.48 1 0 1.7-.45 1.7-1.37 0-1.04-.6-1.37-2.02-1.92-1.57-.59-2.7-1.22-2.7-3 0-1.74 1.32-3 3.42-3 2.1 0 3.32.96 3.6 2.53h-1.95z'/%3E%3C/svg%3E",
  java: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ED2E38' stroke-width='2'%3E%3Cpath d='M6 15c0 3 3 5 6 5s6-2 6-5'/%3E%3Cpath d='M8 12c0 2 2 3 4 3s4-1 4-3'/%3E%3Cpath d='M10 8c1-2 2-3 3-5m-5 4c1-1 2-2 2-4'/%3E%3C/svg%3E",
  react: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2361DAFB' stroke-width='2'%3E%3Cellipse cx='12' cy='12' rx='10' ry='4' transform='rotate(30 12 12)'/%3E%3Cellipse cx='12' cy='12' rx='10' ry='4' transform='rotate(90 12 12)'/%3E%3Cellipse cx='12' cy='12' rx='10' ry='4' transform='rotate(150 12 12)'/%3E%3Ccircle cx='12' cy='12' r='2' fill='%2361DAFB'/%3E%3C/svg%3E",
  node: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23339933' stroke-width='2'%3E%3Cpath d='M12 2L3 7v10l9 5 9-5V7l-9-5z'/%3E%3Cpath d='M12 22V12m0 0L3 7m9 5l9-5'/%3E%3C/svg%3E",
  database: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23336791' stroke-width='2'%3E%3Cellipse cx='12' cy='5' rx='9' ry='3'/%3E%3Cpath d='M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5'/%3E%3Cpath d='M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3'/%3E%3C/svg%3E",
  cloud: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230EA5E9' stroke-width='2'%3E%3Cpath d='M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z'/%3E%3C/svg%3E",
  api: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238B5CF6' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3Ccircle cx='5' cy='12' r='2'/%3E%3Ccircle cx='19' cy='12' r='2'/%3E%3Cpath d='M7 12h2m6 0h2'/%3E%3C/svg%3E",
  code: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2310B981' stroke-width='2'%3E%3Cpolyline points='16 18 22 12 16 6'/%3E%3Cpolyline points='8 6 2 12 8 18'/%3E%3Cline x1='14' y1='4' x2='10' y2='20'/%3E%3C/svg%3E",
  git: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23F05032' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Ccircle cx='12' cy='8' r='2'/%3E%3Ccircle cx='12' cy='16' r='2'/%3E%3Cpath d='M12 10v4'/%3E%3C/svg%3E",
};

const skillCategories = [
  {
    link: "#",
    text: "Frontend & Programming",
    items: [
      { name: "JavaScript (ES6+)", url: icons.javascript },
      { name: "Java", url: icons.java },
      { name: "React.js", url: icons.react },
      { name: "Responsive UI Design", url: icons.code },
      { name: "Component-Based Architecture", url: icons.code },
      { name: "State Management & Optimization", url: icons.api }
    ]
  },
  {
    link: "#",
    text: "Backend & Database",
    items: [
      { name: "Node.js", url: icons.node },
      { name: "Supabase & Storage", url: icons.database },
      { name: "Neon (PostgreSQL)", url: icons.database },
      { name: "RESTful API Development", url: icons.api },
      { name: "Database Design & Optimization", url: icons.database },
      { name: "Server-Side Logic", url: icons.code }
    ]
  },
  {
    link: "#",
    text: "Cloud, Tools & Practices",
    items: [
      { name: "Vercel (CI/CD)", url: icons.cloud },
      { name: "GitHub & Version Control", url: icons.git },
      { name: "Cloud-Based Hosting", url: icons.cloud },
      { name: "Postman API Testing", url: icons.api },
      { name: "Clean Code Principles", url: icons.code },
      { name: "Agile Development (Git)", url: icons.code }
    ]
  }
];

const SkillsPhilosophy = () => {
  return (
    <section className="min-h-screen bg-white text-black font-sans flex flex-col justify-center">
      <div className="w-full px-6 md:px-12 lg:px-16 pt-24 pb-12 md:pt-12 md:pb-12 bg-white z-10 md:flex-shrink-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-y-8"
        >
          <div className="md:col-span-1">
            <h2 className="text-xs font-bold uppercase tracking-widest">Skills & Philosophy</h2>
          </div>
          <div className="md:col-span-4">
            <blockquote className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-tight">
              "The function of good software is to make the complex appear to be simple."
            </blockquote>
            <p className="mt-6">— Grady Booch</p>
          </div>
        </motion.div>
      </div>

      <div className="w-full border-t border-black relative overflow-hidden">
        <FlowingMenu
          items={skillCategories}
          speed={3}
          marqueeBgColor="#000000"
        />
      </div>
    </section>
  );
};

export default SkillsPhilosophy;