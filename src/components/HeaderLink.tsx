import { Link } from "react-router-dom";

export function HeaderLink({
  to,
  text,
  mobile,
}: {
  to: string;
  text: string;
  mobile: boolean;
}) {
  return (
    <Link to={to} className={`${!mobile && "w-16"} hover:font-semibold`}>
      {text}
    </Link>
  );
}
