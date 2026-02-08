"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { StaggerContainer, StaggerItem } from "@/components/motion";

const features = [
  {
    title: "夜勤なし求人も豊富",
    description:
      "日勤のみ、週3日勤務、時短勤務など、あなたのライフスタイルに合わせた働き方を提案。プライベートの時間を大切にできる職場が見つかります。",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    ),
    size: "large",
    image:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80",
  },
  {
    title: "残業ほぼなしの職場",
    description:
      "定時で帰れる環境を重視。家族との時間、自分の時間を取り戻しましょう。",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    size: "small",
  },
  {
    title: "人間関係の良い職場を厳選",
    description:
      "実際に働いているスタッフの声を元に、職場環境を徹底リサーチ。入職後のミスマッチを防ぎます。",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    size: "small",
  },
  {
    title: "元看護師のアドバイザー",
    description:
      "現場を知っているからこそ、あなたの悩みに寄り添える。「わかってもらえる」安心感を大切にしています。",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    size: "medium",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
  },
  {
    title: "年収アップ実績多数",
    description:
      "給与交渉もお任せください。平均50万円以上の年収アップを実現しています。",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    size: "small",
  },
  {
    title: "入職後もサポート",
    description:
      "転職して終わりではありません。新しい職場での不安や悩みも、いつでもご相談ください。",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    size: "small",
  },
];

export function BentoGrid() {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-mint/10 text-mint rounded-full text-sm font-medium mb-4">
            私たちの特徴
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            自分らしい働き方を見つける
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            「高給与」だけが転職の目的ではない。
            あなたが本当に大切にしたいことを、一緒に考えます。
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {features.map((feature, index) => (
            <StaggerItem
              key={index}
              className={`
                ${feature.size === "large" ? "lg:col-span-2 lg:row-span-2" : ""}
                ${feature.size === "medium" ? "lg:col-span-2" : ""}
              `}
            >
              <Card
                className={`
                relative h-full p-6 overflow-hidden group cursor-pointer
                transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                ${feature.image ? "bg-navy text-white" : "bg-card"}
              `}
              >
                {feature.image && (
                  <>
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent" />
                  </>
                )}

                <div className="relative z-10 h-full flex flex-col">
                  <div
                    className={`
                    w-14 h-14 rounded-2xl flex items-center justify-center mb-4
                    ${feature.image ? "bg-mint/20 text-mint" : "bg-mint/10 text-mint"}
                  `}
                  >
                    {feature.icon}
                  </div>

                  <h3
                    className={`text-xl font-bold mb-2 ${feature.image ? "text-white" : "text-navy"}`}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed ${feature.image ? "text-white/80" : "text-muted-foreground"}`}
                  >
                    {feature.description}
                  </p>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
