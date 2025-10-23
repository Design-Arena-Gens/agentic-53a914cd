import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'One Day in Guangzhou - Trip Planner',
  description: 'Your perfect one-day itinerary for exploring Guangzhou',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
