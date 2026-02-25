// Public auth layout — no sidebar, no auth check
// The middleware handles redirects for /admin routes
export default function AuthGroupLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
