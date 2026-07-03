import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import {
  SiClerk,
  SiCloudflare,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithubactions,
  SiGo,
  SiHono,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTurborepo,
  SiTypescript,
} from "react-icons/si";
import {
  TbBolt,
  TbBrain,
  TbCode,
  TbDatabase,
  TbFileText,
  TbMessageChatbot,
  TbTopologyStar3,
} from "react-icons/tb";

const REGISTRY: { match: string; icon: IconType }[] = [
  { match: "typescript", icon: SiTypescript },
  { match: "javascript", icon: SiJavascript },
  { match: "c++", icon: SiCplusplus },
  { match: "next", icon: SiNextdotjs },
  { match: "react flow", icon: TbTopologyStar3 },
  { match: "react", icon: SiReact },
  { match: "node", icon: SiNodedotjs },
  { match: "express", icon: SiExpress },
  { match: "hono", icon: SiHono },
  { match: "tailwind", icon: SiTailwindcss },
  { match: "go", icon: SiGo },
  { match: "sql", icon: TbDatabase },
  { match: "aws", icon: FaAws },
  { match: "cloudflare", icon: SiCloudflare },
  { match: "nginx", icon: SiNginx },
  { match: "postgres", icon: SiPostgresql },
  { match: "mongo", icon: SiMongodb },
  { match: "redis", icon: SiRedis },
  { match: "docker", icon: SiDocker },
  { match: "github actions", icon: SiGithubactions },
  { match: "git", icon: SiGit },
  { match: "turborepo", icon: SiTurborepo },
  { match: "trigger", icon: TbBolt },
  { match: "prisma", icon: SiPrisma },
  { match: "clerk", icon: SiClerk },
  { match: "llm", icon: TbBrain },
  { match: "prompt", icon: TbMessageChatbot },
  { match: "workflow", icon: TbTopologyStar3 },
  { match: "content generation", icon: TbFileText },
];

function resolveIcon(name: string): IconType {
  const normalized = name.toLowerCase();
  for (const entry of REGISTRY) {
    if (normalized.includes(entry.match)) return entry.icon;
  }
  return TbCode;
}

export default function TechIcon({ name }: { name: string }) {
  const Icon = resolveIcon(name);
  return <Icon className="tech-icon" aria-hidden="true" />;
}
