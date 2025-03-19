import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ClockIcon } from "lucide-react";
import Link from "next/link";

export interface BlogArticleProps {
  title: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar?: string;
    role?: string;
  };
  date: string;
  readTime?: string;
  category?: string;
  tags?: string[];
}

export function BlogArticle({
  title,
  content,
  image,
  author,
  date,
  readTime = "5 мин",
  category = "Статья",
  tags = [],
}: BlogArticleProps) {
  return (
    <div className="max-w-4xl mx-auto overflow-hidden">
      <div className="relative w-full aspect-video mb-8">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        )}
      </div>
      
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <Badge variant="secondary">{category}</Badge>
          <div className="flex items-center text-sm text-muted-foreground gap-1">
            <CalendarIcon className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground gap-1">
            <ClockIcon className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{title}</h1>
        
        <div className="flex items-center gap-3 mb-8 pb-6 border-b">
          <Avatar className="h-10 w-10">
            {author.avatar ? (
              <AvatarImage src={author.avatar} alt={author.name} />
            ) : null}
            <AvatarFallback>{author.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{author.name}</p>
            {author.role && (
              <p className="text-sm text-muted-foreground">{author.role}</p>
            )}
          </div>
        </div>
        
        <div className="prose prose-slate dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
        
        {tags.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-medium mb-3">Теги</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Link key={tag} href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Badge variant="outline" className="hover:bg-secondary transition-colors">
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 