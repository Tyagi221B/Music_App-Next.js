
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
            <h1>Inner Root Layout</h1>
            {children}
        </>
	);
}
