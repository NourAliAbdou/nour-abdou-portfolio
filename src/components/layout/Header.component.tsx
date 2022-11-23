import React, { useState } from "react";
import { headerStyle } from "../../styles";
import { Images } from "../../constants";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [openMenu, setOpenMenu] = useState(false);

  const renderHire = () => (
    <a
      href="#hire"
      className=" hover:animate-bounce  grid justify-items-stretch  bg-main-col rounded-full  w-16 h-11   "
    >
      {/* <i className="uil uil-whatsapp my-float"></i> */}
      <p className=" self-center  text-center inline-block align-middle text-sm text-white">
        Hire me
      </p>
      <span className="flex h-3 w-3 fixed ">
        <span className="animate-ping absolute  inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
    </a>
  );
  const onClick = () => setOpenMenu(false);
  const renderListContent = () => (
    <ul className="justify-self-center navbar-nav ms-auto mb-2 mb-lg-0  ">
      <li className="nav-item ">
        <a className="nav-link" href="#">
          <i className="uil uil-estate text-black"></i> Home
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="#about"
        >
          <i className="uil uil-user text-black"></i> About
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#experience">
          <i className="uil uil-bag-alt text-black"></i> Experience
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#skills">
          <i className="uil uil-react text-black"></i>
          Spec. knowledge
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#blog">
          <i className="uil uil-pen text-black"></i> Blog
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">
          <i className="uil uil-calling text-black"></i> Contact
        </a>
      </li>
      {!isTabletOrMobile ? (
        <li className={`static nav-item w-16`}>{renderHire()}</li>
      ) : null}
    </ul>
  );
  const renderMenuButton = () => (
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className={headerStyle.navMenuButton}
      // className="navbar-toggler"
      aria-controls="navbar-default"
      aria-expanded="false"
      onClick={() => setOpenMenu(true)}
    >
      <span className="sr-only">Open main menu</span>
      {/* <img src={Images.Menu} className=" h-2" alt="Flowbite Logo" /> */}
      <span className="navbar-toggler-icon mr-2.5">
        <i className="uil uil-list-ul"></i>
      </span>
    </button>
  );
  const renderCloseMenuButton = () => (
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className={`mb-2 mt-9 mx-6 border-1 rounded-md py-1.5 border-black ${headerStyle.navMenuButton}`}
      aria-controls="navbar-default"
      aria-expanded="false"
      onClick={() => setOpenMenu(false)}
    >
      <span className="sr-only">Open main menu</span>
      <img src={` ${Images.MenuClose}`} className=" h-4" alt="Flowbite Logo" />
    </button>
  );
  const renderMobileButton = () => (
    <div className="d-flex">
      {renderHire()}
      {renderMenuButton()}
    </div>
  );
  const renderMenuList = () => (
    <div
      id="navbarSupportedContent"
      className=" justify-end items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="justify-end relative w-2/3 ">
        <div className="shadow-lg h-3/4 relative bg-bg outline-none focus:outline-none">
          <div className="flex md:hidden  justify-end">
            {renderCloseMenuButton()}
          </div>
          <div className=" md:hidden w-full ml-9 mb-5">
            {renderListContent()}
          </div>
        </div>
      </div>
    </div>
  );
  const renderNavList = () => (
    <div className={headerStyle.navListBox} id="navbar-default">
      <ul className={headerStyle.navList}>{renderListContent()}</ul>
    </div>
  );

  const renderNavBar = () => (
    <div className=" pb-0">
      <nav className=" navbar  navbar-expand-lg navbar-light bg-nav">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            ✨🌸 Nour
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="uil uil-list-ul"></i>
            </span>
          </button> */}
          <div>{isTabletOrMobile ? renderMobileButton() : renderNavList()}</div>
          {openMenu && renderMenuList()}
        </div>
      </nav>
    </div>
  );
  return (
    <nav id="header-sticky" className="sticky">
      {renderNavBar()}
    </nav>
  );
};

export default Header;
