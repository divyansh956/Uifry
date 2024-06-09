import { footerLinks } from "@/constants/data";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 md:mx-32 pb-10 space-y-4 md:space-y-0">
        <div>
          <Image
            src="/logo.png"
            height={100}
            width={100}
            alt="email"
            className="mb-3"
          ></Image>
          <ul className="space-y-2">
            <li className="text-xs font-medium flex space-x-1 items-center">
              <Image src="/email.svg" height={20} width={20} alt="email" />
              <p>help@frybix.com</p>
            </li>
            <li className="text-xs font-medium flex space-x-1 items-center">
              <Image src="/call.svg" height={20} width={20} alt="email" />
              <p>help@frybix.com</p>
            </li>
          </ul>
        </div>
        {footerLinks.map((footerLink, index) => (
          <div key={index}>
            <h1 className="font-semibold text-xl mb-2">{footerLink.title}</h1>
            <ul className="space-y-2">
              {footerLink.links.map((link, index) => (
                <li key={index} className="text-xs font-medium">
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
              {footerLink.title === "Newsletter" && (
                <li className="flex">
                  <input
                    type="text"
                    placeholder="Your email"
                    className="rounded-md p-1 w-36"
                  />
                  <Button>Subscribe</Button>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <Separator />
        <p className="text-center text-xs font-medium py-5">
          Copyright 2022 uifry.com all rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
