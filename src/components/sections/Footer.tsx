"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-mint flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-lg">ナースキャリア</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              看護師として輝ける場所を、一緒に見つけます。
              あなたらしい働き方を実現するために、
              経験豊富なアドバイザーが全力でサポートいたします。
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">サービス</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="#features" className="hover:text-mint transition-colors">
                  サービスの特徴
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-mint transition-colors">
                  ご利用者の声
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-mint transition-colors">
                  無料相談
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">お問い合わせ</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="tel:0120-xxx-xxx" className="hover:text-mint transition-colors">
                  0120-XXX-XXX
                </a>
              </li>
              <li>
                <span>受付時間: 9:00-21:00</span>
              </li>
              <li>
                <span>（土日祝も対応）</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © 2024 ナースキャリア All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="/privacy" className="hover:text-mint transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="hover:text-mint transition-colors">
              利用規約
            </Link>
            <Link href="/company" className="hover:text-mint transition-colors">
              運営会社
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
