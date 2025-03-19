import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

function Blog() {
  const articles = [
    {
      id: 1,
      slug: "10-signs-toxic-client",
      category: "Safety",
      author: {
        name: "Alex Thompson",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
        initials: "AT"
      },
      title: "Top 10 Red Flags in Freelance Client Communication",
      description: "Learn to identify warning signs in client messages and project descriptions that could indicate potential problems. Protect yourself from toxic clients before it's too late.",
      image: "https://images.unsplash.com/photo-1586892477838-2b96e85e0f96?w=1200&h=675&fit=crop"
    },
    {
      id: 2,
      slug: "secure-payment-strategies-freelancers",
      category: "Tips",
      author: {
        name: "Sarah Chen",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
        initials: "SC"
      },
      title: "Secure Payment Methods for Freelancers",
      description: "A comprehensive guide to choosing the safest payment methods and protecting yourself from payment scams in the freelance world.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=675&fit=crop"
    },
    {
      id: 3,
      slug: "secure-contracts-freelancers",
      category: "Guide",
      author: {
        name: "Mike Roberts",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
        initials: "MR"
      },
      title: "Building a Bulletproof Freelance Contract",
      description: "Essential clauses and terms to include in your freelance contracts to protect your interests and ensure timely payments.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=675&fit=crop"
    }
  ];

  return (
    <div className="w-full py-20 lg:py-40 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="container mx-auto flex flex-col gap-14">
        <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
          <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            Latest from our blog
          </h4>
          <Link href="/blog" className="text-primary hover:underline">
            View all articles →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <Link 
              key={article.id} 
              href={`/blog/${article.slug}`}
              className={`flex flex-col gap-4 hover:opacity-90 transition-opacity cursor-pointer ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div 
                className="bg-muted rounded-lg aspect-video bg-cover bg-center"
                style={{ backgroundImage: `url(${article.image})` }}
              />
              <div className="flex flex-row gap-4 items-center">
                <Badge variant="secondary">{article.category}</Badge>
                <p className="flex flex-row gap-2 text-sm items-center">
                  <span className="text-muted-foreground">By</span>{" "}
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={article.author.image} alt={article.author.name} />
                    <AvatarFallback>{article.author.initials}</AvatarFallback>
                  </Avatar>
                  <span>{article.author.name}</span>
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className={`max-w-3xl tracking-tight ${
                  index === 0 ? "text-4xl" : "text-2xl"
                }`}>
                  {article.title}
                </h3>
                <p className="max-w-3xl text-muted-foreground text-base">
                  {article.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Blog };
