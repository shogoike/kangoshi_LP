"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { FadeInUp } from "@/components/motion";
import { getSupabaseClient } from "@/lib/supabase";

const formSchema = z.object({
  name: z
    .string()
    .min(1, "お名前を入力してください")
    .max(50, "お名前は50文字以内で入力してください"),
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .email("有効なメールアドレスを入力してください"),
  phone: z
    .string()
    .min(1, "電話番号を入力してください")
    .regex(
      /^[0-9-]+$/,
      "電話番号は半角数字とハイフンのみで入力してください"
    )
    .min(10, "電話番号は10桁以上で入力してください"),
  department: z.string().min(1, "現在の診療科を選択してください"),
  workStyle: z.string().min(1, "希望の働き方を選択してください"),
});

type FormData = z.infer<typeof formSchema>;

const departments = [
  "内科",
  "外科",
  "整形外科",
  "小児科",
  "産婦人科",
  "精神科",
  "救急",
  "ICU/CCU",
  "オペ室",
  "透析",
  "訪問看護",
  "介護施設",
  "クリニック",
  "その他",
];

const workStyles = [
  { value: "day_only", label: "日勤のみ" },
  { value: "with_night", label: "夜勤あり" },
  { value: "night_only", label: "夜勤専従" },
  { value: "part_time", label: "パート・時短" },
  { value: "undecided", label: "まだ決めていない" },
];

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const supabase = getSupabaseClient();

      if (!supabase) {
        // Demo mode: just simulate success
        console.log("Demo mode - Form data:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitted(true);
        return;
      }

      const { error: supabaseError } = await supabase.from("leads").insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          department: data.department,
          work_style: data.workStyle,
        },
      ]);

      if (supabaseError) {
        throw supabaseError;
      }

      setIsSubmitted(true);
    } catch {
      setError(
        "送信に失敗しました。時間をおいて再度お試しください。"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-mint rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-mint rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeInUp className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-mint/20 text-mint rounded-full text-sm font-medium mb-4">
            無料相談
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            まずは気軽にご相談ください
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            転職を決めていなくても大丈夫。
            今の悩みや将来のキャリアについて、一緒に考えましょう。
          </p>
        </FadeInUp>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Card className="p-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          お名前 <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          placeholder="山田 花子"
                          {...register("name")}
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          電話番号 <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="phone"
                          placeholder="090-1234-5678"
                          {...register("phone")}
                          className={errors.phone ? "border-destructive" : ""}
                        />
                        {errors.phone && (
                          <p className="text-sm text-destructive">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        メールアドレス{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        {...register("email")}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>
                          現在の診療科{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Select
                          onValueChange={(value) =>
                            setValue("department", value)
                          }
                        >
                          <SelectTrigger
                            className={
                              errors.department ? "border-destructive" : ""
                            }
                          >
                            <SelectValue placeholder="選択してください" />
                          </SelectTrigger>
                          <SelectContent>
                            {departments.map((dept) => (
                              <SelectItem key={dept} value={dept}>
                                {dept}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.department && (
                          <p className="text-sm text-destructive">
                            {errors.department.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label>
                          希望の働き方{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Select
                          onValueChange={(value) => setValue("workStyle", value)}
                        >
                          <SelectTrigger
                            className={
                              errors.workStyle ? "border-destructive" : ""
                            }
                          >
                            <SelectValue placeholder="選択してください" />
                          </SelectTrigger>
                          <SelectContent>
                            {workStyles.map((style) => (
                              <SelectItem key={style.value} value={style.value}>
                                {style.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.workStyle && (
                          <p className="text-sm text-destructive">
                            {errors.workStyle.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {error && (
                      <div className="p-4 bg-destructive/10 text-destructive rounded-lg text-sm">
                        {error}
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-mint hover:bg-mint/90 text-white font-semibold text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-5 w-5"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          送信中...
                        </span>
                      ) : (
                        "無料相談を申し込む"
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      お預かりした個人情報は、プライバシーポリシーに基づき適切に管理いたします。
                    </p>
                  </form>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="p-8 text-center">
                  <div className="w-20 h-20 bg-mint/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-mint"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-navy mb-4">
                    送信が完了しました
                  </h3>

                  <p className="text-muted-foreground mb-8">
                    担当アドバイザーより、2営業日以内にご連絡いたします。
                    <br />
                    しばらくお待ちください。
                  </p>

                  <div className="bg-mint/5 border border-mint/20 rounded-2xl p-6">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#06C755] rounded-xl flex items-center justify-center">
                        <svg
                          className="w-7 h-7 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15h-2v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3H13v6.95c5.05-.5 9-4.76 9-9.95 0-5.52-4.48-10-10-10z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-navy">
                          LINEでさらに詳しく相談
                        </p>
                        <p className="text-sm text-muted-foreground">
                          気になることをすぐに聞けます
                        </p>
                      </div>
                    </div>

                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-[#06C755] hover:bg-[#06C755]/90 text-white font-semibold"
                    >
                      <a
                        href="https://line.me/R/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                        </svg>
                        LINEで友だち追加
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
