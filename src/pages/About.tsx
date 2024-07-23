import { generatePath, Link } from "react-router-dom";
import { paths } from "../routes";

type Props = {
  role?: string;
};

export const About = ({ role }: Props) => {
  return (
    <main>
      <h1>about: {role}</h1>
      <div>
        <Link to={generatePath(paths.home)}>home</Link>
      </div>
      <div>
        <Link to={generatePath(paths.contact)}>contact</Link>
      </div>
      <Link to={generatePath("aaaa")}>unknown</Link>
    </main>
  );
};
