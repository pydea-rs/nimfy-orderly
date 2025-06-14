import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const PortalTooltip = ({
  children,
  targetRef,
  visible,
}: {
  children: React.ReactNode;
  targetRef: React.RefObject<HTMLElement>;
  visible: boolean;
}) => {
  const [pos, setPos] = useState<{ left: number; top: number }>({
    left: 0,
    top: 0,
  });

  useEffect(() => {
    if (!visible || !targetRef.current) return;

    const rect = targetRef.current.getBoundingClientRect();

    setPos({
      left: rect.left + rect.width / 2,
      top: rect.bottom + 8, // 8px below the button
    });
  }, [visible, targetRef]);

  if (!visible) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        left: pos.left,
        top: pos.top,
        transform: "translateX(-50%) scale(1)",
        backgroundColor: "#27272a", // Tailwind gray-800 approx
        color: "white",
        padding: "6px 12px",
        borderRadius: 8,
        fontSize: 13,
        fontWeight: 500,
        whiteSpace: "nowrap",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        zIndex: 9999,
        pointerEvents: "none",
        opacity: 1,
        transition: "opacity 150ms ease, transform 150ms ease",
        animation: "tooltip-pop 150ms ease forwards",
      }}
      className="tooltip"
    >
      {children}
      <style>
        {`
          @keyframes tooltip-pop {
            0% {
              opacity: 0;
              transform: translateX(-50%) scale(0.85);
            }
            100% {
              opacity: 1;
              transform: translateX(-50%) scale(1);
            }
          }
        `}
      </style>
    </div>,
    document.body
  );
};

export default PortalTooltip;
