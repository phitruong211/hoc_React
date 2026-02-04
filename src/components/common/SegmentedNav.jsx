import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Modern Segmented Navigation with Animated Pill
 * Features:
 * - iOS-style segmented control
 * - Smooth animated pill that follows active tab
 * - Gradient amber background
 * - Fully responsive
 * - Customizable colors
 */
const SegmentedNav = ({
  items = [],
  className = "",
  pillGradient = "from-amber-400 via-amber-500 to-amber-600",
  containerGradient = "from-stone-100 via-amber-50 to-stone-100",
  activeTextColor = "text-white",
  inactiveTextColor = "text-stone-600",
  hoverTextColor = "hover:text-amber-700",
  animationDuration = "duration-500",
}) => {
  const location = useLocation();

  // Calculate pill position based on active item
  const activeIndex = items.findIndex(
    (item) => item.href === location.pathname
  );
  const pillLeft =
    activeIndex >= 0 ? activeIndex * (100 / items.length) + 1.5 : 0;
  const pillWidth = `calc(${100 / items.length}% - 0.5rem)`;

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav className={`flex-1 flex justify-center ${className}`}>
      <div
        className={`relative inline-flex items-center gap-2 p-1.5 bg-gradient-to-r ${containerGradient} rounded-full backdrop-blur-sm border border-stone-200/50 shadow-lg`}
      >
        {/* Animated Background Pill */}
        <div
          className={`absolute top-1.5 bottom-1.5 bg-gradient-to-r ${pillGradient} rounded-full shadow-lg shadow-amber-500/30 transition-all ${animationDuration} ease-out`}
          style={{
            left: `${pillLeft}%`,
            width: pillWidth,
            opacity: activeIndex >= 0 ? 1 : 0,
          }}
        />

        {/* Navigation Links */}
        {items.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`
                relative z-10 px-6 py-2.5 text-sm font-semibold rounded-full transition-all ${animationDuration}
                ${
                  isActive
                    ? `${activeTextColor} scale-105`
                    : `${inactiveTextColor} ${hoverTextColor} hover:scale-105`
                }
              `}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

SegmentedNav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
  pillGradient: PropTypes.string,
  containerGradient: PropTypes.string,
  activeTextColor: PropTypes.string,
  inactiveTextColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  animationDuration: PropTypes.string,
};

export default SegmentedNav;
