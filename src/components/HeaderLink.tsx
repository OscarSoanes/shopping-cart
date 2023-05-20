import { Link } from "react-router-dom";

export function HeaderLink({
  to,
  text,
  mobile,
  onClick,
}: {
  to: string;
  text: string;
  mobile: boolean;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Link
      to={to}
      className={`${!mobile && "w-16"} hover:font-semibold`}
      onClick={() => onClick(false)}
    >
      {text}
    </Link>
  );
}
