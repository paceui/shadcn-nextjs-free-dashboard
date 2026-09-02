import { Chart1 } from "@/components/blocks/dashboard/chart/chart-1";
import { Chart2 } from "@/components/blocks/dashboard/chart/chart-2";
import { Stat1, type Stat1Props } from "@/components/blocks/dashboard/stat/stat-1";
import { Table1 } from "@/components/blocks/dashboard/table/table-1";
import { Widget1 } from "@/components/blocks/dashboard/widget/widget-1";
import { Widget5 } from "@/components/blocks/dashboard/widget/widget-5";
import { PageTitle } from "@/components/templates/free-dashboard/layouts/page-title";

const logStats: Stat1Props[] = [
    {
        title: "Total Throughput",
        value: "45.2k RPM",
        changeValue: "+5.2%",
        direction: "up",
    },
    {
        title: "P99 Latency",
        value: "210ms",
        changeValue: "+15ms",
        direction: "down",
    },
    {
        title: "Failed Requests (5xx)",
        value: "14",
        changeValue: "-21.4%",
        direction: "up",
    },
    {
        title: "Success Rate (2xx)",
        value: "99.92%",
        changeValue: "+0.04%",
        direction: "up",
    },
    {
        title: "Auth Failures (401/403)",
        value: "128",
        changeValue: "+12%",
        direction: "down",
    },
];

export const LogsDashboard = () => {
    return (
        <div>
            <PageTitle title="Logs Analytics" />
            <div className="mt-4 grid gap-4 sm:mt-5 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {logStats.map((stat, index) => (
                    <Stat1 {...stat} key={index} />
                ))}
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:gap-5 xl:grid-cols-7">
                <div className="xl:col-span-4">
                    <Chart1 />
                </div>
                <div className="h-90 xl:col-span-3 2xl:h-94">
                    <Widget1 />
                </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:gap-5 lg:grid-cols-2 2xl:grid-cols-3">
                <Table1 />

                <Chart2 />

                <Widget5 />
            </div>
        </div>
    );
};
