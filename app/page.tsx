import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Research } from "@/components/sections/research";
import { Education } from "@/components/sections/education";

//import { CredentialsAndAchievements } from "@/components/sections/credentials-and-achievements";
//import { Experience } from "@/components/sections/experience";
//import { Testimonials } from "@/components/sections/testimonials";

import { GithubActivity } from "@/components/sections/github-activity";
import { BlogPreview } from "@/components/sections/blog-preview";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      
      <Education />
      {/* <CredentialsAndAchievements />
      <Experience />
      <Testimonials /> */}

      <GithubActivity />
      <BlogPreview />
      <Contact />
    </>
  );
}
