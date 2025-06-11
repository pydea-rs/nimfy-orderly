import { Link } from "@remix-run/react";

const SwapTradeSwitch = () => (
  <div className="flex items-center bg-[#1A1A1A] p-1 rounded-md">
    <Link
      to="#"
      aria-disabled={true}
      className="px-4 py-1 rounded-md text-sm text-gray-500 bg-transparent cursor-not-allowed"
    >
      Swap
    </Link>

    <Link
      to="/"
      className="px-4 py-1 rounded-md text-sm text-white bg-gradient-to-r from-purple-500 to-purple-600"
    >
      Trade
    </Link>
  </div>
);

export default SwapTradeSwitch;
