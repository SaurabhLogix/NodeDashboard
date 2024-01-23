import type { Metadata } from 'next'
import ReduxStoreProvider from '@/components/provider/ReduxStoreProvider'
import 'bootstrap/dist/css/bootstrap.min.css'
import "@assets/scss/themes.scss"
import './globals.css'
import ReactToastifyContainer from '@/components/container/ReactToastifyContainer'

export const metadata: Metadata = {
  title: 'Dev360',
  description: 'A saas project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ReduxStoreProvider>
          <ReactToastifyContainer />

          {children}
        </ReduxStoreProvider>
      </body>
    </html>
  )
}
