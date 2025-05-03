import { Brain, Palette, Rocket } from "lucide-react"

export default function ExpertiseSection() {
  const expertiseAreas = [
    {
      icon: <Brain size={48} />,
      title: "AI & 백엔드",
      skills: ["머신러닝", "자연어 처리", "음성 인식", "Node.js", "Python", "AWS"],
    },
    {
      icon: <Palette size={48} />,
      title: "프론트엔드",
      skills: ["React", "Next.js", "TypeScript", "UI/UX 디자인", "반응형 웹", "모바일 앱"],
    },
    {
      icon: <Rocket size={48} />,
      title: "DevOps",
      skills: ["CI/CD", "Docker", "Kubernetes", "클라우드 인프라", "모니터링", "보안"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-blue-600 mb-4 flex justify-center">{area.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {area.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
