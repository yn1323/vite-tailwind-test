import { Link } from "react-router-dom";

type Props = {
  role?: string;
};

export const Home = ({ role }: Props) => {
  return (
    <main>
      <h1>home: {role}</h1>
      <div>
        <Link to="/contact">contact</Link>
      </div>
      <div>
        <Link to="/about">about</Link>
      </div>
      <Link to="unknown">unknown</Link>
    </main>
  );
};
