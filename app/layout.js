import '@styles/fonts.css';
import '@styles/reset.css';

import { Providers } from 'app/providers';

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
        <body>
            <Providers>
                {children}
            </Providers>
        </body>
        </html>
    );
}
