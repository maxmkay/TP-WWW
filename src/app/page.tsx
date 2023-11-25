import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='d-flex flex-col h-screen'>
      <main className='flex-shrink-0'>
        <header className='py-5'>
          <div className='container px-5 pb-5'>
            <div className='row align-items-center'>
              <div className='col-xxl-5'>
                <div className='text-center text-xxl-start'>
                  <div className='badge bg-gradient-primary-to-secondary text-white mb-4'>
                    <div className='text-uppercase'>
                      Invest &middot; Smarter &middot; Faster
                    </div>
                  </div>
                  <Image
                    src={'/company/fullLogo.png'}
                    alt='logo'
                    className='rounded fs-3'
                    width={170}
                    height={64}
                  />
                  <h1 className='display-3 fw-bolder mb-5'>
                    <span className='text-black d-inline'>
                      Analyze a deal with just a single click
                    </span>
                  </h1>
                  <div className='d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3'>
                    <span className='bg-[#02A4ff] rounded-lg text-white px-5 py-3 me-sm-3 fs-6 fw-bolder cursor-pointer'>
                      Download Now
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-xxl-7'>
                <div className='d-flex justify-content-center mt-5 mt-xxl-0'>
                  <div className='profile bg-gradient-to-br from-[#F7C844] via-[#EB3527] to-[#2C7AF6] flex items-center justify-center '>
                    <Image
                      src='/real-estate/home-white-nbg.png'
                      alt='Profile'
                      width={300}
                      height={400}
                      className='object-cover'
                    />
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
                    One-Click Investment Insights
                  </p>
                  <p className='text-muted'>
                    Transform the way you invest in real estate with our
                    innovative Chrome extension. Seamlessly integrated with
                    major real estate listing sites, it allows you to analyze
                    potential investments with a single click. The extension
                    provides comprehensive metrics and data, simplifying the
                    often complex process of assessing real estate deals. It's
                    tailored for investors who value speed without sacrificing
                    accuracy, ensuring you have all the essential information at
                    your fingertips in mere seconds
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
