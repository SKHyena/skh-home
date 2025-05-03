import ProjectCard from "./project-card"

export default function ProjectsSection() {
  const projects = [
    {
      title: "광주 STT 번역 앱",
      description: "실시간 음성 인식 및 다국어 번역 시스템",
      image: "/placeholder.svg?height=300&width=500",
      detailedDescription:
        "광주 지역 관광객을 위한 실시간 음성 인식 및 번역 애플리케이션입니다. 한국어, 영어, 중국어, 일본어 등 다양한 언어를 지원하며, 관광 명소에서의 의사소통을 원활하게 돕습니다.",
      technologies: ["AI", "STT", "React Native", "Node.js", "AWS"],
    },
    {
      title: "경기도 25인 회의 시스템",
      description: "대규모 화상 회의 및 협업 플랫폼",
      image: "/placeholder.svg?height=300&width=500",
      detailedDescription:
        "경기도 지자체를 위한 25인 동시 접속 가능한 화상 회의 시스템입니다. 실시간 문서 공유, 투표 기능, 회의록 자동 생성 등 다양한 협업 기능을 제공합니다.",
      technologies: ["WebRTC", "React", "Express", "MongoDB", "Docker"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
