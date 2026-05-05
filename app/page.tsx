"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { HeroSection } from "@/components/hero-section"
import { ProfileSidebar } from "@/components/profile-sidebar"
import { SkillsSection } from "@/components/skills-section"
import { AboutSection } from "@/components/about-section"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home1")

  return (
    <div className="min-h-screen bg-background">
      {/* Main Layout */}
      <div className="flex">
        {/* Profile View (for home2) */}
        {activeSection === "home2" && <ProfileSidebar />}

        {/* Main Content Area */}
        <main className={`flex-1 pr-16 ${activeSection === "home2" ? "ml-0" : ""}`}>
          {/* Home 1 - Hero Section */}
          {activeSection === "home1" && <HeroSection />}

          {/* Home 2 - Skills View */}
          {activeSection === "home2" && (
            <div className="p-8 lg:p-12">
              <SkillsSection />
              <AboutSection />
            </div>
          )}

          {/* Home 3 */}
          {activeSection === "home3" && (
            <section className="min-h-screen flex items-center justify-center">
              <div className="text-center space-y-6">
                <h1 className="text-5xl font-bold">Portfolio</h1>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                  Browse through my latest projects and creative works.
                </p>
              </div>
            </section>
          )}

          {/* Home 4 */}
          {activeSection === "home4" && (
            <section className="min-h-screen flex items-center justify-center">
              <div className="text-center space-y-6">
                <h1 className="text-5xl font-bold">Services</h1>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                  Discover what I can offer for your business.
                </p>
              </div>
            </section>
          )}

          {/* About Section */}
          {activeSection === "about" && (
            <section className="min-h-screen p-8 lg:p-16">
              <div className="max-w-4xl">
                <h1 className="text-5xl font-bold mb-8">
                  <span className="text-primary">About</span> Me
                </h1>
                <div className="grid gap-12">
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      I&apos;m a passionate web developer and growth consultant with over
                      6 years of experience building digital products that make a
                      difference. My expertise spans across full-stack development,
                      UI/UX design, and business strategy.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      I believe in creating solutions that are not just technically
                      sound but also user-centric and scalable. My approach combines
                      clean code principles with modern design thinking.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-primary">Education</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li>• Master&apos;s in Computer Science - Stanford</li>
                        <li>• Bachelor&apos;s in Software Engineering - MIT</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-primary">Languages</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li>• English (Native)</li>
                        <li>• Spanish (Fluent)</li>
                        <li>• German (Conversational)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Experience Section */}
          {activeSection === "experience" && (
            <section className="min-h-screen p-8 lg:p-16">
              <div className="max-w-4xl">
                <h1 className="text-5xl font-bold mb-12">
                  <span className="text-primary">Work</span> Experience
                </h1>
                <div className="space-y-12">
                  {[
                    {
                      role: "Senior Full Stack Developer",
                      company: "TechCorp Inc.",
                      period: "2021 - Present",
                      description: "Leading development of enterprise-scale applications using React, Node.js, and cloud technologies.",
                    },
                    {
                      role: "Growth Consultant",
                      company: "StartupHub",
                      period: "2019 - 2021",
                      description: "Helped 20+ startups scale their products and optimize their growth strategies.",
                    },
                    {
                      role: "Frontend Developer",
                      company: "DesignStudio",
                      period: "2017 - 2019",
                      description: "Built responsive web applications and collaborated with design teams on UI/UX improvements.",
                    },
                  ].map((job, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-primary">
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                      <h3 className="text-xl font-semibold">{job.role}</h3>
                      <p className="text-primary">{job.company}</p>
                      <p className="text-muted-foreground text-sm mb-2">{job.period}</p>
                      <p className="text-muted-foreground">{job.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Skills Section */}
          {activeSection === "skills" && (
            <section className="min-h-screen p-8 lg:p-16">
              <SkillsSection />
            </section>
          )}

          {/* Achievements Section */}
          {activeSection === "achievements" && (
            <section className="min-h-screen p-8 lg:p-16">
              <div className="max-w-4xl">
                <h1 className="text-5xl font-bold mb-12">
                  <span className="text-primary">Achievements</span>
                </h1>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { title: "Best Developer Award", year: "2023", org: "TechConf" },
                    { title: "Open Source Contributor", year: "2022", org: "GitHub Stars" },
                    { title: "Innovation Prize", year: "2021", org: "StartupWeek" },
                    { title: "Top 10 Developer", year: "2020", org: "DevRankings" },
                  ].map((achievement, index) => (
                    <div
                      key={index}
                      className="p-6 bg-secondary rounded-lg border border-border"
                    >
                      <div className="text-primary text-sm mb-2">{achievement.org}</div>
                      <h3 className="text-xl font-semibold mb-1">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Contact Section */}
          {activeSection === "contact" && (
            <section className="min-h-screen p-8 lg:p-16 flex items-center">
              <div className="max-w-2xl w-full">
                <h1 className="text-5xl font-bold mb-8">
                  <span className="text-primary">Get in</span> Touch
                </h1>
                <p className="text-muted-foreground text-lg mb-12">
                  Have a project in mind? Let&apos;s work together to create something amazing.
                </p>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full p-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full p-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full p-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
                      placeholder="Project inquiry"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      className="w-full p-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none transition-colors min-h-[150px] resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </section>
          )}
        </main>

        {/* Right Sidebar Navigation */}
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      </div>
    </div>
  )
}
