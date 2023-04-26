import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-router-dom'
const Home = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className=" text-white bg-[#051f48] p-2">
        <Nav>
          <Navbar.Brand className="text-4xl mt-1 me-auto">Logo</Navbar.Brand>

          <div
            className={`absolute  font-semibold flex flex-col text-lg items-center ${
              click
                ? "top-[12%] p-2 left-0 duration-500"
                : "-top-[100%] p-2 duration-500"
            } w-full bg-[#051f48] md:h-[40px]   md:static md:w-auto  md:flex md:flex-row md:text-lg md:mt-2 `}
          >
            <Link className="text-white me-3">Home</Link>
            <Link className="text-white me-3">About us</Link>
            <Link className="text-white me-3">Our goals</Link>
            <Link className="text-white me-3">Services</Link>
            <Link className="text-white me-3">Contact</Link>
            <Link to='Register' className="bg-[#00C6C1] focus:bg-[#00C6C1] rounded cursor-pointer w-1/2 text-center md:w-auto  text-[#051f48] font-normal hover:text-[#051f48] hover:bg-[#00C6C1]  p-1">
              Get started
            </Link>
          </div>
          <div className="md:hidden mt-1 cursor-pointer" onClick={handleClick}>
            {click ? (
              <FaTimes size={25}></FaTimes>
            ) : (
              <FaBars size={25}></FaBars>
            )}
          </div>
        </Nav>
      </div>
    </>
  );
};

export default Home;
