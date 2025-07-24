// import { useState } from "react";
import { FunctionalComponentProps } from "../../types/components";

// images
import reactImg from '../../assets/skills/react.svg'
import cssImg from '../../assets/skills/css.svg'
import gitImg from '../../assets/skills/git.svg'
import githubImg from '../../assets/skills/github.svg'
import htmlImg from '../../assets/skills/html.svg'
import jsImg from '../../assets/skills/javascript.svg'
import mongoImg from '../../assets/skills/mongodb.svg'
import nodeImg from '../../assets/skills/nodejs.svg'
import tailwindImg from '../../assets/skills/tailwindcss.svg'

// import Button from "../ui/Button";

// const skills = ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js"];

const skillSet = [
  {
    skill: "React",
    dark: reactImg,
    light: reactImg,
  },
  {
    skill: "CSS",
    dark: cssImg,
    light: cssImg,
  },
  {
    skill: "Git",
    dark: gitImg,
    light: gitImg,
  },
  {
    skill: "GitHub",
    dark: githubImg,
    light: githubImg,
  },
  {
    skill: "HTML",
    dark: htmlImg,
    light: htmlImg,
  },
  {
    skill: "Javascript",
    dark: jsImg,
    light: jsImg,
  },
  {
    skill: "MongoDB",
    dark: mongoImg,
    light: mongoImg,
  },
  {
    skill: "NodeJS",
    dark: nodeImg,
    light: nodeImg,
  },
  {
    skill: "Tailwind Css",
    dark: tailwindImg,
    light:
      tailwindImg,
  },
];

const SkillsSection: React.FC<FunctionalComponentProps> = ({ id }) => {
  // const [activeSkill, setActiveSkill] = useState<number>(-1);

  return (
    <section
      id={id}
      className="p-section-mobile md:p-section-xl 2xl:p-section-2xl  md:h-[100vh] relative text-green_yellow"
    >
      <div className="text-center bg-transparent font-tusker uppercase text-tusker-home-text-mobile md:text-tusker-subheading2 2xl:text-tusker-heading 2xl:pb-10 px-2 text-green_yellow">
        Skills I have
      </div>
      <br />
      <div className="flex flex-wrap iten justify-center gap-10">
        {skillSet.map((skill, skillIndex) => {
          return (
            <img
              key={`${skillIndex}-skill-skills-section`}
              src={skill.dark}
              className="h-[100px] w-auto m-5"
            />
            // <img src={skill.light} className="h-[80px] w-auto bg-green-100" />
          );
        })}
      </div>
      {/* <div className="pt-10 flex items-center justify-center">
        <Button
          onClick={() => {
            // navigate("/projects")
          }}
          type="button"
          label="View more"
        />
      </div> */}
    </section>
  );
};

export default SkillsSection;
