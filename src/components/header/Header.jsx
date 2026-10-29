import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

function NavList() {
    return (
        <ul className="my-2 me-8 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="h5"
                color="white"
                className="p-1 font-medium">
                <NavLink to="/" className="flex items-center cursor-pointer hover:text-white transition-colors">
                    Products
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="h5"
                color="white"
                className="p-1 font-medium">
                <NavLink to="/cart" className="flex items-center cursor-pointer hover:text-white transition-colors">
                    Cart
                </NavLink>
            </Typography>
        </ul>
    );
}

function Header() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className="px-6 py-3 rounded-none bg-black bg-opacity-100 border-0">
            <div className="flex items-center justify-between">
                <Typography
                    as="h4"
                    variant="h4"
                    className="mr-4 py-1.5 text-white select-none">
                    Phantom Cart
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}

export default Header;