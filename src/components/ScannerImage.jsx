import Image from 'next/image';

// Пример компонента для вывода изображения с подписью
export default function ScannerImage() {
  return (
    <figure itemScope itemType="http://schema.org/ImageObject">
      <Image
        src="/images/scanner.jpg"
        alt="AI анализатор токсичных клиентов ToxiGuard"
        width={1200}
        height={800}
        className="object-cover"
      />
      <figcaption className="text-sm text-gray-500 mt-2">
        <meta itemProp="description" content="Визуализация работы AI-сканера ToxiGuard" />
      </figcaption>
    </figure>
  );
} 