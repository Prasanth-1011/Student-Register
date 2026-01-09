import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="flex h-[16vh] w-full flex-col items-center justify-around p-2 lg:flex-row">
            <h1 className="text-3xl font-bold">Favourite Student App</h1>
            <nav className="flex justify-center gap-8 text-lg font-semibold">
                <NavLink to="/">Home</NavLink>
                <NavLink to="forms">Add Student</NavLink>
                <NavLink to="favourites">Favorite Students</NavLink>
            </nav>
        </header>
    );
}

export default Header;
