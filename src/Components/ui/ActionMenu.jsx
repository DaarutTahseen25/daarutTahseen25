import { useState, useCallback, useRef } from "react";
import { MoreVertical } from "lucide-react";

/**
 * Action menu using fixed positioning to avoid layout shifts.
 * Menu position is calculated on click and rendered in fixed coordinates.
 */
export function ActionMenu({ items = [], label = "Actions" }) {
  const [open, setOpen] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0, above: false });
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const handleOpen = useCallback(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const showAbove = spaceBelow < 220;

      setMenuPos({
        top: showAbove ? rect.top : rect.bottom,
        left: rect.right - 160,
        above: showAbove,
      });
    }
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => setOpen(false), []);

  const handleItemClick = (onClick) => {
    if (typeof onClick === "function") {
      onClick();
    }
    handleClose();
  };

  const handleClickOutside = (e) => {
    if (
      menuRef.current &&
      buttonRef.current &&
      !menuRef.current.contains(e.target) &&
      !buttonRef.current.contains(e.target)
    ) {
      handleClose();
    }
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={handleOpen}
        className="inline-flex items-center justify-center p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
        aria-label={label}
      >
        <MoreVertical className="h-4 w-4" />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={handleClickOutside}
            onContextMenu={handleClickOutside}
          />
          <div
            ref={menuRef}
            className="fixed w-40 rounded-lg border border-gray-200 bg-white shadow-md z-50"
            style={{
              top: menuPos.above ? "auto" : menuPos.top,
              bottom: menuPos.above ? window.innerHeight - menuPos.top : "auto",
              left: menuPos.left,
            }}
          >
            <div className="py-1">
              {items.map((item) => {
                const isDanger = item.variant === "danger";
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleItemClick(item.onClick)}
                    className={`flex w-full items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                      isDanger
                        ? "text-red-600 hover:bg-red-50"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {item.icon && (
                      <span
                        className={`flex-shrink-0 ${
                          isDanger ? "text-red-600" : "text-gray-400"
                        }`}
                      >
                        {item.icon}
                      </span>
                    )}
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ActionMenu;
