import { generatePath, Link } from "react-router-dom";
import { paths } from "../routes";

type Props = {
  role?: string;
};

export const Home = ({ role }: Props) => {
  return (
    <main>
      <h1>home: {role}</h1>
      <div>
        <Link to={generatePath(paths.contact)}>contact</Link>
      </div>
      <div>
        <Link to={generatePath(paths.about)}>about</Link>
      </div>
      <Link to={generatePath("unknown")}>unknown</Link>
    </main>
  );
};
