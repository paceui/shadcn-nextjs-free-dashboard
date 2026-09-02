import { ClockFadingIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const data = [
    { id: "1", method: "GET", path: "/v1/users", status: 200, duration: "12ms", time: "just now" },
    { id: "2", method: "POST", path: "/v1/auth/login", status: 201, duration: "45ms", time: "15 mins ago" },
    { id: "3", method: "DELETE", path: "/v1/billing", status: 404, duration: "8ms", time: "2 hours ago" },
    { id: "4", method: "PATCH", path: "/v1/settings", status: 500, duration: "102ms", time: "Yesterday" },
    { id: "5", method: "GET", path: "/v1/settings", status: 201, duration: "64ms", time: "Last week" },
];

const getMethodColor = (method: string) => {
    switch (method) {
        case "GET":
        case "POST":
        case "PATCH":
            return "text-primary";
        case "DELETE":
            return "text-destructive";
    }
};

export const Table1 = () => {
    return (
        <Card className="gap-3 pt-4 pb-3">
            <CardHeader className="px-4">
                <div className="flex items-center gap-2">
                    <ClockFadingIcon className="size-4.5" />
                    <CardTitle>Recent Requests</CardTitle>
                </div>
                <CardDescription>A list of the latest API calls to your project.</CardDescription>
            </CardHeader>
            <CardContent className="px-3">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-muted/60">
                            <TableHead>Method</TableHead>
                            <TableHead>Endpoint</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Time</TableHead>
                            <TableHead className="text-right">Duration</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell className="text-xs font-semibold">
                                    <span className={getMethodColor(row.method)}>{row.method}</span>
                                </TableCell>
                                <TableCell className="font-mono text-xs">{row.path}</TableCell>
                                <TableCell>
                                    <Badge variant={row.status >= 400 ? "destructive" : "secondary"}>
                                        {row.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-xs">{row.time}</TableCell>
                                <TableCell className="text-muted-foreground text-right text-xs">
                                    {row.duration}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};
