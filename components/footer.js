import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import Facebook from "@/public/icons/logo/Facebook2.svg";
import Twitter from "@/public/icons/logo/Twitter.svg";
import Youtube from "@/public/icons/logo/Youtube.svg";
import Instagram from "@/public/icons/logo/Instagram.svg";

function Footer() {
  return (
    <div className="bg-black text-white font-regular text-base">
      <div
        className={clsx(
          "flex items-center justify-between",
          "max-w-1710 mx-auto pt-32 pb-64"
        )}
      >
        <div className="text-gray-600">@codeit - 2025</div>
        <div className="flex items-center gap-30">
          <Link href="/privacyPolicy">Privacy Policy</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div>
          <div className="flex items-center gap-12">
            <Link
              href="https://www.facebook.com/?locale=ko_KR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Facebook} alt="Facebook" />
            </Link>
            <Link
              href="https://x.com/?lang=ko"
              target="_blank"
              rel="noopenner noreferrer"
            >
              <Image src={Twitter} alt="Twitter" />
            </Link>
            <Link
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Youtube} alt="Youtube" />
            </Link>
            <Link
              href="https://www.instagram.com/accounts/login/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Instagram} alt="Instagram" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
