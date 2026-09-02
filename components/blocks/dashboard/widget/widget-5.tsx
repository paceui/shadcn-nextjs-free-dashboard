import { AlertCircleIcon, CpuIcon, DatabaseIcon, HardDriveIcon, NetworkIcon, ZapIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const quotas = [
    {
        id: "daily-req",
        name: "Daily Requests",
        icon: ZapIcon,
        used: 81512,
        limit: 100000,
        unit: "reqs",
        resetIn: "4h 12m",
    },
    {
        id: "bandwidth",
        name: "Egress Bandwidth",
        icon: NetworkIcon,
        used: 45.2,
        limit: 100,
        unit: "GB",
        resetIn: "4h 12m",
    },
    {
        id: "db-conn",
        name: "Active DB Connections",
        icon: DatabaseIcon,
        used: 89,
        limit: 100,
        unit: "conns",
        resetIn: null,
    },
    {
        id: "storage",
        name: "Log Storage (Retention)",
        icon: HardDriveIcon,
        used: 3.2,
        limit: 5.0,
        unit: "TB",
        resetIn: null,
    },
];

const getPercentage = (used: number, limit: number) => Math.min(100, Math.round((used / limit) * 100));

export const Widget5 = () => {
    return (
        <Card className="flex flex-col gap-5 py-4">
            <CardHeader className="px-4">
                <CardTitle className="flex items-center gap-2">
                    <CpuIcon className="size-4.5" />
                    System Limits
                </CardTitle>
                <CardDescription>Resource usage against plan quotas.</CardDescription>
                <CardAction>
                    <Badge variant="destructive">
                        <AlertCircleIcon className="size-4" />
                        <span>Critical Load</span>
                    </Badge>
                </CardAction>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 px-4">
                {quotas.map((item) => {
                    const percentage = getPercentage(item.used, item.limit);
                    const isCritical = percentage >= 85;

                    return (
                        <div key={item.id} className="group flex flex-col">
                            <div className="flex items-center justify-between gap-2 text-sm">
                                <div className="flex items-center gap-2 sm:gap-2.5">
                                    <div
                                        className={cn(
                                            "bg-muted flex size-8 items-center justify-center rounded-md border",
                                            {
                                                "bg-destructive/10 border-destructive/20 text-destructive": isCritical,
                                            },
                                        )}>
                                        <item.icon className="size-4" />
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <span className="leading-none font-medium max-sm:text-xs">{item.name}</span>
                                        {item.resetIn && (
                                            <span className="text-muted-foreground text-xs">
                                                Resets in {item.resetIn}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col items-end gap-1 text-end">
                                    <p className="font-mono text-[10px] tracking-tight sm:text-xs">
                                        {item.used.toLocaleString()}{" "}
                                        <span className="text-muted-foreground">
                                            / {item.limit.toLocaleString()} {item.unit}
                                        </span>
                                    </p>
                                    <Progress
                                        aria-label={`Usage progress for ${item.name}`}
                                        value={percentage}
                                        className={cn(
                                            "bg-muted w-28 **:data-[slot=progress-indicator]:bg-green-600 *:data-[slot=progress-track]:h-1",
                                            {
                                                "**:data-[slot=progress-indicator]:bg-destructive": isCritical,
                                            },
                                        )}></Progress>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </CardContent>
            <CardFooter className="flex items-center justify-center">
                <Button variant="outline" size="sm" className="">
                    Manage Plan & Limits
                </Button>
            </CardFooter>
        </Card>
    );
};
