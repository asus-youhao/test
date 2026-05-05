"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { HeroSection } from "@/components/hero-section"
import { ProfileSidebar } from "@/components/profile-sidebar"
import { SkillsSection } from "@/components/skills-section"
import { AboutSection } from "@/components/about-section"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home1")

  // 經歷資料移到這裡
  const experiences = [
    {
      role: "Software/Firmware Motion Control Developer",
      company: "ASUSTeK Computer Inc.",
      period: "2022 - Present",
      description: [
        "AMR Full Stack Development: ROS/ROS2, Embedded Systems (NVIDIA Jetson Orin AGX Thor)",
        "PMSM/BLDC/QDD Motor FOC Control",
        "Dual-arm OpenArm Motion Control",         
      ],
    },
    {
      role: "電機工程系所 燃料電池與先進電能儲存實驗室",
      company: "National Chin-Yi University of Technology, Taiwan",
      period: "2018 - 2022",
      description: [],
    },
  ];

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
            {activeSection === "about" && <AboutSection />}

          {/* Experience Section */}
          {activeSection === "experience" && (
            <section className="min-h-screen p-8 lg:p-16">
              <div className="max-w-4xl">
                <h1 className="text-5xl font-bold mb-12">
                  <span className="text-primary">Work</span> Experience
                </h1>
                <div className="space-y-12">
                  {experiences.map((job, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-primary">
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                      <h3 className="text-xl font-semibold">{job.role}</h3>
                      <p className="text-primary">{job.company}</p>
                      <p className="text-muted-foreground text-sm mb-2">{job.period}</p>
                      {Array.isArray(job.description) && job.description.length > 0 ? (
                        <ul className="text-muted-foreground list-disc pl-5 space-y-1">
                          {job.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-muted-foreground">{job.description}</p>
                      )}
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
