import Header from '@/components/Header';
import ProjectAlertBar from '@/components/ProjectAlertBar';
import SessionProvider from '@/components/SessionProvider';
import Sidebar from '@/components/Sidebar';
import Providers from '@/components/providers';
import '@/styles/globals.css';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { Noto_Sans_KR } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

const notoSans = Noto_Sans_KR({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Providers>
          <div className="flex flex-col">
            <SessionProvider session={session}>
              <Sidebar />
              <Header />
                {children}
                <ToastContainer
                  position="top-center"
                  autoClose={3000}
                  closeOnClick
                  pauseOnFocusLoss={false}
                  theme="light"
                />
              <Footer />
              </main>
            </SessionProvider>
          </div>
        </Providers>
      </body>
    </html>
  );
}
