"use client";

import { useEffect, useRef, useState } from "react";

import { ActivityIcon, PauseIcon, PlayIcon, TerminalIcon, Trash2Icon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

type LogEntry = {
    id: string;
    timestamp: string;
    method: string;
    path: string;
    status: number;
    latency: string;
};

const methods = ["GET", "POST", "PUT", "DELETE"];
const paths = ["/api/v1/users", "/api/auth/login", "/api/products", "/api/settings", "/health"];
const statuses = [200, 200, 200, 201, 400, 401, 404, 500];

export const Widget1 = () => {
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [isPaused, setIsPaused] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const generateLog = (): LogEntry => {
        const date = new Date();
        return {
            id: Math.random().toString(36).slice(2, 9),
            timestamp: date.toLocaleTimeString("en-US", {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            }),
            method: methods[Math.floor(Math.random() * methods.length)],
            path: paths[Math.floor(Math.random() * paths.length)],
            status: statuses[Math.floor(Math.random() * statuses.length)],
            latency: `${Math.floor(Math.random() * 200) + 20}ms`,
        };
    };

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setLogs((prev) => {
                const newLog = generateLog();
                const newLogs = [...prev, newLog];
                if (newLogs.length > 20) return newLogs.slice(newLogs.length - 20);
                return newLogs;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [isPaused]);

    useEffect(() => {
        if (scrollRef.current && !isPaused) {
            const viewport = scrollRef.current;
            if (viewport && viewport.scrollHeight - (viewport.scrollTop + viewport.clientHeight) < 50) {
                viewport?.scrollTo({ top: viewport?.scrollHeight, behavior: "smooth" });
            }
        }
    }, [logs, isPaused]);

    return (
        <Card className="flex h-full flex-col gap-0 pt-3 pb-0">
            <CardHeader className="flex items-center justify-between space-y-0 border-b px-4 pb-3!">
                <div className="flex items-center gap-2">
                    <TerminalIcon className="size-4" />
                    <CardTitle className="flex items-center gap-3 whitespace-nowrap">
                        <p>Live Console</p>
                        <div className="bg-foreground/15 size-1.25 rounded-full max-sm:hidden"></div>
                        <span className="text-muted-foreground text-xs max-sm:hidden">Last {logs.length} events</span>
                    </CardTitle>
                </div>
                <div className="flex items-center gap-0">
                    <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => setIsPaused(!isPaused)}
                        aria-label={isPaused ? "Resume Logs" : "Pause Logs"}>
                        {isPaused ? <PlayIcon className="size-4" /> : <PauseIcon className="size-4" />}
                    </Button>
                    <Button
                        aria-label="Clear Logs"
                        variant="destructive"
                        className="bg-transparent"
                        size="icon-sm"
                        onClick={() => setLogs([])}>
                        <Trash2Icon className="size-4" />
                    </Button>
                </div>
            </CardHeader>

            <CardContent className="h-64 min-h-0 grow px-1.5 pt-0">
                {logs.length === 0 && (
                    <div className="text-muted-foreground flex h-full flex-col items-center justify-center gap-2 py-4">
                        <ActivityIcon className="size-6" />
                        <span>Waiting for incoming requests...</span>
                    </div>
                )}
                <ScrollArea ref={scrollRef} className="flex h-full flex-col gap-px">
                    <div className="my-1.5">
                        <AnimatePresence initial={false}>
                            {logs.map((log) => (
                                <motion.div
                                    key={log.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="group hover:bg-accent flex cursor-pointer items-center gap-3 rounded-md px-2.5 py-1.5">
                                    <span className="text-muted-foreground w-20">{log.timestamp}</span>
                                    <span
                                        className={cn("w-12 text-xs font-medium", {
                                            "text-primary": ["GET", "POST"].includes(log.method),
                                            "text-destructive": log.method === "DELETE",
                                        })}>
                                        {log.method}
                                    </span>
                                    <span
                                        className={cn("w-10 font-medium", {
                                            "text-destructive": log.status > 400,
                                        })}>
                                        {log.status}
                                    </span>
                                    <span className="text-muted-foreground grow truncate">{log.path}</span>
                                    <span className="text-muted-foreground min-w-12 text-end text-xs">
                                        {log.latency}
                                    </span>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
};
