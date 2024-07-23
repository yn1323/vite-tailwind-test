import { Link } from "react-router-dom";

type Props = {
  role?: string;
};

export const Contact = ({ role }: Props) => {
  return (
    <main>
      <h1>contact: {role}</h1>
      <div>
        <Link to="/">home</Link>
      </div>
      <div>
        <Link to="/about">about</Link>
      </div>
      <Link to="unknown">unknown</Link>
    </main>
  );
};
