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
          我是一位熱愛機器人與自動化的工程師，專注於 AMR（自主移動機器人）、人形雙臂協作機器人、AI 感知與運動控制整合。擁有豐富的現場落地經驗，熟悉 ROS/ROS2、嵌入式系統、感測融合、機電整合與智慧製造。我的理念是打造真正能解決現場問題、兼具彈性與可擴展性的機器人系統，讓人機協作更智慧、更安全、更高效。
        </p>
      </div>

      {/* Interests and Hobbies */}
      <div>
        <h3 className="text-2xl font-bold mb-4">
          <span className="text-primary">02.</span> Interests and Hobbies
        </h3>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          喜歡參與機器人競賽、開源 ROS 專案、機電整合、AI 感知、SLAM、運動規劃與人機協作新技術。閒暇時會動手 DIY 嵌入式裝置或參與自駕車/機器人社群。
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
              <h4 className="font-semibold">碩士｜電機工程所</h4>
              <p className="text-muted-foreground">國立勤益科技大學, 2022</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-primary mt-2" />
            <div>
              <h4 className="font-semibold">學士｜電機工程</h4>
              <p className="text-muted-foreground">國立勤益科技大學, 2018</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
