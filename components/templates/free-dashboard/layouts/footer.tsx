export const Footer = () => {
    return (
        <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="max-sm:text-center max-sm:text-sm">
                Built by{" "}
                <a
                    className="hover:text-primary font-medium hover:underline"
                    href="https://x.com/withden_"
                    target="_blank">
                    Denish
                </a>{" "}
                at{" "}
                <a className="hover:text-primary font-medium hover:underline" href="https://paceui.com" target="_blank">
                    PaceUI
                </a>
            </p>
            <div className="flex items-center gap-4 text-sm">
                <a href="#" className="not-hover:text-muted-foreground">
                    About
                </a>
                <a href="#" className="not-hover:text-muted-foreground">
                    Contact
                </a>
                <a href="#" className="not-hover:text-muted-foreground">
                    Support
                </a>
            </div>
        </div>
    );
};
