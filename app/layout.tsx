import'../styles/globals.css'
import Navigation from '@/components/navigation'

// layout
const RootLayout = async ({ children }: {children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <div className='flex flex-col min-h-screen bg-[#1C1C1C]'>
        <Navigation />
          <main className="flex-1 container max-w-[512px] mx-auto px-2 py-10">{children}</main>
          <footer className="py-5 border-t border-gray-600">
            <div className="text-center text-sm text-white">
              Copyright © All rights reserved | FullStackChannel
            </div>
          </footer>        
        </div>
      </body>
    </html>
  )
}

export default RootLayout