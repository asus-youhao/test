"use client"

export function AboutSection() {
  return (
    <section className="py-16 space-y-12">
      {/* About Me */}
      <div>
        <h3 className="text-2xl font-bold mb-4">
          <span className="text-primary">01.</span> About me
        </h3>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          Lorem consequat reprehenderit ipsum nulla qui pariatur tempor officia ad.
          Excepteur excepteur pariatur ad laborum labore reprehenderit. Do eiusmod
          sit pariatur nisi. Quis non dolor amet magna eu adipisicing est ex.
        </p>
      </div>

      {/* Interests and Hobbies */}
      <div>
        <h3 className="text-2xl font-bold mb-4">
          <span className="text-primary">02.</span> Interests and Hobbies
        </h3>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          When I&apos;m not coding, you&apos;ll find me exploring the latest tech trends,
          contributing to open-source projects, and mentoring aspiring developers.
          I&apos;m passionate about creating scalable solutions and building products
          that make a difference.
        </p>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-2xl font-bold mb-4">
          <span className="text-primary">03.</span> Education
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-primary mt-2" />
            <div>
              <h4 className="font-semibold">Master&apos;s in Computer Science</h4>
              <p className="text-muted-foreground">Stanford University, 2018</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-primary mt-2" />
            <div>
              <h4 className="font-semibold">Bachelor&apos;s in Software Engineering</h4>
              <p className="text-muted-foreground">MIT, 2016</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
