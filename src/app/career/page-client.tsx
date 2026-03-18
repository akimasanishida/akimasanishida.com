"use client";

import { motion } from "motion/react";
import { propsFadeInUp } from "@/lib/motionProps";
import { H2 } from "@/components";

export function BiographySection() {
  return (
    <motion.div {...propsFadeInUp}>
      <H2>略歴</H2>
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row">
          <div className="w-40 subtle-text">2026.4 &ndash; 現在</div>
          <div>ソフトウェアエンジニア</div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="w-40 subtle-text">2024.4 &ndash; 2026.3</div>
          <div>東京大学大学院 理学系研究科 天文学専攻</div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="w-40 subtle-text">2022.4 &ndash; 2024.3</div>
          <div>東京大学 理学部 物理学科</div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="w-40 subtle-text">2020.4 &ndash; 2022.3</div>
          <div>東京大学 理科一類</div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="w-40 subtle-text">2020.3</div>
          <div>芝高等学校卒業</div>
        </div>
      </div>
    </motion.div>
  );
}

export function GradSection() {
  return (
    <motion.div {...propsFadeInUp}>
      <H2>大学院</H2>
      <p>
        大学院では天文学を専攻しました。
        12,000といわれる視力を持つ望遠鏡「ALMA」を用いて、惑星がどのようにして作られるのかを調べる研究を行いました。
      </p>
      <p>論文準備中...</p>
    </motion.div>
  );
}

export function UndergradSection() {
  return (
    <motion.div {...propsFadeInUp}>
      <H2>大学</H2>
      <p>
        大学学部では物理学を学びました。
        4年次は前期と後期で異なる研究室で実験や輪講を行うカリキュラムでした。
        前期は、小型のプラズマ生成装置を開発しました。
        後期は、機械学習の先祖である「ホップフィールド・ネットワーク」というニューラルネットワークについて輪講や実装を行いました。
      </p>
    </motion.div>
  );
}

export function HighschoolSection() {
  return (
    <motion.div {...propsFadeInUp}>
      <H2>高校</H2>
      <p>
        高校では、理化部（いわゆる科学部）に所属し、リニアモーターカーの製作を行いました。
        中央新幹線のような超伝導コイルなどと大掛かりなものではなく、卓上で走行する小型のものです。
        電気回路の設計、基板への実装や車体の設計と製作などを行いました。
        電磁石の効率化に注力して取り組みました。
      </p>
      {/* TODO: 走行動画 */}
    </motion.div>
  );
}
