"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePostHog } from "posthog-js/react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { GithubIcon } from "lucide-react";

const navigation = [
  { name: "Features", href: "/#features" },
  { name: "FAQ", href: "/#faq" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Waitlist", href: "/#waitlist" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const posthog = usePostHog();

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Caley.io</span>
            <h1 className="font-cal text-2xl font-bold leading-6 text-foreground">
              Caley.io
            </h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <Link
            href="/welcome"
            className="text-sm font-semibold leading-6 text-foreground"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link> */}
          <Link
            href="/github"
            className="flex items-center justify-center text-sm font-semibold leading-6 text-foreground"
            onClick={() => {
              posthog.capture("Clicked Star on Github", {});
            }}
          >
            <GithubIcon className="mr-2 h-4 w-4" />
            Star us on GitHub
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Caley.io</span>
              <h1 className="font-cal text-2xl font-bold leading-6 text-foreground">
                Caley.io
              </h1>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              {/* <div className="py-6">
                <Link
                  href="/welcome"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => {
                    posthog.capture("Clicked Log In", { position: "top-nav" });
                  }}
                >
                  Log in
                </Link>
              </div> */}

              <div className="py-6">
                <Button
                  size="xl"
                  color="transparent"
                  link={{ href: "/github", target: "_blank" }}
                  onClick={() => {
                    posthog.capture("Clicked Star on Github", {});
                  }}
                >
                  <GithubIcon className="mr-2 h-4 w-4" />
                  Star us on GitHub
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
