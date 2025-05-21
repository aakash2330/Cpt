import Image from "next/image";
import { LogoMain } from "../Navbar/Logo";

export async function Footer() {
    return (
        <footer className="w-full z-50 bg-background text-white py-16 border-t-1 border-[#3E3E3E]">
            <div className="max-w-full mx-auto px-6 md:px-[80px]">
                <div className="hidden md:flex flex-row justify-between">
                    <div className="max-w-sm">
                        <LogoMain />
                        <p className="text-sm mt-4 mb-6">
                            City Professional Trades © 2025. All rights reserved. | Reliable, licensed, and insured trade professionals delivering expert solutions across your city. | Powered by commitment. Driven by quality.
                        </p>
                        <div className="flex flex-row gap-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/linkedIn.svg"
                                    alt="LinkedIn icon"
                                    width={20}
                                    height={20}
                                />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/facebook.svg"
                                    alt="Facebook icon"
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-6">
                        <a href="mailto:Info@cityprofessionaltrades.com" className="text-sm font-semibold">
                            Info@cityprofessionaltrades.com
                        </a>
                        <a href="tel:4168383970" className="text-sm font-semibold">
                            (416) 838-3970
                        </a>
                        <p className="text-sm font-semibold">974 The Queensway Etobicoke,<br />ON M8Z.1P6</p>
                    </div>

                    <div className="flex flex-col space-y-6">
                        <a href="/" className="text-sm font-semibold">Home</a>
                        <a href="/company" className="text-sm font-semibold">Company</a>
                        <a href="/contact" className="text-sm font-semibold">Contact</a>
                    </div>

                    <div className="flex flex-col space-y-6">
                        <a href="/portfolio" className="text-sm font-semibold">Portfolio</a>
                        <a href="/services" className="text-sm font-semibold">Service</a>
                        <a href="/sub-contractor" className="text-sm font-semibold">Sub Contractor</a>
                    </div>
                </div>

                <div className="md:hidden flex flex-col space-y-8">
                    <div>
                        <LogoMain />
                        <p className="text-sm mt-4 mb-4">
                            City Professional Trades © 2025. All rights reserved. | Reliable, licensed, and insured trade professionals delivering expert solutions across your city. | Powered by commitment. Driven by quality.
                        </p>
                        <div className="flex flex-row gap-4 mt-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Image src="/linkedIn.svg" alt="LinkedIn icon" width={20} height={20} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <Image src="/facebook.svg" alt="Facebook icon" width={20} height={20} />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <a href="mailto:Info@cityprofessionaltrades.com" className="text-sm font-semibold">
                            Info@cityprofessionaltrades.com
                        </a>
                        <a href="tel:4168383970" className="text-sm font-semibold">
                            (416) 838-3970
                        </a>
                        <p>974 The Queensway Etobicoke, ON M8Z.1P6</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col space-y-4">
                            <a href="/" className="text-sm font-semibold">Home</a>
                            <a href="/company" className="text-sm font-semibold">Company</a>
                            <a href="/contact" className="text-sm font-semibold">Contact</a>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <a href="/portfolio" className="text-sm font-semibold">Portfolio</a>
                            <a href="/service" className="text-sm font-semibold">Service</a>
                            <a href="/sub-contractor" className="text-sm font-semibold">Sub Contractor</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
