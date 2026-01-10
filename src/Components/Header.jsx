import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="sticky top-0 z-50 bg-violet-600 text-white shadow-md transition-all duration-300">
            <div className="flex h-[14vh] flex-col items-center justify-between p-4 px-8 lg:flex-row xl:px-24">
                <h1 className="text-3xl font-extrabold tracking-tight">
                    Favourite Student App
                </h1>
                <nav className="flex justify-center gap-8 text-lg font-medium text-violet-100">
                    <NavLink
                        to="/"
                        className="transition-colors hover:text-white"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="forms"
                        className="transition-colors hover:text-white"
                    >
                        Add Student
                    </NavLink>
                    <NavLink
                        to="favourites"
                        className="transition-colors hover:text-white"
                    >
                        Favorite Students
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
