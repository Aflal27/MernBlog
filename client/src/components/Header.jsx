import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar>
      <Link
        to={"/"}
        className="text-sm sm:text-xl whitespace-nowrap font-semibold dark:text-white">
        <span
          className=" bg-gradient-to-r from-indigo-500 via-purple-500
         to-pink-500 rounded-lg text-white px-2 py-1">
          AFLAL
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={IoSearchOutline}
          className=" hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden " color="gray" pill>
        <IoSearchOutline />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 lg:hidden " color="gray" pill>
          <IoIosMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue" outline>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/project"} as={"div"}>
          <Link to="/project">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
