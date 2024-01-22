import Image from "next/image";
import Link from "next/link";

import { UserButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#2B2929] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-4xl font-bold">
            Welcome to Dropbox. <br />
            <br />
            Storing everything you need in one place
          </h1>
          <p className="pb-20">
            Enhance your workflow with Dropboxs file storage and sharing
            feature. Sign up for free now.
          </p>

          <Link
            href="/dashboard"
            className="flex cursor-pointer bg-blue-500 p-5 w-fit"
          >
            Try it for free!
            <ArrowRight className="ml-10" />
          </Link>
        </div>
        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/dbx1-hero-1920x1080.mp4" />
          </video>
        </div>
      </div>
      <p className=" text-center font-bold texxt-xl pt-5">Disclaimer</p>
      <p className=" text-center font-light p-2">
        This is a clone of Dropbox. It is not the real Dropbox. We donot own or
        affliate with Dropbox or/and any of its subsidiaries. Copyright
        Disclaimer under section 107 of the Copyright Act 1976 , allowance is
        made for fair use for purposes such as education. Fair use is a use
      </p>
    </main>
  );
}
