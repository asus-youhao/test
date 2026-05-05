"use client";

// SVG ICONS
const RosIcon = () => (
  <svg viewBox="0 0 32 32" className="w-5 h-5" fill="currentColor"><circle cx="6" cy="6" r="2"/><circle cx="16" cy="6" r="2"/><circle cx="26" cy="6" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="26" cy="16" r="2"/><circle cx="6" cy="26" r="2"/><circle cx="16" cy="26" r="2"/><circle cx="26" cy="26" r="2"/></svg>
);
// const MotorIcon = () => (
//   <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
// );
const ImuIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
);
const Stm32Icon = () => (
  <svg fill="#03234B" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>STMicroelectronics</title><path d="M 23.818 5.61 L 6.402 5.61 C 5.125 5.609 3.968 6.362 3.452 7.529 L 0.014 15.811 C -0.036 15.931 0.052 16.063 0.182 16.061 L 8.046 16.061 C 8.601 16.061 8.848 15.523 8.412 15.093 L 5.524 12.388 C 4.008 10.9 4.658 7.45 7.81 7.45 L 23.206 7.45 C 23.283 7.451 23.352 7.402 23.378 7.329 L 23.987 5.857 C 23.996 5.835 24.001 5.811 24 5.787 C 23.997 5.689 23.917 5.61 23.818 5.61 M 22.082 9.826 L 19.126 9.826 C 18.932 9.825 18.756 9.94 18.681 10.118 L 15.369 18.118 C 15.355 18.144 15.347 18.173 15.347 18.202 C 15.348 18.302 15.429 18.383 15.529 18.381 L 16.632 18.381 C 17.93 18.387 19.105 17.613 19.612 16.418 L 22.244 10.063 C 22.252 10.042 22.257 10.019 22.257 9.996 C 22.253 9.902 22.176 9.828 22.082 9.826 M 16.271 10.005 C 16.271 9.905 16.189 9.825 16.089 9.825 L 7.706 9.825 C 7.251 9.825 6.853 10.38 7.335 10.825 L 10.104 13.404 C 10.104 13.404 11.224 14.437 10.984 15.916 C 10.778 17.219 9.889 18.016 9.241 18.302 C 9.208 18.31 9.196 18.351 9.219 18.376 C 9.23 18.387 9.246 18.392 9.261 18.388 L 12.489 18.388 C 12.683 18.39 12.859 18.275 12.934 18.095 L 16.256 10.068 C 16.266 10.049 16.271 10.027 16.271 10.005"/></svg>
);
const MicrochipIcon = () => (
  <svg viewBox="0 0 32 32" className="w-5 h-5" fill="currentColor"><circle cx="16" cy="16" r="14" fill="#E2231A"/><path d="M16 8l4 8-4 8-4-8z" fill="#fff"/></svg>
);
const AltiumIcon = () => (
  <svg viewBox="0 0 32 32" className="w-5 h-5" fill="currentColor"><rect x="6" y="10" width="20" height="12" rx="2" fill="#A5915F"/><text x="16" y="21" textAnchor="middle" fontSize="8" fill="#fff">AD</text></svg>
);
const CPPIcon = () => (
  <svg fill="#00599C"  role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>C++</title><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"/></svg>
);
const GitIcon = () => (
  <svg fill="#F05032" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Git</title><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>
);

import { ReactNode } from "react";
interface Skill {
  name: string;
  level: number;
  icon: ReactNode;
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Robotics & Automation",
    skills: [
      { name: "AMR Navigation", level: 3, icon: "🤖" },
      { name: "Humanoid Dual-Arm 7-Axis", level: 3, icon: "🦾" },
      { name: "ROS/ROS2", level: 5, icon: <RosIcon /> },
      { name: "Motion Planning", level: 4, icon: "📐" },
      { name: "SLAM/Localization", level: 3, icon: "🗺" },
      { name: "Computer Vision", level: 2, icon: "👁️" },
      { name: "Sensor Fusion (IMU + Odometry + RTK GPS)", level: 2, icon: "🧭" },
      { name: "PMSM Motor Control", level: 2, icon: "⚙️" },
    ],
  },
  {
    title: "Firmware & Hardware Development",
    skills: [
      { name: "STM32 MCU Programming", level: 3, icon: <Stm32Icon /> },
      { name: "Microchip MCU", level: 2, icon: <MicrochipIcon /> },
      { name: "Altium Designer Schematic", level: 1, icon: <AltiumIcon /> },
      { name: "RS-485 / UART / CAN Bus FD /I2C / SPI", level: 4, icon: "🔗" },
      { name: "Modbus TCP / TCP/IP / DDS /BLE", level: 3, icon: "🌐" },
    ],
  },
  {
    title: "Programming & Software Development",
    skills: [
      // 軟體工程
      { name: "C / C++ / C# / Python / JavaScript", level: 4, icon: <CPPIcon /> },
      { name: "ASP.NET Core MVC / React / nodejs", level: 3, icon: "🌐" },
      { name: "SQL Server / MySQL", level: 3, icon: "🗄️" },
      { name: "Git / GitHub", level: 3, icon: <GitIcon /> },      
      { name: "HMI & Monitoring System", level: 3, icon: "🖥️" },
      // 儲能系統監控
      { name: "EMS Development / BMS", level: 3, icon: "🔋" },
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
