import Link from 'next/link';

const
  links = [
    '/dyn/a', '/dyn/a/111', '/dyn/a/222', '/dyn/a/333/444',
  ];


export default function Page() {
  return <>
    <h2>page/dyn/index.jsx</h2>
    <ul>
      {links.map(l => <li key="l">
        <Link href={l}>{l}</Link>
      </li>)}
    </ul>
  </>
}