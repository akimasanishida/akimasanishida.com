import { SoftProps } from '@/types/software';

export const software: SoftProps[] = [
  {
    title: "ALMAQSO",
    image: {
      src: "almaqso.png",
      alt: "ALMAQSOのカバー画像",
    },
    description: (
      <>
        <p>
          大学院生時代に、修士研究の傍ら開発したPythonパッケージです。
          12,000もの視力を持つALMA望遠鏡では、日々たくさんの観測が行われ、一定期間を過ぎたデータはインターネットに公開されています。
          それらの大量のデータを活用する研究プロジェクトから依頼を受け、開発を行いました。
        </p>
        <p>
          元々は卒業した方が開発していたスクリプト群でしたが、設計ベースでの見直しやバグ修正、機能追加により、他のプロジェクトでも有用な汎用的なパッケージとなりました。
        </p>
      </>
    ),
    links: [
      {
        href: "https://github.com/akimasanishida/almaqso",
        title: "GitHub",
      },
    ],
  },
  {
    title: "ホームページ",
    image: {
      src: "akimasanishida.com.jpg",
      alt: "ホームページのカバー画像",
    },
    description: (
      <>
        <p>
          このウェブサイトです。Next.js を用いて開発しています。
        </p>
      </>
    ),
    links: [
      {
        href: "https://github.com/akimasanishida/akimasanishida.com",
        title: "GitHub",
      },
      {
        href: "https://akimasanishida.com",
        title: "トップページ",
      }
    ],
  },
]
