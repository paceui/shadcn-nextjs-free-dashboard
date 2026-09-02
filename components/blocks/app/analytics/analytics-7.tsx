"use client";

import { useState } from "react";

import { CalendarDays, CheckIcon, GlobeIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";

type TimeRangeKey = "7d" | "30d" | "90d" | "year";

interface TimeRangeOption {
    value: TimeRangeKey;
    label: string;
}

const timeRanges: TimeRangeOption[] = [
    { value: "7d", label: "This Week" },
    { value: "30d", label: "This Month" },
    { value: "90d", label: "Last 3 Months" },
    { value: "year", label: "Year to Date" },
];

const getPlatformConfig = (key: string) => {
    const normalizedKey = key.toLowerCase().trim();
    switch (normalizedKey) {
        case "facebook":
            return {
                icon: GlobeIcon,
                label: "Facebook",
                backgroundClass: "bg-blue-50 dark:bg-blue-800/20",
                foregroundClass: "text-blue-500",
            };
        case "instagram":
            return {
                icon: GlobeIcon,
                foregroundClass: "text-rose-500",
                backgroundClass: "bg-rose-50 dark:bg-rose-800/20",
                label: "Instagram",
            };
        case "google":
            return {
                icon: GlobeIcon,
                foregroundClass: "text-sky-500",
                backgroundClass: "bg-sky-50 dark:bg-sky-800/20",
                label: "Google Ads",
            };
        case "dribbble":
            return {
                icon: GlobeIcon,
                foregroundClass: "text-pink-500",
                backgroundClass: "bg-pink-50 dark:bg-pink-800/20",
                label: "Dribbble",
            };
        default:
            return {
                icon: GlobeIcon,
                foregroundClass: "text-slate-500",
                backgroundClass: "bg-slate-50 dark:bg-slate-800/40",
                label: key.charAt(0).toUpperCase() + key.slice(1),
            };
    }
};

const apiData = [
    { source: "facebook", visitors: 12450, revenue: 45200, percent: 78 },
    { source: "instagram", visitors: 8300, revenue: 28500, percent: 62 },
    { source: "dribbble", visitors: 4100, revenue: 12100, percent: 45 },
    { source: "google", visitors: 2400, revenue: 8400, percent: 25 },
];

export const Analytics7 = () => {
    const [range, setRange] = useState<TimeRangeKey>("30d");

    const selectedLabel = timeRanges.find((r) => r.value === range)?.label;

    return (
        <Card className="gap-3 max-md:py-4!">
            <CardHeader className="max-md:px-4">
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>Revenue contribution from each traffic source</CardDescription>
                <CardAction>
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            render={
                                <Button variant="outline" size="sm" className="gap-2 max-md:size-8">
                                    <CalendarDays className="text-muted-foreground size-4" />
                                    <span className="max-md:hidden">{selectedLabel}</span>
                                </Button>
                            }></DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-44">
                            {timeRanges.map((item) => (
                                <DropdownMenuItem
                                    key={item.value}
                                    onClick={() => setRange(item.value)}
                                    className="justify-between">
                                    {item.label}
                                    {range === item.value && <CheckIcon className="size-4" />}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </CardAction>
            </CardHeader>

            <CardContent className="flex flex-col gap-2.5 max-md:px-4">
                {apiData.map((item) => {
                    const config = getPlatformConfig(item.source);
                    const Icon = config.icon;

                    return (
                        <div key={item.source} className="group flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div
                                        className={cn(
                                            "flex size-9 items-center justify-center rounded-md",
                                            config.backgroundClass,
                                        )}>
                                        <Icon className={cn("size-5", config.foregroundClass)} />
                                    </div>
                                    <div>
                                        <p className="text-base font-medium">{config.label}</p>
                                        <p className="text-muted-foreground text-xs">
                                            {item.visitors.toLocaleString()} visitors
                                        </p>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <p className="text-base font-medium">
                                        ${item.revenue.toLocaleString()}
                                        <span className="text-muted-foreground ms-1 text-xs">({item.percent}%)</span>
                                    </p>
                                    <div className="mt-1 flex items-center gap-2.5">
                                        <Progress
                                            aria-label={`Progress for ${config.label}`}
                                            value={item.percent}
                                            className="bg-muted **:data-[slot=progress-indicator]:bg-primary/70 h-1 w-30 *:data-[slot=progress-track]:h-1"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </CardContent>
        </Card>
    );
};
