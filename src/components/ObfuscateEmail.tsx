import { useEffect, useState } from 'react';

interface Props {
  address: string;
  className?: string;
}

export default function ObfuscateEmail({ address, className }: Props) {
  const [visible, setVisible] = useState<string | null>(null);

  useEffect(() => {
    // Отложенное раскрытие, чтобы боты без JS не видели адрес
    setVisible(address);
  }, [address]);

  if (!visible) return null;
  return (
    <a href={`mailto:${visible}`} className={className}>
      {visible}
    </a>
  );
} 