import { ArrowRightIcon, CheckCircle2Icon, LockIcon, SparklesIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const Promo1 = () => {
    return (
        <Card className="relative">
            <div className="bg-primary/10 ring-primary/5 absolute inset-s-3 top-3 flex size-10 items-center justify-center rounded-full ring-6 md:inset-s-6 md:top-6">
                <LockIcon className="text-primary size-5" />
            </div>
            <CardHeader className="relative flex flex-col items-center text-center">
                <Badge variant="secondary">Pro Feature</Badge>
                <CardTitle className="text-lg">Unlock Advanced Analytics</CardTitle>
                <CardDescription className="mx-auto max-w-70">
                    Gain deeper insights into customer behavior and retention trends.
                </CardDescription>
            </CardHeader>

            <CardContent className="text-muted-foreground flex flex-col items-center justify-center gap-1">
                <div className="flex items-center gap-2">
                    <CheckCircle2Icon className="h-4 w-4 text-green-500" />
                    <span>Unlimited historical data</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2Icon className="h-4 w-4 text-green-500" />
                    <span>Export reports to CSV/PDF</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2Icon className="h-4 w-4 text-green-500" />
                    <span>AI-powered forecasting</span>
                </div>
            </CardContent>

            <CardFooter className="justify-center">
                <Button className="gap-2 px-4">
                    <SparklesIcon className="size-4" />
                    Upgrade to Pro
                    <ArrowRightIcon className="size-4 opacity-75" />
                </Button>
            </CardFooter>
        </Card>
    );
};
