export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About SKH</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 mb-8 text-center">
            SKH는 AI 시스템과 웹 인프라 전문 개발팀입니다. 복잡한 기술적 문제를 해결하고 혁신적인 솔루션을 제공하는 것이
            우리의 목표입니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">전문성</h3>
              <p className="text-gray-600">AI 및 웹 개발 분야에서 다년간의 경험을 가진 전문가들로 구성되어 있습니다.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">혁신</h3>
              <p className="text-gray-600">최신 기술 트렌드를 적극 수용하여 혁신적인 솔루션을 제공합니다.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">신뢰성</h3>
              <p className="text-gray-600">
                철저한 품질 관리와 체계적인 프로세스로 신뢰할 수 있는 결과물을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
