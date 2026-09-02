"use client";

import { useState } from "react";

import { Check, Copy, Gift, Share, Sparkles, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export const Widget1 = () => {
    const [isReferDialogOpen, setIsReferDialogOpen] = useState(false);

    return (
        <Dialog open={isReferDialogOpen} onOpenChange={setIsReferDialogOpen}>
            <DialogTrigger
                render={
                    <Button variant="ghost" size="icon-sm" aria-label="Refer a Friend">
                        <Gift className="size-4.5" />
                    </Button>
                }></DialogTrigger>
            <DialogContent className="max-w-lg gap-6">
                <DialogHeader className="flex flex-col items-center gap-3">
                    <div className="bg-muted flex size-14 items-center justify-center rounded-full">
                        <Gift className="text-primary size-7" />
                    </div>
                    <div className="flex flex-col gap-1 text-center">
                        <DialogTitle className="text-2xl font-medium">Refer a Friend & Get Rewarded</DialogTitle>
                        <DialogDescription>
                            Share the love and both of you will receive 2 months of free premium access
                        </DialogDescription>
                    </div>
                </DialogHeader>

                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                        <h4 className="font-medium">Why refer?</h4>
                        <div className="flex flex-col gap-2.5">
                            <div className="flex items-start gap-3">
                                <div className="bg-muted mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg">
                                    <Sparkles className="text-primary size-4" />
                                </div>
                                <div>
                                    <p className="font-medium">2 Months Free Premium</p>
                                    <p className="text-muted-foreground text-sm">
                                        Get instant access to all premium features
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-muted mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg">
                                    <Users className="text-primary size-4" />
                                </div>
                                <div>
                                    <p className="font-medium">Help Your Friends</p>
                                    <p className="text-muted-foreground text-sm">
                                        They get 2 months free too when they sign up
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-muted mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg">
                                    <Check className="text-primary size-4" />
                                </div>
                                <div>
                                    <p className="font-medium">Unlimited Referrals</p>
                                    <p className="text-muted-foreground text-sm">
                                        No limit on how many friends you can refer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="font-medium">How it works</h4>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2.5">
                                <div className="bg-muted flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium">
                                    1
                                </div>
                                <p className="text-sm">Copy your unique referral link below</p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="bg-muted flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium">
                                    2
                                </div>
                                <p className="text-sm">Share it with friends via email or social media</p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="bg-muted flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium">
                                    3
                                </div>
                                <p className="text-sm">Both get 2 months free when they sign up!</p>
                            </div>
                        </div>
                    </div>

                    <Card className="bg-muted/50 flex flex-col gap-2 p-4">
                        <label className="block text-sm font-medium">Your Referral Link</label>
                        <div className="flex gap-2">
                            <Input
                                readOnly
                                value="https://app.example.com/ref/ABC123XYZ"
                                className="bg-background shadow-none"
                            />
                            <Button variant="outline" size="icon" className="shrink-0 shadow-none">
                                <Copy className="size-4" />
                            </Button>
                        </div>
                    </Card>

                    <div className="flex gap-2">
                        <Button className="flex-1 gap-2" onClick={() => setIsReferDialogOpen(false)}>
                            <Share className="size-4" />
                            Share Link
                        </Button>
                        <Button variant="outline" className="flex-1" onClick={() => setIsReferDialogOpen(false)}>
                            Close
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
