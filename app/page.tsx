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
      description: [
        '一、專題競賽成果 (2018–2022)',
        '2021 車用電子創新發明競賽：系統實作組「無人搬運車」獲得第一名。',
        '2021 雲創盃智慧生活創新應用競賽：「無人割草機」最佳設計獎。',
        '2020 第三屆全國電動車創新設計與實作競賽：第三名。',
        '台灣能潔能科技創意實作競賽：2020年最佳歷程獎、2019年銅牌獎。',
        '全國大專院校產學創新實作競賽：2020年第三名、2018年最佳實作獎。',
        '南台dsp數位訊號處理創意設計競賽：2018–2022年（第14~17屆）佳作。',
        '二、產學合作專案',
        '高壓儲能系統輔助併網型充放電機運轉開發 (2021/12–2022/07)：',
        '  - 儲能系統監控平台架構規劃與建立',
        '  - 實現遠端控制儲能系統運作，包含發送電力調度控制模式與修改系統參數',
        '學合計畫：能源管理控制器設計 (2020/02–2021/12)：',
        '  - 建立太陽光電逆變器雲端監控平台',
        '  - 遠端控制逆變器之調度、模式與參數設定，應用於小型虛擬電網',
        '學合計畫：可移動式電池檢測裝置研究開發 (2021/02–2021/12)：',
        '  - 電池各項檢測電路板系統整合',
        '  - 規劃檢測介面架構並撰寫自動化檢測腳本',
        '三、科技部研究計畫',
        '太陽光電結合汰役鋰電池儲能系統設計與開發 (2019/08–2020/07)：',
        '  - 雲端系統整合、調度模式設計、自動化運行與系統異常警示',
        '  - 監控儲能鋰電池、太陽光電逆變器及PCS(電力轉換系統)',
        '大專生研究計畫：類F1賽車之電動賽車遙測嵌入式平台開發 (2019/07–2020/02)：',
        '  - 系統架構整合與規劃',
        '  - 監控4G傳輸數據分析',
      ],
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
