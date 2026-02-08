"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { FadeInUp } from "@/components/motion";

const testimonials = [
  {
    name: "田中 美咲さん",
    age: 28,
    role: "病棟看護師 → クリニック勤務",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    content:
      "夜勤のない職場を探していました。以前は月8回の夜勤で体調を崩しがちでしたが、今は日勤のみのクリニックで働いています。プライベートの時間も増えて、趣味の料理も楽しめるようになりました。",
    highlight: "夜勤ゼロでプライベート充実",
  },
  {
    name: "佐藤 恵子さん",
    age: 32,
    role: "急性期病院 → 訪問看護",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    content:
      "サービス残業が当たり前の環境に疲れていました。転職後は定時に帰れることがほとんど。子どもの保育園のお迎えにも間に合うようになり、家族との時間を大切にできています。",
    highlight: "定時退勤で家族との時間確保",
  },
  {
    name: "山本 優香さん",
    age: 35,
    role: "総合病院 → 介護施設",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&q=80",
    content:
      "人間関係で悩んでいた私に、アドバイザーの方が親身になって相談に乗ってくれました。事前に職場の雰囲気を詳しく教えてもらえたので、安心して転職できました。今の職場は本当に居心地が良いです。",
    highlight: "職場環境の改善で毎日が楽しく",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <FadeInUp className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-mint/10 text-mint rounded-full text-sm font-medium mb-4">
            ご利用者の声
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            新しい一歩を踏み出した方々
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            「転職してよかった」そう言っていただける瞬間が、
            私たちの一番のやりがいです。
          </p>
        </FadeInUp>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeInUp key={index} delay={index * 0.15}>
              <Card className="p-6 h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-mint/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-navy">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.age}歳
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {testimonial.content}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-mint"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium text-mint">
                      {testimonial.highlight}
                    </span>
                  </div>
                </div>
              </Card>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
