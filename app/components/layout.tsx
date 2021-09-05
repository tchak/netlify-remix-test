import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header id="header">
      <h1>
        <Link to="/">Index</Link>
      </h1>
    </header>
  );
}
