"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-mint flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span className="font-bold text-lg text-navy">ナースキャリア</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            サービスの特徴
          </Link>
          <Link
            href="#testimonials"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ご利用者の声
          </Link>
          <Link
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            お問い合わせ
          </Link>
        </nav>

        <Button
          asChild
          className="bg-mint hover:bg-mint/90 text-white font-semibold"
        >
          <Link href="#contact">無料相談する</Link>
        </Button>
      </div>
    </motion.header>
  );
}
