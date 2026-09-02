"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub } from "@/components/ui/sidebar";

import type { MenuItem } from "./items";

const Tag = ({ tag }: { tag?: MenuItem["tag"] }) => {
    if (tag == "coming-soon")
        return (
            <div
                title="Coming Soon"
                className="bg-foreground/20 group-hover/sub-item:bg-foreground/30 size-1.5 rounded-full transition-all delay-100 duration-300 group-hover/sub-item:w-3"
            />
        );
    if (tag == "new")
        return (
            <div
                title="New"
                className="bg-primary/60 group-hover/sub-item:bg-primary size-1.5 rounded-full transition-all delay-100 duration-300 group-hover/sub-item:w-3"
            />
        );
    if (tag == "trend")
        return (
            <div
                title="Trending"
                className="size-1.5 rounded-full bg-red-500/60 transition-all delay-100 duration-300 group-hover/sub-item:w-3 group-hover/sub-item:bg-red-500"
            />
        );
    if (tag == "pro")
        return (
            <div title="Pro" className="bg-secondary rounded-md px-1.5 py-px text-xs">
                Pro
            </div>
        );
    return null;
};

const TagItems = ({ tag }: { tag?: MenuItem["tag"] }) => {
    if (!tag) return null;
    return (
        <div className="inline-flex">
            <Tag tag={tag} />
        </div>
    );
};

export const NavItem = ({ item }: { item: MenuItem }) => {
    const [active, setActive] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setActive(
            (item.href != null && pathname === item.href) ||
                item.items?.some((subItem) => subItem.href != null && pathname === subItem.href) === true,
        );
    }, [pathname, item]);

    if (item.isTitle)
        return (
            <SidebarMenuItem className="text-foreground/60 mb-1 px-2 text-xs font-semibold tracking-wide uppercase not-first:mt-4">
                {item.label}
            </SidebarMenuItem>
        );

    if (!item.items) {
        return (
            <SidebarMenuItem className="group/sub-item px-0">
                <SidebarMenuButton
                    isActive={active}
                    className={cn("h-8 px-2.5 py-2", {
                        "font-medium": active,
                        "bg-transparent! opacity-80": !item.href,
                    })}
                    render={
                        <Link
                            href={item.href || "#"}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noreferrer noopener" : undefined}>
                            {item.icon && <item.icon />}
                            <p className="grow">{item.label}</p>
                            <TagItems tag={item.tag} />
                        </Link>
                    }></SidebarMenuButton>
            </SidebarMenuItem>
        );
    }

    return (
        <Collapsible
            key={item.label}
            open={active}
            onOpenChange={setActive}
            render={
                <SidebarMenuItem className="px-0.5">
                    <CollapsibleTrigger
                        render={
                            <SidebarMenuButton
                                tooltip={item.label}
                                className={cn("group/sub-item", { "font-medium": active })}>
                                {item.icon && <item.icon />}
                                <span>{item.label}</span>
                                <div className="ms-auto flex items-center gap-2">
                                    <TagItems tag={item.tag} />
                                    <ChevronRightIcon className="transition-transform duration-200 group-data-open/menu-item:rotate-90" />
                                </div>
                            </SidebarMenuButton>
                        }></CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenuSub className="group/menu-sub me-0 gap-0.5 ps-2 pe-0">
                            {item.items?.map((subItem, index) => (
                                <NavItem item={subItem} key={index} />
                            ))}
                        </SidebarMenuSub>
                    </CollapsibleContent>
                </SidebarMenuItem>
            }
            className="group/collapsible"></Collapsible>
    );
};
