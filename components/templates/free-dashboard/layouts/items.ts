import {
    CalendarIcon,
    ChartAreaIcon,
    CoinsIcon,
    DatabaseIcon,
    FileTextIcon,
    GraduationCapIcon,
    LayoutGridIcon,
    type LucideIcon,
    MailIcon,
    MessageSquareIcon,
    Settings2Icon,
    ShieldUserIcon,
    ShoppingCartIcon,
    SquareStackIcon,
    TableIcon,
    TrendingUpIcon,
    UserCheckIcon,
    UsersIcon,
} from "lucide-react";

export type MenuItem = {
    label: string;
    isTitle?: boolean;
    icon?: LucideIcon;
    href?: string;
    items?: MenuItem[];
    external?: boolean;
    tag?: "coming-soon" | "new" | "trend" | "pro";
};

export const prefix = "";
export const proPrefix = "https://paceui.com/preview/templates/ultimate-dashboard";

export const demoAdminMenuItems: MenuItem[] = [
    {
        label: "Dashboards",
        isTitle: true,
    },
    {
        label: "Sales",
        icon: TrendingUpIcon,
        href: "/",
    },
    {
        label: "Log",
        icon: FileTextIcon,
        href: "/dashboards/logs",
    },
    {
        label: "Customer",
        icon: UserCheckIcon,
        href: `${proPrefix}/dashboards/customers`,
        tag: "pro",
    },
    {
        label: "Order",
        icon: ShoppingCartIcon,
        href: `${proPrefix}/dashboards/orders`,
        tag: "pro",
    },
    {
        label: "Education",
        icon: GraduationCapIcon,
        href: `${proPrefix}/dashboards/education`,
        tag: "pro",
    },
    {
        label: "Crypto",
        icon: CoinsIcon,
        href: `${proPrefix}/dashboards/crypto`,
        tag: "pro",
    },
    {
        label: "Database",
        icon: DatabaseIcon,
        href: `${proPrefix}/dashboards/database`,
        tag: "pro",
    },

    {
        label: "Skeleton",
        icon: CalendarIcon,
        href: `${proPrefix}/dashboards/skeleton`,
        tag: "pro",
    },
    {
        label: "Apps",
        isTitle: true,
    },
    {
        label: "Email",
        icon: MailIcon,
        href: `${proPrefix}/apps/email`,
        tag: "pro",
    },
    {
        label: "Chat",
        icon: MessageSquareIcon,
        href: `${proPrefix}/apps/chat`,
        tag: "pro",
    },
    {
        label: "Calendar",
        icon: CalendarIcon,
        href: `${proPrefix}/apps/calendar`,
        tag: "pro",
    },
    {
        label: "Users",
        icon: UsersIcon,
        tag: "pro",
        items: [
            { label: "List", href: `${proPrefix}/apps/users` },
            { label: "Create", href: `${proPrefix}/apps/users/create` },
        ],
    },
    {
        label: "Page",
        isTitle: true,
    },
    {
        label: "Settings",
        icon: Settings2Icon,
        href: `${proPrefix}/settings`,
        tag: "pro",
        items: [
            { label: "My profile", href: `${proPrefix}/settings/profile` },
            { label: "Plan", href: `${proPrefix}/settings/plan` },
            { label: "Billing", href: `${proPrefix}/settings/billing` },
            { label: "Notifications", href: `${proPrefix}/settings/notifications` },
            { label: "Password", href: `${proPrefix}/settings/password` },
            {
                label: "Account security",
                href: `${proPrefix}/settings/account-security`,
            },
            { label: "API", href: `${proPrefix}/settings/api` },
        ],
    },
    {
        label: "Authentication",
        icon: ShieldUserIcon,
        tag: "pro",
        items: [
            {
                label: "Variant 1",
                items: [
                    { label: "Login", href: `${proPrefix}/auth-1/login`, external: true },
                    { label: "Register", href: `${proPrefix}/auth-1/register`, external: true },
                    {
                        label: "Forgot Password",
                        href: `${proPrefix}/auth-1/forgot-password`,

                        external: true,
                    },
                    { label: "Reset Password", href: `${proPrefix}/auth-1/reset-password`, external: true },
                    { label: "Verify Email", href: `${proPrefix}/auth-1/verify-email`, external: true },
                    { label: "2 FA", href: `${proPrefix}/auth-1/2-factor-authentication`, external: true },
                ],
            },
            {
                label: "Variant 2",
                items: [
                    { label: "Login", href: `${proPrefix}/auth-2/login`, external: true },
                    { label: "Register", href: `${proPrefix}/auth-2/register`, external: true },
                    {
                        label: "Forgot Password",
                        href: `${proPrefix}/auth-2/forgot-password`,

                        external: true,
                    },
                    { label: "Reset Password", href: `${proPrefix}/auth-2/reset-password`, external: true },
                    { label: "Verify Email", href: `${proPrefix}/auth-2/verify-email`, external: true },
                    { label: "2 FA", href: `${proPrefix}/auth-2/2-factor-authentication`, external: true },
                ],
            },
            {
                label: "Variant 3",
                items: [
                    { label: "Login", href: `${proPrefix}/auth-3/login`, external: true },
                    { label: "Register", href: `${proPrefix}/auth-3/register`, external: true },
                    {
                        label: "Forgot Password",
                        href: `${proPrefix}/auth-3/forgot-password`,

                        external: true,
                    },
                    { label: "Reset Password", href: `${proPrefix}/auth-3/reset-password`, external: true },
                    { label: "Verify Email", href: `${proPrefix}/auth-3/verify-email`, external: true },
                    { label: "2 FA", href: `${proPrefix}/auth-3/2-factor-authentication`, external: true },
                ],
            },
        ],
    },
    {
        label: "Components",
        isTitle: true,
    },
    {
        label: "Charts",
        icon: ChartAreaIcon,
        href: "https://paceui.com/blocks/dashboard/charts",
        external: true,
    },
    {
        label: "Stats",
        icon: TrendingUpIcon,
        href: "https://paceui.com/blocks/dashboard/stats",
        external: true,
    },
    {
        label: "Widgets",
        icon: LayoutGridIcon,
        href: "https://paceui.com/blocks/dashboard/widgets",
        external: true,
    },
    {
        label: "Data Table",
        icon: TableIcon,
        href: "https://paceui.com/blocks/dashboard/tables",
        external: true,
    },
    {
        label: "Other",
        isTitle: true,
    },
    {
        label: "Menu Levels",
        icon: SquareStackIcon,
        items: [
            {
                label: "Level 1a",
                items: [
                    { label: "Level 2a", href: "#" },
                    { label: "Level 2b", href: "#" },
                ],
            },
            {
                label: "Level 1b",
                href: "#",
            },
        ],
    },
] as const;
