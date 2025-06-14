import { Link } from "@remix-run/react";
import { useState, useRef } from "react";
import PortalTooltip from "./portal-tooltip";

const SwapTradeSwitch = () => {
  const [hovered, setHovered] = useState(false);
  const swapRef = useRef<HTMLAnchorElement>(null);

  return (
    <div className="flex items-center bg-[#1A1A1A] p-1 rounded-md overflow-visible">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative"
      >
        <Link
          ref={swapRef}
          to="#"
          aria-disabled={true}
          className="px-3 py-1 rounded-md text-sm text-gray-500 bg-transparent cursor-not-allowed"
        >
          Swap
        </Link>

        <PortalTooltip targetRef={swapRef} visible={hovered}>
          Coming Soon...
        </PortalTooltip>
      </div>

      <Link
        to="/"
        className="px-3 py-1 rounded-md text-sm text-white bg-gradient-to-r from-purple-500 to-purple-600"
      >
        Trade
      </Link>
    </div>
  );
};

export default SwapTradeSwitch;
