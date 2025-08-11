import ProjectCard from "./ProjectCard";
import jammming from "../../public/images/jammming.png";
import oasisApp from "../../public/images/wild-oasis-app.png";
import oasisWebsite from "../../public/images/wild-oasis-website.png";
import budgetPlanner from "../../public/images/budget-planner.png";
export default function Projects() {
  return (
    <div className="about-div">
      <h3>PROJECTS</h3>
      <div className="flex flex-col">
        <ProjectCard
          src={jammming}
          alt="Jammming app screenshot"
          href="https://jammming-final.netlify.app/"
          projectName="Jammming"
          description="A React web application that integrates with the Spotify API allowing users to search for songs, create custom playlists, and save them directly to their Spotify account — all in a sleek, interactive interface."
          stack={["React", "Spotify Auth", "CSS Modules", "Netlify"]}
        />
        <ProjectCard
          src={oasisApp}
          alt="Wild oasis app screenshot"
          href="https://the-wild-oasis-app-wine.vercel.app/dashboard"
          projectName="Wild Oasis App"
          description="A full-featured hotel management application built for internal use by hotel employees. This app helps staff manage cabins, bookings, and guests efficiently — all in a modern, responsive interface with dark mode support."
          stack={["React", "Supabase", "React query", "Vercel"]}
        />
        <ProjectCard
          src={oasisWebsite}
          alt="Wild oasis website screenshot"
          href="https://the-wild-oasis-website-ten-steel.vercel.app/"
          projectName="Wild Oasis Website"
          description="Welcome to Wild Oasis, a modern web application for exploring, booking, and managing your stay at our cozy wilderness cabins."
          stack={[
            "React",
            "Next.js",
            "Next Auth",
            "Tailwind CSS",
            "Context API",
          ]}
        />
        <ProjectCard
          src={budgetPlanner}
          alt="Budget Planner app screenshot"
          href="https://budget-planner-j2qi.vercel.app/"
          projectName="Budget Planner"
          description="A modern budgeting application that helps users track income, manage expenses, and analyze their financial activity over time. Built with a responsive UI, intuitive charts, and secure user authentication."
          stack={["React", "Next.js", "Next Auth", "Tailwind CSS", "Mongo DB"]}
        />
      </div>
    </div>
  );
}
