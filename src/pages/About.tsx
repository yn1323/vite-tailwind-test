import { Link } from "react-router-dom";

type Props = {
  role?: string;
};

export const About = ({ role }: Props) => {
  return (
    <main>
      <h1>about: {role}</h1>
      <div>
        <Link to="/">home</Link>
      </div>
      <div>
        <Link to="/contact">contact</Link>
      </div>
      <Link to="unknown">unknown</Link>
    </main>
  );
};
