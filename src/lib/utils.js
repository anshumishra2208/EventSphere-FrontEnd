export { cn } from "cn";
import { format, parseISO } from "date-fns";

export function formatPrice(amount, currency = "INR") {
  const value = Number(amount);

  if (!value) {
    return "Free";
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatEventDate(dateInput) {
  if (!dateInput) {
    return;
  }
  const date = parseISO(dateInput);

  return format(date, "E, LLL dd, yyyy");
}

export function formatEventTimeRange(startDate, endDate) {
  if (!startDate || !endDate) {
    return;
  }

  const start = parseISO(startDate);

  const startTime = format(start, "h:mm a");

  const end = parseISO(endDate);

  const endTime = format(end, "h:mm a");

  return `${startTime} - ${endTime}`;
}