"use client";

import { useState } from "react";

import { BellIcon, XIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export const Notification1 = () => {
    const [open, setOpen] = useState(false);
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
                render={
                    <Button variant="ghost" size="icon-sm" aria-label="Notifications" className="relative">
                        <BellIcon className="size-4.5" />
                        <Badge
                            variant="destructive"
                            className="absolute -inset-e-1 -top-1 flex size-4.5 items-center justify-center rounded-full p-0 text-[0.625rem]">
                            3
                        </Badge>
                    </Button>
                }></PopoverTrigger>
            <PopoverContent className="w-80 gap-0 space-y-0 p-0 shadow-none" align="end">
                <div className="flex items-center justify-between border-b px-4 py-1.5">
                    <h4 className="text-base font-medium">Notifications</h4>
                    <Button variant="ghost" size="icon-sm">
                        <XIcon />
                    </Button>
                </div>
                <div>
                    <div className="space-y-1 p-2">
                        <div className="hover:bg-muted cursor-pointer rounded-md px-3 py-1.5 transition-colors">
                            <p className="text-sm font-medium">New message received</p>
                            <p className="text-muted-foreground text-xs">2 minutes ago</p>
                        </div>
                        <div className="hover:bg-muted cursor-pointer rounded-md px-3 py-1.5 transition-colors">
                            <p className="text-sm font-medium">Your report is ready</p>
                            <p className="text-muted-foreground text-xs">1 hour ago</p>
                        </div>
                        <div className="hover:bg-muted cursor-pointer rounded-md px-3 py-1.5 transition-colors">
                            <p className="text-sm font-medium">System update completed</p>
                            <p className="text-muted-foreground text-xs">3 hours ago</p>
                        </div>
                    </div>
                </div>
                <div className="border-t p-0.5">
                    <Button variant="ghost" className="w-full">
                        View all notifications
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
};
