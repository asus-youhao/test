"use client"

interface Skill {
  name: string
  level: number
  icon: string
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Back-End Development",
    skills: [
      { name: "Node.js", level: 4, icon: "⬢" },
      { name: "Prisma", level: 4, icon: "△" },
      { name: "Svelte", level: 5, icon: "◎" },
      { name: "HTML5", level: 5, icon: "⬠" },
      { name: "Solidity", level: 4, icon: "◇" },
    ],
  },
  {
    title: "Front-End UI/UX Design",
    skills: [
      { name: "JavaScript", level: 5, icon: "JS" },
      { name: "React", level: 4, icon: "⚛" },
      { name: "Redux", level: 5, icon: "↻" },
      { name: "GraphQL", level: 4, icon: "◈" },
      { name: "Node.js", level: 4, icon: "⬢" },
      { name: "Prisma", level: 5, icon: "△" },
    ],
  },
]

function SkillBar({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`w-4 h-3 rounded-sm ${
            i <= level ? "bg-blue-500" : "bg-muted"
          }`}
        />
      ))}
    </div>
  )
}

export function SkillsSection() {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold mb-2">{"I'm Specialized in"}</h2>
      <div className="flex items-center gap-2 mb-12">
        <span className="text-primary text-2xl">{">"}</span>
        <span className="text-primary">_</span>
      </div>

      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-primary" />
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl text-muted-foreground w-8">
                      {skill.icon}
                    </span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <SkillBar level={skill.level} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
