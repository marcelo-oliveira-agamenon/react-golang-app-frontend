import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import StyledComponentsRegistry from '@/global/styled';
import GlobalStyle from '@/global/global-style';
import StoreProvider from './StoreProvider';

export const metadata: Metadata = {
  title: 'Cash and Grab',
  description: 'Ecommerce application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <StoreProvider>{children}</StoreProvider>
          <ToastContainer position="top-right" closeButton={false} />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
