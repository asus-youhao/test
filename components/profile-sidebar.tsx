"use client"

export function ProfileSidebar() {
  return (
    <aside className="w-full lg:w-[400px] bg-black/40 min-h-screen flex flex-col">
      {/* Profile Image */}
      <div className="relative flex-1">
        <div className="absolute top-8 left-8 z-10">
          <div className="bg-primary px-6 py-2">
            <h1 className="text-2xl font-bold text-primary-foreground tracking-wide">
              Youhao
            </h1>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&crop=face"
          alt="Youhao Portrait"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Bottom Text */}
      <div className="p-8 bg-black">
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
          Ready to
          <br />
          discuss your
          <br />
          project?
        </h2>
      </div>
    </aside>
  )
}
