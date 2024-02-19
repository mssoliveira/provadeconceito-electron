import { Html, Head, Main, NextScript } from 'next/document';

import { ThemeProvider } from '@/components/theme-provider';

export default function Document() {
	return (
		<Html lang="pt-BR">
			<Head />
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<main className="flex min-h-screen flex-col items-center p-24 justify-start">
						<Main />
						<NextScript />
					</main>
				</ThemeProvider>
			</body>
		</Html>
	);
}
