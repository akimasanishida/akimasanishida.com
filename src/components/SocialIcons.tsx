"use client";
import Image from "next/image";
import { EnvelopeSimple, Pen } from "@phosphor-icons/react";

const bgClassMap: Record<string, string> = {
  foreground: "bg-foreground",
  white: "bg-white",
  black: "bg-black",
};

type BgColor = keyof typeof bgClassMap;

function IndividualIcon({
  href,
  bgcolor,
  childIcon,
  text,
}: {
  href: string;
  bgcolor: BgColor;
  childIcon: React.ReactNode;
  text: string;
}) {
  const bgClass = bgClassMap[bgcolor];

  return (
    <div className="flex flex-col items-center justify-center">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div
          className={`flex items-center justify-center w-14 h-14 ${bgClass} rounded-full transition duration-200 hover:brightness-70`}
        >
          {childIcon}
        </div>
      </a>
      <div className="flex items-center justify-center text-sm mt-2">
        {text}
      </div>
    </div>
  );
}

export default function SocialIcons() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
      <IndividualIcon 
        href="https://x.com/akimasa_nishida/"
        bgcolor="black"
        childIcon={
          <Image
            src="x_icon.svg"
            alt="Xへのリンク"
            width={28}
            height={28}
            className="invert"
          />
        }
        text="@akimasa_nishida"
      />
      <IndividualIcon
        href="https://github.com/akimasanishida"
        bgcolor="white"
        childIcon={
          <Image
            src="github_icon.svg"
            alt="GitHubへのリンク"
            width={40}
            height={40}
          />
        }
        text="akimasanishida"
      />
      <IndividualIcon
        href="https://blog.akimasanishida.com"
        bgcolor="foreground"
        childIcon={
          <Pen className="w-8 h-8 text-(--background-darker)" />
        }
        text="ブログ"
      />
      <IndividualIcon
        href="mailto:akimasa@akimasanishida.com"
        bgcolor="foreground"
        childIcon={
          <EnvelopeSimple className="w-8 h-8 text-(--background-darker)" />
        }
        text="メール"
      />
    </div>
  );
}
