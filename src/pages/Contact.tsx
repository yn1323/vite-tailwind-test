import { generatePath, Link } from "react-router-dom";
import { paths } from "../routes";

type Props = {
  role?: string;
};

export const Contact = ({ role }: Props) => {
  return (
    <main>
      <h1>contact: {role}</h1>
      <div>
        <Link to={generatePath(paths.home)}>home</Link>
      </div>
      <div>
        <Link to={generatePath(paths.about, { id: "aaa" })}>about</Link>
      </div>
      <Link to={generatePath("unknown")}>unknown</Link>
    </main>
  );
};
