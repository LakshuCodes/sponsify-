import { NavLink } from "react-router-dom";

const links = [
  { name: "Overview", path: "/brand/dashboard" },
  { name: "My Campaigns", path: "/brand/campaigns" },
  { name: "Discover Creators", path: "/brand/creators" },
  { name: "Applications", path: "/brand/applications" },
  { name: "Payments & Escrow", path: "/brand/payments" },
  { name: "Analytics", path: "/brand/analytics" },
];

export default function Sidebar() {
  return (
    <aside>
      <h2>Sponsify</h2>

      <nav>
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "active-link" : "sidebar-link"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
