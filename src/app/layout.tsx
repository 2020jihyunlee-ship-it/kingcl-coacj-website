import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "킹클코치 이지현 | AI 맞춤형 코칭 전문가",
  description: "청소년 교육·상담 24년, 16만 회 코칭 경험의 AI 맞춤형 코칭 전문가. 자기주도학습, 진로 코칭, AI 코칭리더십 전문.",
  keywords: ["킹클코치", "이지현", "AI 코칭", "자기주도학습", "진로 코칭", "청소년 교육", "입시 코칭"],
  openGraph: {
    title: "킹클코치 이지현 | AI 맞춤형 코칭 전문가",
    description: "청소년 교육·상담 24년, 16만 회 코칭 경험의 AI 맞춤형 코칭 전문가",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
