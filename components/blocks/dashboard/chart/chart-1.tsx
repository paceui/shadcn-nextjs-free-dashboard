"use client";

import { useEffect, useState } from "react";

import { ActivityIcon } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { useIsMobile } from "@/hooks/use-mobile";

import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const chartData = Array.from({ length: 90 }, (_, i) => ({
    date: new Date(Date.now() + i * 864e5).toISOString().slice(0, 10),
    success: Math.floor(Math.random() * 400) + 400,
    failed: Math.floor(Math.random() * 50) + 5,
}));

const chartConfig: ChartConfig = {
    success: {
        label: "Success",
        color: "var(--chart-1)",
    },
    failed: {
        label: "Failed",
        color: "var(--chart-5)",
    },
};

export const Chart1 = () => {
    const isMobile = useIsMobile();
    const [timeRange, setTimeRange] = useState<string | null>("90d");

    useEffect(() => {
        if (isMobile) {
            setTimeRange("7d");
        }
    }, [isMobile]);

    const filteredData = chartData.slice(timeRange === "7d" ? -7 : timeRange === "30d" ? -30 : -90);

    return (
        <Card className="pb-3 max-2xl:gap-3 max-2xl:pt-4">
            <CardHeader className="max-2xl:px-4">
                <div className="flex items-center gap-3">
                    <div className="rounded-md border p-2 shadow-xs">
                        <ActivityIcon className="size-4.5" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <CardTitle className="leading-none">API Traffic</CardTitle>
                        <CardDescription className="leading-none max-sm:text-xs">
                            Last 30 days performance
                        </CardDescription>
                    </div>
                </div>
                <CardAction>
                    <Select value={timeRange ?? "90d"} onValueChange={setTimeRange}>
                        <SelectTrigger className="w-20 sm:w-32" size="sm" aria-label="Select time range">
                            <SelectValue placeholder="Last 3 months" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                            <SelectItem value="90d">Last 3 months</SelectItem>
                            <SelectItem value="30d">Last 30 days</SelectItem>
                            <SelectItem value="7d">Last 7 days</SelectItem>
                        </SelectContent>
                    </Select>
                </CardAction>
            </CardHeader>
            <CardContent className="px-3 pt-2 sm:px-4">
                <ChartContainer config={chartConfig} className="aspect-auto h-68 w-full">
                    <AreaChart data={filteredData}>
                        <defs>
                            <linearGradient id="fillSuccess" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--color-success)" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="var(--color-success)" stopOpacity={0.1} />
                            </linearGradient>
                            <linearGradient id="fillFailed" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--color-failed)" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="var(--color-failed)" stopOpacity={0.1} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) =>
                                new Date(value).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                })
                            }
                        />
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    labelFormatter={(value) =>
                                        new Date(value as any).toLocaleDateString("en-US", {
                                            month: "long",
                                            day: "numeric",
                                        })
                                    }
                                    indicator="dot"
                                />
                            }
                        />
                        <Area
                            dataKey="success"
                            type="monotone"
                            fill="url(#fillSuccess)"
                            stroke="var(--color-success)"
                        />
                        <Area dataKey="failed" type="monotone" fill="url(#fillFailed)" stroke="var(--color-failed)" />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};
