"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">빠르고 유연한 실전형 개발팀 SKH</h1>
        <p className="text-xl md:text-2xl mb-8">기획이 없어도, 결과는 있습니다.</p>
        <Button
          size="lg"
          className="bg-white text-blue-700 hover:bg-blue-50"
          onClick={() => {
            const contactSection = document.getElementById("contact")
            contactSection?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          프로젝트 상담하기
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
