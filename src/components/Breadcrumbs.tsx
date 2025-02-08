export function Breadcrumbs({ items }) {
  return (
    <nav className="text-sm mb-8">
      <ol className="flex space-x-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            <a 
              href={item.href} 
              className="text-gray-600 hover:text-primary-blue transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
} 