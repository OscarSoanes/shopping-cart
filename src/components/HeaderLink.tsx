import { Link } from "react-router-dom";

export function HeaderLink({ to, text }: { to: string; text: string }) {
  return <Link to={to}>{text}</Link>;
}
