import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href='/clients'>Clients</Link>
        </li>
        <li>
          <Link href='/portfolio'>Portfolio</Link>
        </li>
      </ul>
    </>
  );
}
