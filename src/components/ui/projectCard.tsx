/** @format */

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "./card";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({
  id,
  title,
  description,
  tags,
  link,
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border-none shadow-none transition-all hover:shadow-xl cursor-pointer">
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
        <Image
          src={`/img/${id}.png` || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="pt-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          </div>
          <a
            href={link}
            className="rounded-full p-2 transition-colors hover:bg-muted"
            aria-label={`View ${title} project`}
          >
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-3 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
