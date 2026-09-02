import {
    Edit2Icon,
    FileDownIcon,
    ListFilterIcon,
    MoreHorizontalIcon,
    NotepadTextIcon,
    WarehouseIcon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Product {
    id: string;
    name: string;
    sku: string;
    category: string;
    image: string;
    price: number;
    sales: number;
    revenue: number;
    status: "in-stock" | "low-stock" | "out-of-stock";
}

const products: Product[] = [
    {
        id: "PROD-001",
        name: "Wireless Noise-Canceling Headphones",
        sku: "WLNCH",
        category: "Electronics",
        image: "https://picsum.photos/id/14/80/80",
        price: 299,
        sales: 1240,
        revenue: 370760,
        status: "in-stock",
    },
    {
        id: "PROD-002",
        name: "Ergonomic Office Chair",
        sku: "ERGOC",
        category: "Furniture",
        image: "https://picsum.photos/id/431/80/80",
        price: 150.0,
        sales: 850,
        revenue: 127500,
        status: "low-stock",
    },
    {
        id: "PROD-003",
        name: "Mechanical Gaming Keyboard",
        sku: "MECHGK",
        category: "Electronics",
        image: "https://picsum.photos/id/409/80/80",
        price: 89.99,
        sales: 600,
        revenue: 53994,
        status: "in-stock",
    },
    {
        id: "PROD-004",
        name: "Smartphone Stand",
        sku: "SPST",
        category: "Accessories",
        image: "https://picsum.photos/id/265/80/80",
        price: 19.99,
        sales: 450,
        revenue: 8995,
        status: "out-of-stock",
    },
    {
        id: "PROD-005",
        name: "4K Monitor 27-inch",
        sku: "Moni-4K",
        category: "Electronics",
        image: "https://picsum.photos/id/96/80/80",
        price: 399,
        sales: 320,
        revenue: 127680,
        status: "in-stock",
    },
    {
        id: "PROD-006",
        name: "Smart Home Security Camera",
        sku: "SH-CAM-01",
        category: "Smart Home",
        image: "https://picsum.photos/id/91/80/80",
        price: 89.99,
        sales: 1100,
        revenue: 98989,
        status: "low-stock",
    },
];

const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    }).format(value);

export const Table3 = () => {
    return (
        <Card className="w-full gap-5 pb-5 max-md:py-4!">
            <CardHeader className="max-md:px-4">
                <CardTitle>Top Selling Products</CardTitle>
                <CardDescription>Your highest performing products for this month.</CardDescription>
                <CardAction>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon-sm" aria-label="Filter" className="max-md:hidden">
                            <ListFilterIcon className="size-3.5" />
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                render={
                                    <Button size="icon-sm" variant="outline" aria-label="Menu">
                                        <MoreHorizontalIcon className="size-4" />
                                    </Button>
                                }
                            />
                            <DropdownMenuContent align="end" className="w-44">
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>
                                        <NotepadTextIcon className="size-4" />
                                        View Report
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <WarehouseIcon className="size-4" />
                                        Manage Inventory
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <FileDownIcon className="size-4" />
                                        Export as CSV
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </CardAction>
            </CardHeader>
            <CardContent className="max-md:px-4">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-muted/60">
                            <TableHead className="w-12">Image</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Revenue</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <Avatar className="h-9 w-9">
                                        <AvatarImage src={product.image} alt={product.name} />
                                        <AvatarFallback>{product.name.slice(0, 2)}</AvatarFallback>
                                    </Avatar>
                                </TableCell>

                                <TableCell>
                                    <div className="flex w-32 flex-col">
                                        <p className="truncate font-medium">{product.name}</p>
                                        <p className="text-muted-foreground text-xs">{product.sku}</p>
                                    </div>
                                </TableCell>

                                <TableCell>{product.category}</TableCell>

                                <TableCell>
                                    <Badge
                                        variant={
                                            product.status === "out-of-stock"
                                                ? "destructive"
                                                : product.status === "low-stock"
                                                  ? "default"
                                                  : "secondary"
                                        }
                                        className="whitespace-nowrap capitalize">
                                        {product.status.replaceAll("-", " ")}
                                    </Badge>
                                </TableCell>

                                <TableCell>
                                    <div className="flex flex-col">
                                        <p className="font-medium">{formatCurrency(product.revenue)}</p>
                                        <p className="text-muted-foreground text-xs">
                                            {product.sales.toLocaleString()} sold
                                        </p>
                                    </div>
                                </TableCell>

                                <TableCell className="text-right">
                                    <Button variant="ghost" size="icon-sm">
                                        <Edit2Icon className="size-3.5" />
                                        <span className="sr-only">Edit</span>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};
