import ProjectCard from "./ProjectCard";
import jammming from "../../public/images/jammming.png";
import oasisApp from "../../public/images/wild-oasis-app.png";
import oasisWebsite from "../../public/images/wild-oasis-website.png";
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
        />
        <ProjectCard
          src={oasisApp}
          alt="Wild oasis app screenshot"
          href="https://the-wild-oasis-app-wine.vercel.app/dashboard"
          projectName="Wild Oasis App"
          description="A full-featured hotel management application built for internal use by hotel employees. This app helps staff manage cabins, bookings, and guests efficiently — all in a modern, responsive interface with dark mode support."
        />
        <ProjectCard
          src={oasisWebsite}
          alt="Wild oasis website screenshot"
          href="https://the-wild-oasis-website-ten-steel.vercel.app/"
          projectName="Wild Oasis Website"
          description="Welcome to Wild Oasis, a modern web application for exploring, booking, and managing your stay at our cozy wilderness cabins."
        />
      </div>
    </div>
  );
}
