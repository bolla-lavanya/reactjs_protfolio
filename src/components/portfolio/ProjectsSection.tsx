import React from "react";
import { Github, ExternalLink } from "lucide-react";

export const ProjectCard = ({ title, description, technologies, githubUrl, liveUrl }) => {
  return (
    <div className="group p-6 rounded-2xl bg-card-gradient border border-border/20 hover:border-primary/30 hover:shadow-glow-primary transition-all duration-500 hover:-translate-y-2">
      <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary-glow transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 mt-4">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  );
};
