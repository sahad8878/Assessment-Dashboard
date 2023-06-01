import React, { useContext } from "react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { AuthContext } from "../Context/AuthContext";
import accountIcon from "../Assets/account.png";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Dropdown() {
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={`${"text-white"}  inline-flex font-bold text-base uppercase w-full justify-center rounded-md  px-4 py-2  hover:text-[#194569] focus:outline-none`}
        >
          <img src={accountIcon} alt="" />
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 md:w-56 w-28  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {user ? (
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <span
                    onClick={handleLogout}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Logout
                  </span>
                )}
              </Menu.Item>
            </div>
          ) : (
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link to="/">
                    <span
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Login
                    </span>
                  </Link>
                )}
              </Menu.Item>
            </div>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Dropdown;
