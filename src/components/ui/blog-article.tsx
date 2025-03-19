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
  readTime = "5 min",
  category = "Article",
  tags = [],
}: BlogArticleProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{title}</h1>
      
      <div className="flex items-center flex-wrap gap-4 mb-8">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{author.name}</div>
            {author.role && (
              <div className="text-sm text-gray-500 dark:text-gray-400">{author.role}</div>
            )}
          </div>
        </div>
        
        <div className="flex items-center text-gray-500 dark:text-gray-400">
          <CalendarIcon className="h-4 w-4 mr-1" />
          <span className="text-sm">{date}</span>
        </div>
        
        {readTime && (
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <ClockIcon className="h-4 w-4 mr-1" />
            <span className="text-sm">{readTime} read</span>
          </div>
        )}
        
        {category && (
          <Badge variant="secondary" className="px-2.5 py-0.5">
            {category}
          </Badge>
        )}
      </div>
      
      <div className="relative w-full aspect-video mb-10 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 66vw"
          className="object-cover"
          priority
        />
      </div>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: content }} />
        
        {tags.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-medium mb-3">Tags</h3>
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