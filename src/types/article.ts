export type Article = {
  title: string;
  content: string;
  seoDescription: string;
  category: string;
  sections: Array<{
    title: string;
    id: string;
  }>;
  relatedArticles: Array<{
    slug: string;
    title: string;
  }>;
}; 