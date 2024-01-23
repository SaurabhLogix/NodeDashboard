import DashboardLayout from "./_layout/Layout";

export default function RootDashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    )
}
