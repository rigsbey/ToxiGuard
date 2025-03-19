import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoveRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  category?: string;
  image: string;
  author: {
    name: string;
    avatar?: string;
  };
  readingTime: string;
  date: string;
}

interface BlogListProps {
  title?: string;
  articles: BlogArticle[];
  showViewAll?: boolean;
  className?: string;
  viewAllHref?: string;
}

export function BlogList({
  title = "Последние статьи",
  articles,
  showViewAll = true,
  className,
  viewAllHref = "/blog",
}: BlogListProps) {
  return (
    <div className={cn("w-full py-12", className)}>
      <div className="container flex flex-col gap-10">
        <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          {showViewAll && (
            <Button asChild className="gap-2 self-start sm:self-center">
              <Link href={viewAllHref}>
                Все статьи <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link 
              key={article.slug} 
              href={`/blog/${article.slug}`}
            >
              <article 
                className={cn(
                  "group flex h-full flex-col overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md",
                  index === 0 && "md:col-span-2"
                )}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="flex flex-col gap-4 p-6 flex-grow">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="px-3 py-1">
                      {article.category || "Статья"}
                    </Badge>
                    <span className="flex items-center text-xs text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      {article.readingTime}
                    </span>
                  </div>
                  
                  <div className="space-y-2 flex-grow">
                    <h3 className="text-xl font-semibold tracking-tight line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3">
                      {article.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-4 flex items-center border-t">
                    <Avatar className="h-8 w-8 mr-2">
                      {article.author.avatar ? (
                        <AvatarImage src={article.author.avatar} alt={article.author.name} />
                      ) : null}
                      <AvatarFallback>{article.author.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{article.author.name}</span>
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 