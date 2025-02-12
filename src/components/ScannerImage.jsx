import Image from 'next/image';

// Пример компонента для вывода изображения с подписью
export default function ScannerImage() {
  return (
    <figure>
      <Image
        src="/images/scanner.jpg"
        alt="AI Scanner ToxiGuard analyzes project risks" // alt-тег на английском
        width={1200}
        height={800}
        className="object-cover"
      />
      <figcaption className="text-sm text-gray-500 mt-2">
        AI Scanner ToxiGuard analyzes project risks
      </figcaption>
    </figure>
  );
} 