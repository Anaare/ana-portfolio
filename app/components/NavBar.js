import DarkMode from "./DarkMode";
import { ThemeToggle } from "./theme-toggle";

export default function NavBar() {
  return (
    <nav className="flex justify-end m-10">
      <ThemeToggle />
    </nav>
  );
}
