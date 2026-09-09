/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import PhotoGallery from "@/components/section/photo-gallery";
import GithubContributions from "@/components/section/github-contributions";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const skillIconColors: Record<string, string> = {
  "C#": "text-[#9B4F96]",
  JavaScript: "text-[#F7DF1E]",
  TypeScript: "text-[#3178C6]",
  SQL: "text-[#4479A1]",
  "C++": "text-[#00599C]",
  "ASP.NET Core": "text-[#512BD4]",
  "Entity Framework Core": "text-[#512BD4]",
  "Node.js": "text-[#339933]",
  "Express.js": "text-[#F7F7F7]",
  "REST APIs": "text-[#FF6F00]",
  "WebSockets (Socket.io)": "text-[#25C2A0]",
  React: "text-[#61DAFB]",
  "Next.js": "text-foreground",
  HTML5: "text-[#E34F26]",
  CSS3: "text-[#1572B6]",
  "Tailwind CSS": "text-[#06B6D4]",
  "SQL Server": "text-[#CC2927]",
  PostgreSQL: "text-[#4169E1]",
  MongoDB: "text-[#47A248]",
  Git: "text-[#F05032]",
  GitHub: "text-foreground",
  Docker: "text-[#2496ED]",
  Postman: "text-[#FF6C37]",
  Vercel: "text-foreground",
  Netlify: "text-[#00C7B7]",
  Firebase: "text-[#FFCA28]",
  Figma: "text-[#F24E1E]",
  Trello: "text-[#0C66E4]",
  "VS Code": "text-[#007ACC]",
  Linux: "text-[#FCC624]",
  OOP: "text-[#68217A]",
  "SOLID Principles": "text-[#2563EB]",
  "Clean Architecture": "text-[#0F766E]",
  "Design Patterns": "text-[#D97706]",
  "Data Structures & Algorithms": "text-[#0891B2]",
  Agile: "text-[#16A34A]",
};

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-4xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 😎`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <GithubContributions />
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <PhotoGallery />
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          aria-hidden
                        />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-5">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-xl font-bold">Core technical skills</h2>
              <span className="hidden text-xs text-muted-foreground sm:block">
                {DATA.skillGroups.reduce(
                  (total, group) => total + group.skills.length,
                  0,
                )}{" "}
                tools
              </span>
            </div>
          </BlurFade>
          <div className="divide-y divide-border/70 border-y border-border/70">
            {DATA.skillGroups.map((group, groupIndex) => {
              return (
                <BlurFade
                  key={group.name}
                  delay={BLUR_FADE_DELAY * 10 + groupIndex * 0.05}
                  className="py-5"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <group.icon
                      className="size-4 text-muted-foreground"
                      aria-hidden
                    />
                    <h3 className="text-base font-semibold lowercase">
                      {group.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="inline-flex items-center gap-2 rounded-md border border-border/70 bg-muted/60 px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                        >
                          <SkillIcon
                            className={`size-4 shrink-0 ${skillIconColors[skill.name] ?? "text-muted-foreground"}`}
                            aria-hidden
                          />
                          {skill.name}
                        </div>
                      );
                    })}
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
