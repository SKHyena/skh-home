import { CheckCircle } from "lucide-react"

export default function StrengthsSection() {
  const strengths = [
    {
      title: "기획이 없어도 → 방향 설정 가능",
      description: "아이디어만 있다면, 저희가 구체적인 기획과 방향성을 함께 설정해 드립니다.",
    },
    {
      title: "빠른 실행력과 기술 중심 접근",
      description: "신속한 프로토타이핑과 기술 중심의 접근 방식으로 효율적인 개발을 진행합니다.",
    },
    {
      title: "체계적 일정 관리",
      description: "명확한 마일스톤 설정과 투명한 진행 상황 공유로 프로젝트를 정확히 관리합니다.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Strengths</h2>
        <div className="max-w-4xl mx-auto">
          {strengths.map((strength, index) => (
            <div key={index} className="flex items-start mb-10">
              <div className="mr-4 mt-1 text-blue-600">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{strength.title}</h3>
                <p className="text-gray-600">{strength.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
