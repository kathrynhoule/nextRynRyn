import NavLink from "./NavLink";

export default function NavBar() {
    return (
        <nav className="flex flex-col gap-6">
        <NavLink href="/">
            Home
        </NavLink>

        <NavLink href="/about">
            About Me
        </NavLink>

        <NavLink href="/projects">
            Projects
        </NavLink>

        <NavLink href="/devlog">
            Dev Log
        </NavLink>

        <NavLink href="/contact">
            Contact
        </NavLink>
        </nav>
    )
};