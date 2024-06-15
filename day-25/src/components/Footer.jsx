const Footer = () => {
  return (
    <div className="footer-container mx-4 my-2">
      <div className="footer-sub-container flex justify-between md:justify-start items-center md:gap-1 md:border-b-2 pb-3 border-gray-500">
        <p className="hidden md:block text-xs font-semibold me-5">Status</p>
        <ul className="footer-items flex flex-col gap-1 md:flex-row md:items-center">
          <li className="footer-item text-xs font-light">Privacy Policy</li>
          <li className="hidden md:block">|</li>
          <li className="footer-item text-xs font-light">Legal Notice</li>
          <li className="hidden md:block">|</li>
        </ul>
        <ul className="footer-items flex flex-col gap-1 md:flex-row md:items-center">
          <li className="footer-item text-xs font-light">Cookies Policy</li>
          <li className="hidden md:block">|</li>
          <li className="footer-item text-xs font-light">Data Protection</li>
          <li className="hidden md:block">|</li>
        </ul>
        <ul className="footer-items flex flex-col gap-1 text-right md:flex-row md:items-center">
          <li className="footer-item text-xs font-light">Terms of Use</li>
          <li className="hidden md:block">|</li>
          <li className="footer-item text-xs font-light">Web Credits</li>
        </ul>
      </div>
      <div className="md:flex md:items-center md:justify-between md:my-3">
        <ul className="my-2 flex items-center justify-between border-b-2 pb-3 md:pb-0 md:my-0 border-gray-500 md:order-1 md:border-0">
          <li className="footer-item text-xs font-semibold md:hidden ">
            Status
          </li>
          <li className="footer-item text-xs font-light md:inline-block">
            2023 Surfe. All right reserved.
          </li>
        </ul>
        <div className="md:order-0 flex gap-3 items-center mb-5 md:mb-0">
          <img
            src="https://www.surfe.com/wp-content/uploads/2023/06/GDPR-1.png"
            className="h-6 md:h-9"
            alt="footer-logo"
          />
          <img
            src="https://www.surfe.com/wp-content/uploads/2023/06/ISO-1.png"
            className="h-6 md:h-9"
            alt="footer-logo"
          />
          <img
            src="https://www.surfe.com/wp-content/uploads/2023/06/G2-1.png"
            className="h-6 md:h-9"
            alt="footer-logo"
          />
          <img
            src="https://www.surfe.com/wp-content/uploads/2023/10/G2-2.png"
            className="h-6 md:h-9"
            alt="footer-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
