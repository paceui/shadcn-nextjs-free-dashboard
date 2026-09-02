import { Analytics7 } from "@/components/blocks/app/analytics/analytics-7";
import { Chart3 } from "@/components/blocks/dashboard/chart/chart-3";
import { Chart4 } from "@/components/blocks/dashboard/chart/chart-4";
import { Stat2, type Stat2Props } from "@/components/blocks/dashboard/stat/stat-2";
import { Table3 } from "@/components/blocks/dashboard/table/table-3";
import { Promo1 } from "@/components/blocks/layout/promo/promo-1";
import { PageTitle } from "@/components/templates/free-dashboard/layouts/page-title";

export const stats: Stat2Props[] = [
    {
        title: "Gross Revenue",
        value: "$7,142,480",
        trendValue: 12.5,
        footerLabel: "Record high",
        footerSubtext: "vs. $6,300,368 last month",
    },
    {
        title: "Total Orders",
        value: "1,248",
        trendValue: 5.2,
        footerLabel: "Increased volume",
        footerSubtext: "Successful holiday promotion",
    },
    {
        title: "Avg. Order Value",
        value: "$114.16",
        trendValue: -2.1,
        footerLabel: "Minor decrease",
        footerSubtext: "Due to high volume of small items",
    },
    {
        title: "Customer LTV",
        value: "$892.00",
        trendValue: 8.4,
        footerLabel: "Strong retention",
        footerSubtext: "Upgraded subscription tiers",
    },
];

export const SalesDashboard = () => {
    return (
        <div>
            <PageTitle title="Sales Performance" />

            <div className="mt-4 grid gap-4 sm:mt-5 sm:gap-5 xl:grid-cols-4">
                {stats.map((stat, index) => (
                    <Stat2 {...stat} key={index} />
                ))}
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:gap-5 xl:grid-cols-7">
                <div className="xl:col-span-4">
                    <Chart3 />
                </div>
                <div className="xl:col-span-3">
                    <Table3 />
                </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:gap-5 lg:grid-cols-2 2xl:grid-cols-3">
                <Chart4 />
                <Analytics7 />
                <Promo1 />
            </div>
        </div>
    );
};
