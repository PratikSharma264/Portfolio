"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SkillBar } from "@/components/ui/skill-bar";
import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="skills"
          title="A stack built for retrieval-heavy AI systems."
          description="Grouped by where the work actually happens: languages I write daily, the web layer I ship in, the ML/AI core, the data underneath it, and the ops that keep it running."
        />

        <Tabs defaultValue={skillCategories[0].id} className="mt-10">
          <TabsList>
            {skillCategories.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.id}>
                {cat.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <p className="mb-5 text-sm text-text-lo">{cat.blurb}</p>
              <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
                {cat.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={i * 0.05}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
