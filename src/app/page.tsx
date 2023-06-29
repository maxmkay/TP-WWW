import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='d-flex flex-col h-screen'>
      <main className='flex-shrink-0'>
        <nav className='navbar navbar-light bg-white py-3'>
          <div className='container px-5'>
            <div className='flex items-center'>
              <Image
                src={'/logo.png'}
                alt='logo'
                className='w-16 h-16 rounded'
                width='64'
                height={64}
              />
              <Link href='/' className='navbar-brand text-primary'>
                TopProp
              </Link>
            </div>

            <button className='navbar-toggler' type='button'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav ms-auto mb-2 mb-lg-0 small'>
                <li className='nav-item'>
                  <Link href='/' className='nav-link'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link href='/resume' className='nav-link'>
                    Resume
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link href='/projects' className='nav-link'>
                    Projects
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link href='/contact' className='nav-link'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className='py-5'>
          <div className='container px-5 pb-5'>
            <div className='row align-items-center'>
              <div className='col-xxl-5'>
                <div className='text-center text-xxl-start'>
                  <div className='badge bg-gradient-primary-to-secondary text-white mb-4'>
                    <div className='text-uppercase'>
                      Speed &middot; Quality &middot; Success
                    </div>
                  </div>
                  <div className='fs-3 text-[#02A4ff]'>
                    Analyze propeties fast
                  </div>
                  <h1 className='display-3 fw-bolder mb-5'>
                    <span className='text-black d-inline'>
                      reaching freedom quicker
                    </span>
                  </h1>
                  <div className='d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3'>
                    <span className='bg-[#02A4ff] rounded-lg text-white px-5 py-3 me-sm-3 fs-6 fw-bolder cursor-pointer'>
                      Download
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-xxl-7'>
                <div className='d-flex justify-content-center mt-5 mt-xxl-0'>
                  <div className='profile bg-gradient-to-br from-[#F7C844] via-[#EB3527] to-[#2C7AF6]'>
                    {/* <Image
                      src='/profile.png'
                      alt='Profile'
                      width={500}
                      height={300}
                    />
                    SVG dots were here but they were not given so I removed them */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className='bg-light py-5'>
          <div className='container px-5'>
            <div className='row justify-content-center'>
              <div className='col-xxl-8'>
                <div className='text-center my-5'>
                  <h2 className='display-5 fw-bolder'>
                    <span className='text-[#02A4ff] d-inline'>
                      Real Estate Analysis
                    </span>
                  </h2>
                  <p className='lead fw-light mb-4'>
                    TopProp will help you analyze properties with speed and
                    clarity.{' '}
                  </p>
                  <p className='text-muted'>
                    In real estate speed is key. TopProp is the quickest tool on
                    the market to analyze deal with accuracy and quality.
                  </p>
                  <div className='d-flex justify-content-center fs-2 gap-4'>
                    <a className='text-gradient' href='#'>
                      <i className='bi bi-twitter'></i>
                    </a>
                    <a className='text-gradient' href='#'>
                      <i className='bi bi-linkedin'></i>
                    </a>
                    <a className='text-gradient' href='#'>
                      <i className='bi bi-github'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='bg-white py-4 mt-auto'>
        <div className='container px-5'>
          <div className='row align-items-center justify-content-between flex-col flex-sm-row'>
            <div className='col-auto'>
              <p className='small m-0'>Copyright &copy; TopProp 2023</p>
            </div>
            <div className='col-auto'>
              <Link href='/privacy' className='small'>
                Privacy
              </Link>
              <span className='mx-1'>&middot;</span>
              <Link href='/terms' className='small'>
                Terms
              </Link>
              <span className='mx-1'>&middot;</span>
              <Link href='/contact' className='small'>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
