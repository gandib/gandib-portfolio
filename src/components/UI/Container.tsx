export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto max-w-7xl px-6 flex-grow min-h-screen">
      {children}
    </div>
  );
}
