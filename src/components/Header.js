import { Bars3Icon } from "@heroicons/react/24/solid";
import About from "./About";

export default function Header() {
  return (
    <header id="Header" className="flex justify-between px-4 py-4 bg-black">
      <h1 className="font-bold text-lg">Portfolio.</h1>
      <nav className="hidden md:flex gap-2 px-10">
        <a href="/">Home</a>
        <a href="#Resume">About</a>
        <a href="#Skills">Skills</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
      </nav>
      <div className="md:hidden">
        <Bars3Icon className="h-6 w-6 text-white cursor-pointer" />
      </div>
    </header>
  );
}
