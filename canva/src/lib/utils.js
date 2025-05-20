import { useAppDispatch } from "@/hooks/redux-hooks";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

