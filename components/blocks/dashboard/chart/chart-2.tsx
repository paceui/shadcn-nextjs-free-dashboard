"use client";

import { useMemo } from "react";

import { CalendarArrowUpIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const timeSlots = [
    { label: "00-03", name: "Night" },
    { label: "03-06", name: "Early" },
    { label: "06-09", name: "Morning" },
    { label: "09-12", name: "Late Morn" },
    { label: "12-15", name: "Afternoon" },
    { label: "15-18", name: "Late Aft" },
    { label: "18-21", name: "Evening" },
    { label: "21-24", name: "Late Night" },
];

export const Chart2 = () => {
    const data = useMemo(() => {
        return days.map((day) => {
            return {
                day,
                slots: timeSlots.map((_, i) => {
                    const isWorkHours = i >= 3 && i <= 5;
                    const base = isWorkHours ? Math.random() * 80 + 20 : Math.random() * 20;
                    return Math.floor(base);
                }),
            };
        });
    }, []);

    const getColorClass = (value: number) => {
        if (value == 0) return "bg-primary/10 hover:bg-primary/30";
        if (value < 30) return "bg-primary/30 hover:bg-primary/50";
        if (value < 50) return "bg-primary/50 hover:bg-primary/70";
        if (value < 70) return "bg-primary/70 hover:bg-primary/90";
        return "bg-primary";
    };

    return (
        <Card className="flex size-full flex-col gap-5 py-4">
            <CardHeader className="flex items-center justify-between gap-2 px-4">
                <div className="flex items-center gap-2">
                    <CalendarArrowUpIcon className="size-4.5" />
                    <CardTitle>Weekly Traffic</CardTitle>
                </div>
                <div className="flex items-center justify-end gap-2">
                    <span className="text-muted-foreground text-sm">
                        L<span className="max-sm:hidden">ow</span>
                    </span>
                    <div className="flex gap-1">
                        <div className="bg-primary/20 size-2.5 rounded-xs" />
                        <div className="bg-primary/40 size-2.5 rounded-xs" />
                        <div className="bg-primary/60 size-2.5 rounded-xs" />
                        <div className="bg-primary/80 size-2.5 rounded-xs" />
                        <div className="bg-primary size-2.5 rounded-xs" />
                    </div>
                    <span className="text-muted-foreground text-sm">
                        H<span className="max-sm:hidden">igh</span>
                    </span>
                </div>
            </CardHeader>

            <CardContent className="flex min-h-0 w-full grow flex-col gap-2 px-4">
                <div className="flex gap-2">
                    <div className="w-8" />
                    <div className="grid grow grid-cols-8 gap-1 text-center">
                        {timeSlots.map((slot) => (
                            <span key={slot.label} className="text-muted-foreground truncate px-0.5 text-[9px]">
                                {slot.label}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex min-h-0 grow gap-2">
                    <div className="flex w-8 shrink-0 flex-col justify-between gap-1">
                        {days.map((day) => (
                            <span key={day} className="text-muted-foreground flex h-full items-center text-xs/none">
                                {day}
                            </span>
                        ))}
                    </div>

                    <div className="flex h-full w-full grow flex-col gap-1">
                        {data.map((row) => (
                            <div key={row.day} className="grid grow grid-cols-8 gap-1">
                                {row.slots.map((val, i) => (
                                    <Tooltip key={`${row.day}-${i}`}>
                                        <TooltipTrigger
                                            render={
                                                <div
                                                    className={cn(
                                                        "h-full min-h-6 w-full cursor-pointer rounded-sm transition-colors",
                                                        getColorClass(val),
                                                    )}
                                                />
                                            }></TooltipTrigger>
                                        <TooltipContent className="text-xs">
                                            <div className="font-semibold">
                                                {row.day} • {timeSlots[i].name}
                                            </div>
                                            <div className="">{val} requests</div>
                                        </TooltipContent>
                                    </Tooltip>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
