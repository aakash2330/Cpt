import Image from "next/image";
import Link from "next/link";

export default function TrustSeals() {
  return (
    <div className="w-full py-16 bg-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            Trusted & Certified
          </h3>
          <p className="text-muted-foreground">
            Your confidence in our expertise
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {/* Trust Seal 1 - BBB */}
          <iframe
            src="https://seal-mwco.bbb.org/frame/blue-seal-187-130-whitetxt-bbb-1415392.png?chk=C77FDEE282"
            title="BBB Seal"
            style={{ border: "none", width: "80px", height: "130px", borderRadius: "8px" }}
            scrolling="no"
          />


          {/* Trust Seal 2 - TCA */}
          <Link
            href="https://www.tcaconnect.com/About-Us/Our-Partners.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Seals/TCA/TCA 150 Year Logo - all white.png"
              alt="TCA - Toronto Construction Association"
              width={130}
              height={100}
              className="object-contain"
            />
          </Link>


          {/* Trust Seal 3 - CCA */}
          <Link
            href="https://www.cca-acc.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Seals/CCA/CCA_En_reverse.png"
              alt="CCA - Canadian Construction Association"
              width={130}
              height={100}
              className="object-contain"
            />
          </Link>

        </div>
      </div>
    </div>
  );
}
