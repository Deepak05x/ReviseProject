import ThemeToggler from "./ThemeToggler";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="w-full h-20 bg-white dark:bg-black flex flex-row justify-between px-10 py-10 drop-shadow-2xl">
            <div className="flex flex-row items-center">
                <h1 className="text-3xl  text-black dark:text-white font-bold ">
                    Learn<span className="text-purple-700 ">Exp</span>
                </h1>
            </div>
            <div className="md:flex flex-row justify-between items-center gap-4 ssm:hidden">
                <ThemeToggler />
                <Link href="/login" className="rounded-full px-4 py-2 text-2xl font-semibold text-purple-700 dark:text-white">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
