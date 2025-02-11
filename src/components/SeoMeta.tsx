export default function SeoMeta({ title, description }: { title: string; description: string }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://www.toxiguard.site/og-image.jpg" />
    </>
  );
} 