export default function Home() {
  return (
    <div className='d-flex flex-col h-screen'>
      <main className='flex-shrink-0'>
        <div className='p-4 sm:!p-12 flex flex-col gap-8'>
          <h1 className='font-bold text-[#02A4ff]'>Privacy Policy</h1>
          <ol className='flex flex-col gap-8 pl-4'>
            <li className='flex flex-col gap-4'>
              <b className='text-lg'>1. Introduction</b>
              <span className='pl-8'>
                Welcome to the TopProp Real Estate Calculator Chrome Extension.
                This Privacy Policy is meant to help you understand what
                information we collect, why we collect it, and how you can
                manage it.
              </span>
            </li>
            <li className='flex flex-col gap-4'>
              <b className='text-lg'>2. Information We Collect</b>
              <span className='pl-8'>
                We do not collect personal information unless you voluntarily
                provide it to us. In some cases, you may choose to provide us
                with personal information in order to use specific features of
                the Extension.
              </span>
            </li>
            <li className='flex flex-col gap-4'>
              <b className='text-lg'>3. Use of Information</b>
              <span className='pl-8'>
                We use the information that we collect to operate, maintain,
                enhance and provide features of the Extension, and as may be
                necessary to comply with laws and regulations.
              </span>
            </li>
            <li className='flex flex-col gap-4'>
              <b className='text-lg'>4. Sharing of Information</b>
              <span className='pl-8'>
                We do not sell, trade, or otherwise transfer your personally
                identifiable information to outside parties. This does not
                include trusted third parties who assist us in operating our
                Extension, conducting our business, or servicing you, so long as
                those parties agree to keep this information confidential.
              </span>
            </li>
            <li className='flex flex-col gap-4'>
              <b className='text-lg'>5. Cookies</b>
              <span className='pl-8'>
                We use cookies to collect information in order to improve our
                Extension for you. You can instruct your browser to refuse all
                cookies or to indicate when a cookie is being sent. However, if
                you do not accept cookies, you may not be able to use some
                portions of our Extension.
              </span>
            </li>
            <li className='flex flex-col gap-4'>
              <b className='text-lg'>6. Security</b>
              <span className='pl-8'>
                We value your trust in providing us your personal information,
                thus we strive to use commercially acceptable means of
                protecting it. But remember that no method of transmission over
                the internet, or method of electronic storage is 100% secure and
                reliable, and we cannot guarantee its absolute security.
              </span>
            </li>
            <li className='flex flex-col gap-4'>
              <b className='text-lg'>7. Changes To This Privacy Policy</b>
              <span className='pl-8'>
                This Privacy Policy is effective as of todays date and will
                remain in effect except with respect to any changes in its
                provisions in the future, which will be in effect immediately
                after being posted on this page. We reserve the right to update
                or change our Privacy Policy at any time and you should check
                this Privacy Policy periodically.
              </span>
            </li>
            <li className='flex flex-col gap-4'>
              <b className='text-lg'>8. Contact Us</b>
              <span className='pl-8'>
                If you have any questions about this Privacy Policy, please
                contact us.
              </span>
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
}
