"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const countries = [
    { code: "US", name: "United States", flag: "https://flagcdn.com/w40/us.png" },
    { code: "GB", name: "United Kingdom", flag: "https://flagcdn.com/w40/gb.png" },
    { code: "DE", name: "Germany", flag: "https://flagcdn.com/w40/de.png" },
    { code: "FR", name: "France", flag: "https://flagcdn.com/w40/fr.png" },
    { code: "ES", name: "Spain", flag: "https://flagcdn.com/w40/es.png" },
    { code: "IT", name: "Italy", flag: "https://flagcdn.com/w40/it.png" },
    { code: "CA", name: "Canada", flag: "https://flagcdn.com/w40/ca.png" },
    { code: "AU", name: "Australia", flag: "https://flagcdn.com/w40/au.png" },
];

export const Widget2 = () => {
    const [selectedCountry, setSelectedCountry] = useState("US");

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <Button variant="ghost" size="icon-sm">
                        <img
                            src={countries.find((c) => c.code === selectedCountry)?.flag}
                            alt=""
                            className="h-3.5 w-5 object-cover"
                        />
                    </Button>
                }></DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 shadow-none">
                {countries.map((country) => (
                    <DropdownMenuItem
                        key={country.code}
                        onClick={() => setSelectedCountry(country.code)}
                        className="cursor-pointer">
                        <img src={country.flag} alt="" className="me-2 h-4 w-6 object-cover" />
                        <span>{country.name}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
