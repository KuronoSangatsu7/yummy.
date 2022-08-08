const Header = (props) => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="text-roseRed text-2xl font-medium subpixel-antialiased tracking-wider">
          yummy.
        </div>
        <div className="hidden lg:flex text-kindaBlack text-2xl subpixel-antialiased tracking-widest italic">
          Only the best food in town.
        </div>
        <div className="flex justify-between items-center space-x-3">
          <button className="relative h-10 w-10 hover:scale-110 hover:translate-y-1 transition-all duration-150">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 z-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <div className="cart-counter rounded-full bg-roseRed text-white text-xs font-semibold absolute top-0 right-0 z-10 max-w-full min-w-4">4</div>
          </button>
          <button className="text-white text-sm font-medium bg-roseRed p-3 px-6 rounded-full hover:scale-110 hover:translate-y-1 hover:translate-x-1 transition-all duration-150">
            Confirm Order
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
