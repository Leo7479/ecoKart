import React, { useEffect, useState } from "react";
import { Handbag, Search, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // submenu animation using gsap
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const headerFiller = document.getElementById("header-filler");
    headerFiller.style.height = navbar.offsetHeight + "px";

    function handleShow(event) {
      try {
        const listItems = event.currentTarget.querySelectorAll("div ul li");
        if (listItems.length === 0) return;
        gsap.fromTo(
          listItems,
          { y: "-10px", opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.2,
            stagger: 0.08,
          }
        );
      } catch (e) {}
    }
    const menuOptions = document.querySelectorAll(".menu-option span");
    menuOptions.forEach((li) => {
      li.addEventListener("mouseenter", handleShow);
    });
  }, []);

  const toggleHamburgerMenu = () => {
    const menu = document.getElementById("lowernav");
    const spans = document.querySelectorAll("#hamburgerMenu span");
    if (menu.classList.contains("max-h-0")) {
      menu.classList.remove("max-h-0");
      menu.classList.add("max-h-[90vh]");
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
    } else {
      menu.classList.add("max-h-0");
      menu.classList.remove("max-h-[90vh]");
      spans[0].style.transform = "rotate(0deg) translate(0, 0)";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "rotate(0deg) translate(0, 0)";
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/browse?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <header className="w-full h-fit">
      <div id="header-filler" className="w-full h-full opacity-0"></div>
      <nav
        id="navbar"
        className="w-full h-fit flex flex-col bg-eco-sand fixed top-0 left-0 right-0 z-[100] shadow-lg"
      >
        {/* Upper Nav */}
        <div className="w-full h-max lg:h-fit gap-2 lg:gap-0 flex justify-between lg:justify-around items-center flex-wrap">
          {/* Logo Section */}
          <Link
            draggable="false"
            to="/"
            className="order-1 w-[20%] h-[50px] flex justify-center items-center pt-2"
          >
            <img
              draggable="false"
              src="/assets/images/logo.png"
              alt="Logo"
              className="w-[100%] lg:w-[40%] max-w-[40px] cursor-pointer"
            />
            <img
              draggable="false"
              src="/assets/images/logo-text.png"
              alt="Logo Text"
              className="w-[40%] cursor-pointer hidden lg:inline-block"
            />
          </Link>
          {/* Search Section */}
          <div className="w-full lg:w-[50%] h-full flex justify-around items-center min-w-[350px] order-3 lg:order-2 my-2 lg:my-0">
            <form
              onSubmit={handleSearch}
              className="w-[80%] lg:w-full max-w-[600px] h-10 flex justify-center items-center rounded-full border-2 border-solid border-slate-grey bg-eco-sand px-2"
            >
              <input
                placeholder={"Search here..."}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="rounded-lg w-full h-full bg-transparent cursor-text outline-none mx-2"
              />
              <button type="submit" className="cursor-pointer mr-2">
                <Search
                  strokeWidth={1}
                  color="var(--color-forest-green)"
                />
              </button>
            </form>
            <div
              id="hamburgerMenu"
              className="visible lg:hidden cursor-pointer"
              onClick={toggleHamburgerMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          {/* User Section */}
          <div className="w-[20%] h-[50px] flex justify-center md:gap-4 items-center order-2 lg:order-3">
            <span className="cursor-pointer">
              <Link to="/profile">
                <User
                  strokeWidth={2}
                  style={{ color: "var(--color-slate-gray)" }}
                  className="p-[2px] w-[30px] h-[30px]"
                />
              </Link>
            </span>
            <span className="cursor-pointer">
              <Link to="/cart">
                <Handbag
                  strokeWidth={2}
                  style={{ color: "var(--color-slate-gray)" }}
                  className="p-[2px] w-[30px] h-[30px]"
                />
              </Link>
            </span>
          </div>
        </div>
                {/* Lower Nav */}
                <div id ="lowernav" className="w-full max-h-0 h-[90vh] lg:h-[50%] lg:max-h-none flex justify-center items-center flex-row overflow-hidden lg:overflow-visible bg-eco-sand">
                    <ul className="w-full lg:h-full flex flex-col lg:flex-row justify-center items-start lg:items-center">
                        <li className="menu-option"><span><Link to="/browse">NEW</Link></span></li>
                        <li className="menu-option">
                            <span><Link to="/browse">Clothing</Link>
                                <div>
                                    <ul>
                                        <li><Link to="/browse">Men</Link></li>
                                        <li><Link to="/browse">Women</Link></li>
                                        <li><Link to="/browse">Kidswear</Link></li>
                                    </ul>
                                </div>
                            </span>
                        </li>
                        <li className="menu-option">
                            <span><Link to="/browse">Bath</Link>
                                <div>
                                    <ul>
                                        <li><Link to="/browse">Soap</Link></li>
                                        <li><Link to="/browse">Moisturizers</Link></li>
                                        <li><Link to="/browse">Shampoo</Link></li>
                                        <li><Link to="/browse">Body Lotions</Link></li>
                                        <li><Link to="/browse">Sunscream</Link></li>
                                        <li><Link to="/browse">Facewash</Link></li>
                                    </ul>
                                </div>
                            </span>
                        </li>
                        <li className="menu-option">
                            <span><Link to="/browse">Bedding</Link>
                                <div>
                                    <ul>
                                        <li><Link to="/browse">Bedsheet</Link></li>
                                        <li><Link to="/browse">Mattress</Link></li>
                                        <li><Link to="/browse">Pillow</Link></li>
                                        <li><Link to="/browse">Pillow Cover</Link></li>
                                        <li><Link to="/browse">Cushion</Link></li>
                                    </ul>
                                </div>
                            </span>
                        </li>
                        <li className="menu-option">
                            <span><Link to="/browse">Furniture</Link>
                                <div>
                                    <ul>
                                        <li><Link to="/browse">Table</Link></li>
                                        <li><Link to="/browse">Sofa</Link></li>
                                        <li><Link to="/browse">Bed</Link></li>
                                        <li><Link to="/browse">Chair</Link></li>
                                        <li><Link to="/browse">Lamp</Link></li>
                                    </ul>
                                </div>
                            </span>
                        </li>
                        <li className="menu-option">
                            <span><Link to="/browse">Footwear</Link>
                                <div>
                                    <ul>
                                        <li><Link to="/browse">Men</Link></li>
                                        <li><Link to="/browse">Women</Link></li>
                                        <li><Link to="/browse">Kidswear</Link></li>
                                    </ul>
                                </div>
                            </span>
                        </li>
                        <li className="menu-option">
                            <span><Link to="/browse">Accessories</Link></span>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;