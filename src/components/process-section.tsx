import { ArrowRight } from "lucide-react"

export default function ProcessSection() {
  const steps = [
    {
      title: "아이디어",
      description: "고객의 아이디어와 요구사항을 수집합니다.",
    },
    {
      title: "구조화",
      description: "아이디어를 구체적인 기획과 설계로 변환합니다.",
    },
    {
      title: "개발",
      description: "설계에 따라 효율적으로 개발을 진행합니다.",
    },
    {
      title: "테스트",
      description: "품질 보증을 위한 철저한 테스트를 수행합니다.",
    },
    {
      title: "납품",
      description: "완성된 제품을 고객에게 전달하고 지원합니다.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Work Process</h2>
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-200 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center">{step.title}</h3>
                  <p className="text-sm text-gray-600 text-center">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <ArrowRight className="text-blue-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
