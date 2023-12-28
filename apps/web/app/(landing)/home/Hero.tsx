import Image from "next/image";
import { CTAButtons } from "@/app/(landing)/home/CTAButtons";
import { SquaresPattern } from "@/app/(landing)/home/SquaresPattern";
import { VideoDemo } from "@/app/(landing)/home/VideoDemo";

export function HeroText(props: { children: React.ReactNode }) {
  return (
    <h1 className="font-cal text-4xl text-foreground sm:text-6xl" {...props} />
  );
}

export function HeroSubtitle(props: { children: React.ReactNode }) {
  return <p className="mt-6 text-lg leading-8 text-foreground/60" {...props} />;
}

export function Hero(props: {
  title?: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <div className="relative pt-14">
      <SquaresPattern />
      <div className="pt-24 sm:pb-12 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* <HeroTag /> */}

          <div className="mx-auto max-w-xl text-center">
            {/* <HeroText>{props.title || <HeroHeadingAB />}</HeroText> */}
            <HeroText>Clean Up Your Inbox In Minutes</HeroText>
            <HeroSubtitle>
              {props.subtitle || (
                <>
                  Newsletter management, AI automation, and email analytics.
                  <br />
                  Inbox Zero is the open-source email app that puts you back in
                  control of your inbox.
                </>
              )}
            </HeroSubtitle>
            <CTAButtons />
          </div>

          <div className="mt-16 flow-root sm:mt-24">
            <div className="relative -m-2 rounded-xl bg-foreground/5 p-2 ring-1 ring-inset ring-foreground/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src={props.image || "/images/newsletters.png"}
                alt="Inbox screenshot"
                width={2432}
                height={1442}
                className="rounded-md shadow ring-1 ring-foreground/10"
              />

              <VideoDemo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function HeroTag() {
//   return (
//     <div className="mb-8 flex justify-center bg-white">
//       <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
//         <a
//           href="/product-hunt"
//           className="flex items-center gap-x-1 font-semibold text-blue-600"
//         >
//           <span className="absolute inset-0" aria-hidden="true" />
//           We are live on Product Hunt!
//           <ChevronRightIcon
//             className="-mr-2 h-5 w-5 text-gray-400"
//             aria-hidden="true"
//           />
//         </a>
//       </div>
//     </div>
//   );
// }

function ProductHuntBadge() {
  return (
    <div className="flex justify-center pt-8">
      <a
        href="https://www.producthunt.com/posts/inbox-zero-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-inbox&#0045;zero&#0045;2"
        target="_blank"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=431438&theme=light"
          alt="Inbox&#0032;Zero - Clean&#0032;up&#0032;your&#0032;inbox&#0032;in&#0032;minutes&#0044;&#0032;open&#0032;source | Product Hunt"
          className="h-[54px] w-[250px]"
          width="250"
          height="54"
        />
      </a>
    </div>
  );
}
