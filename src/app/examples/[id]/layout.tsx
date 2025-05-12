import { generateStaticParams as getExampleParams } from './generateStaticParams';

export { getExampleParams as generateStaticParams };

export default function ExampleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {children}
    </div>
  )
} 