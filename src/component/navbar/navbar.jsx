import Logo from "../../assets/img/logo+hamburger.png";
import LogoFB from "../../assets/img/image 934.png";

const Navbar = () => {
  return (
    <>
      <nav class="bg-transparent text-[#ffffff] border-gray-200 dark:bg-gray-900 bg-gradient-to-r from-navbar-custom-blue-3 via-navbar-custom-blue-2 to-navbar-custom-blue-1">
        <div class=" flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex justify-center items-center gap-8">
            <a
              href="https://github.com/thanhluan0309"
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                class="w-32 h-12 bg-transparent object-contain"
                src={Logo}
                alt="Rounded avatar"
              ></img>
            </a>
            <div className="flex justify-center items-center gap-1  bg-gradient-to-br border border-[#658BEC80] from-navbar-custom-blue-4 via-navbar-custom-blue-5 to-navbar-custom-blue-6 rounded-[87px] pt-2 pb-2 pl-4 pr-4">
              <img
                src={LogoFB}
                className="w-[17px] h-[17px] object-contain font-medium"
              ></img>
              <span className="text-xs font">FOOTBALL</span>
            </div>
          </div>

          <div class="p-2 flex bg-[#02020F26] rounded-full">
            <svg
              className=" text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="#FFFFFF"
                strokeWidth="2"
                d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
