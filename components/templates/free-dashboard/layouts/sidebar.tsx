"use client";

import Link from "next/link";

import {
    BadgeCheckIcon,
    BellIcon,
    ChevronsUpDownIcon,
    CreditCardIcon,
    LogOutIcon,
    Settings2Icon,
    UserIcon,
} from "lucide-react";

import { demoAdminMenuItems } from "@/components/templates/free-dashboard/layouts/items";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

import { NavItem } from "./nav-item";

export const DemoAdminSidebar = () => {
    return (
        <Sidebar>
            <SidebarHeader className="flex-row items-center gap-2.5 p-4">
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="bg-primary text-primary-foreground flex size-7.5 items-center justify-center rounded-md text-xl font-medium">
                        <Settings2Icon className="size-4.5" />
                    </div>
                    <p className="text-xl font-semibold">Admin</p>
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu className="mt-2 mb-2 gap-0.5 px-2">
                    {demoAdminMenuItems.map((item, index) => (
                        <NavItem item={item} key={index} />
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="border-t p-1">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                render={
                                    <SidebarMenuButton
                                        size="lg"
                                        className="data-open:bg-sidebar-accent data-open:text-sidebar-accent-foreground">
                                        <Avatar className="size-8">
                                            <AvatarImage
                                                src="https://images.unsplash.com/photo-1599566150163-29194dcabd9c?w=80&h=80&fit=crop&crop=face"
                                                alt="John Doe"
                                            />
                                            <AvatarFallback>JD</AvatarFallback>
                                        </Avatar>
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-semibold">John Doe</span>
                                            <span className="text-muted-foreground truncate text-xs">
                                                john@example.com
                                            </span>
                                        </div>
                                        <ChevronsUpDownIcon className="ms-auto size-4" />
                                    </SidebarMenuButton>
                                }
                            />
                            <DropdownMenuContent
                                className="w-(--anchor-width) min-w-56 rounded-lg"
                                side="top"
                                align="start"
                                sideOffset={4}>
                                <div className="flex items-center gap-2.5 p-2 text-left text-sm">
                                    <Avatar className="size-8">
                                        <AvatarImage
                                            src="https://images.unsplash.com/photo-1599566150163-29194dcabd9c?w=80&h=80&fit=crop&crop=face"
                                            alt="John Doe"
                                        />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">John Doe</span>
                                        <span className="text-muted-foreground truncate text-xs">john@example.com</span>
                                    </div>
                                </div>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <UserIcon />
                                        <span>Profile</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <BadgeCheckIcon />
                                        <span>Account</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <CreditCardIcon />
                                        <span>Billing</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <BellIcon />
                                        <span>Notifications</span>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem variant="destructive">
                                    <LogOutIcon />
                                    <span>Sign Out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
};
