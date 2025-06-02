import Image from "next/image";
import { LogoMain } from "../Navbar/Logo";

export async function Footer() {
  return (
    <footer className="w-full z-50 bg-background text-white py-8 sm:py-12 lg:py-16 border-t border-[#3E3E3E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:flex flex-row justify-between items-center">
          <div className="max-w-sm flex-shrink-0">
            <LogoMain />
            <p className="text-sm mt-4 mb-6 leading-relaxed">
              City Professional Trades © 2025. All rights reserved. | Reliable,
              licensed, and insured trade professionals delivering expert
              solutions across your city. | Powered by commitment. Driven by
              quality.
            </p>
            <div className="flex flex-row gap-4">
              <a
                href="https://www.linkedin.com/company/city-professional-trades/?originalSubdomain=ca"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/linkedIn.svg"
                  alt="LinkedIn icon"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-base font-semibold mb-2">Contact</h3>
            <a
              href="mailto:Info@cityprofessionaltrades.com"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Info@cityprofessionaltrades.com
            </a>
            <a
              href="tel:4168383970"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              (416) 838-3970
            </a>
            <p className="text-sm">
              974 The Queensway Etobicoke,
              <br />
              ON M8Z 1P6
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-base font-semibold mb-2">Navigation</h3>
            <a href="/" className="text-sm hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="/company" className="text-sm hover:text-gray-300 transition-colors">
              Company
            </a>
            <a href="/contact" className="text-sm hover:text-gray-300 transition-colors">
              Contact
            </a>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-base font-semibold mb-2">Services</h3>
            <a href="/portfolio" className="text-sm hover:text-gray-300 transition-colors">
              Portfolio
            </a>
            <a href="/services" className="text-sm hover:text-gray-300 transition-colors">
              Services
            </a>
            <a href="/subcontractor" className="text-sm hover:text-gray-300 transition-colors">
              Sub Contractor
            </a>
          </div>
        </div>

        {/* Tablet Layout (md to lg) */}
        <div className="hidden md:flex lg:hidden flex-col space-y-8">
          <div className="flex flex-row justify-between items-center gap-8">
            <div className="flex-1 max-w-md">
              <LogoMain />
              <p className="text-sm mt-4 mb-4 leading-relaxed">
                City Professional Trades © 2025. All rights reserved. | Reliable,
                licensed, and insured trade professionals delivering expert
                solutions across your city. | Powered by commitment. Driven by
                quality.
              </p>
              <div className="flex flex-row gap-4">
                <a
                  href="https://www.linkedin.com/company/city-professional-trades/?originalSubdomain=ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/linkedIn.svg"
                    alt="LinkedIn icon"
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <h3 className="text-base font-semibold">Contact</h3>
              <a
                href="mailto:Info@cityprofessionaltrades.com"
                className="text-sm hover:text-gray-300 transition-colors"
              >
                Info@cityprofessionaltrades.com
              </a>
              <a
                href="tel:4168383970"
                className="text-sm hover:text-gray-300 transition-colors"
              >
                (416) 838-3970
              </a>
              <p className="text-sm">
                974 The Queensway Etobicoke,
                <br />
                ON M8Z 1P6
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-32">
            <div className="flex flex-col space-y-3">
              <h3 className="text-base font-semibold">Navigation</h3>
              <a href="/" className="text-sm hover:text-gray-300 transition-colors">
                Home
              </a>
              <a href="/company" className="text-sm hover:text-gray-300 transition-colors">
                Company
              </a>
              <a href="/contact" className="text-sm hover:text-gray-300 transition-colors">
                Contact
              </a>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-base font-semibold">Services</h3>
              <a href="/portfolio" className="text-sm hover:text-gray-300 transition-colors">
                Portfolio
              </a>
              <a href="/services" className="text-sm hover:text-gray-300 transition-colors">
                Services
              </a>
              <a href="/subcontractor" className="text-sm hover:text-gray-300 transition-colors">
                Sub Contractor
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Layout (sm and below) */}
        <div className="flex md:hidden flex-col space-y-6">
          <div>
            <LogoMain />
            <p className="text-sm mt-4 mb-4 leading-relaxed">
              City Professional Trades © 2025. All rights reserved. | Reliable,
              licensed, and insured trade professionals delivering expert
              solutions across your city. | Powered by commitment. Driven by
              quality.
            </p>
            <div className="flex flex-row gap-4 mt-4">
              <a
                href="https://www.linkedin.com/company/city-professional-trades/?originalSubdomain=ca"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/linkedIn.svg"
                  alt="LinkedIn icon"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="text-base font-semibold">Contact</h3>
            <a
              href="mailto:Info@cityprofessionaltrades.com"
              className="text-sm hover:text-gray-300 transition-colors break-all"
            >
              Info@cityprofessionaltrades.com
            </a>
            <a
              href="tel:4168383970"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              (416) 838-3970
            </a>
            <p className="text-sm">974 The Queensway Etobicoke, ON M8Z 1P6</p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-3">
              <h3 className="text-base font-semibold">Navigation</h3>
              <a href="/" className="text-sm hover:text-gray-300 transition-colors">
                Home
              </a>
              <a href="/company" className="text-sm hover:text-gray-300 transition-colors">
                Company
              </a>
              <a href="/contact" className="text-sm hover:text-gray-300 transition-colors">
                Contact
              </a>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-base font-semibold">Services</h3>
              <a href="/portfolio" className="text-sm hover:text-gray-300 transition-colors">
                Portfolio
              </a>
              <a href="/services" className="text-sm hover:text-gray-300 transition-colors">
                Services
              </a>
              <a href="/subcontractor" className="text-sm hover:text-gray-300 transition-colors">
                Sub Contractor
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}