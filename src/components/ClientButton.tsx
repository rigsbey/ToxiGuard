'use client';

interface ClientButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}

export default function ClientButton({ onClick, className, children }: ClientButtonProps) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
} 