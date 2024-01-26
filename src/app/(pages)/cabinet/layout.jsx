import Link from 'next/link';

export default function Cabinet({ children }) {
  return (
    <div>
      <ul>
        <li>
          <Link href="/cabinet/personal-information">personal-information</Link>
        </li>
        <li>
          <Link href="/cabinet/orders">orders</Link>
        </li>
        <li>
          <Link href="/cabinet/favorites">favorites</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
