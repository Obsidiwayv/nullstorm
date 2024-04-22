export function WithTheme({ children }: React.PropsWithChildren) {
    return (
        <div style={{ backgroundColor: "black" }}>
            {children}
        </div>
    );
}