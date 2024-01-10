import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

{/*TOSTUDY: IntlNumberFormatOptions */}
{/*TOSTUDY: Destructing elements in a Array */}

export function formatPrice(
  price: number | string,
  options: { 
    currency?: "USD" | "EUR" | "GBP" | "BDT" | "BRL",  
    notation?: Intl.NumberFormatOptions["notation"]
  } = {}
) {
  const {currency = "BRL", notation = "compact"} = options

  const numericPrice = typeof price === "string" ? parseFloat(price) : price

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice)
}
