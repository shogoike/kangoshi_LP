"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-mint-light/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block px-4 py-2 bg-mint/10 text-mint rounded-full text-sm font-medium mb-6">
              あなたらしい働き方を、一緒に見つけましょう
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              看護師として
              <br />
              <span className="text-mint">輝ける場所</span>が
              <br />
              きっとある
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              夜勤の疲れ、サービス残業、人間関係のストレス...
              <br />
              「このままでいいのかな」と悩んでいませんか？
              <br />
              <span className="text-foreground font-medium">
                あなたの経験と想いを活かせる職場を、
                <br />
                専任アドバイザーが一緒に探します。
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-mint hover:bg-mint/90 text-white font-semibold text-lg px-8"
              >
                <Link href="#contact">まずは無料相談</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white font-semibold text-lg px-8"
              >
                <Link href="#features">サービスを見る</Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
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
                <span>完全無料</span>
              </div>
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
                <span>秘密厳守</span>
              </div>
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
                <span>転職支援実績1万件以上</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                alt="笑顔の看護師"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-mint/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-mint"
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
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">最短2週間</p>
                  <p className="text-xs text-muted-foreground">
                    で新しい職場へ
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
