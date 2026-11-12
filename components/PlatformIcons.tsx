import { platforms } from "@/content/site";
import LogoTile from "./LogoTile";

/** The social platforms I manage: icons only (the name is the tooltip and the accessible name). */
export default function PlatformIcons({ size = "md" }: { size?: "xs" | "sm" | "md" }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {platforms.map((p) => (
        <li key={p.name} title={p.name}>
          <LogoTile name={p.name} initials={p.name.slice(0, 2)} src={`/images/tools/${p.icon}`} size={size} />
        </li>
      ))}
    </ul>
  );
}
