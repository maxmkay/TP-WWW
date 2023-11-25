import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  const links = [
    { href: '/about', text: 'About' },
    { href: '/pricing', text: 'Pricing' },
    { href: '/analyze-now', text: 'Analyze Now' },
    { href: '/contact', text: 'Contact' },
  ];

  return (
    <nav className='navbar navbar-light bg-white py-3'>
      <div className='container px-5'>
        <div className='flex items-center'>
          <Link href={'/'}>
            <Image
              src={'/company/fullLogo.png'}
              alt='logo'
              className='rounded'
              width={170}
              height={64}
            />
          </Link>

          <ul className='flex flex-row ml-2 mb-0'>
            {links.map((link, index) => (
              <li key={index} className='mx-2'>
                <Link className='nav-link text-black' href={link.href}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
