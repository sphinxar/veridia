"use client";
/**
 * shadcn/ui-style primitives (Radix + Tailwind + cva), adapted to the Veridia theme.
 */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Dialog as DialogPrimitive, Tabs as TabsPrimitive, Progress as ProgressPrimitive, Slot } from "radix-ui";
import { X, AlertCircle, CheckCircle2, Info, TriangleAlert } from "lucide-react";
import { cn } from "./cn";

// ---------------------------------------------------------------- Button

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary-hover",
        navy: "bg-navy-900 text-white shadow-sm hover:bg-navy-800",
        outline: "border border-border bg-surface text-foreground hover:bg-muted",
        ghost: "text-foreground hover:bg-muted",
        danger: "bg-danger text-white hover:bg-red-800",
        link: "text-primary underline-offset-4 hover:underline px-0",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        default: "h-10 px-4",
        lg: "h-11 px-6 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "button";
    return <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

// ---------------------------------------------------------------- Card

export function Card({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-lg border border-border bg-surface shadow-sm", className)} {...p} />;
}
export function CardHeader({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-1 p-5 pb-3", className)} {...p} />;
}
export function CardTitle({ className, ...p }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-base font-semibold text-navy-900", className)} {...p} />;
}
export function CardDescription({ className, ...p }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-muted-foreground", className)} {...p} />;
}
export function CardContent({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-5 pt-0", className)} {...p} />;
}
export function CardFooter({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center gap-2 border-t border-border p-4", className)} {...p} />;
}

// ---------------------------------------------------------------- Badge

export const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap",
  {
    variants: {
      tone: {
        neutral: "border-border bg-muted text-muted-foreground",
        success: "border-emerald-200 bg-primary-soft text-emerald-800",
        warning: "border-amber-200 bg-warning-soft text-amber-800",
        danger: "border-red-200 bg-danger-soft text-red-800",
        info: "border-blue-200 bg-info-soft text-blue-800",
        navy: "border-navy-800 bg-navy-900 text-white",
      },
    },
    defaultVariants: { tone: "neutral" },
  },
);
export function Badge({
  className,
  tone,
  ...p
}: React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ tone }), className)} {...p} />;
}

// ---------------------------------------------------------------- Form controls

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...p }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 aria-[invalid=true]:border-danger",
        className,
      )}
      {...p}
    />
  ),
);
Input.displayName = "Input";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...p }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[90px] w-full rounded-md border border-border bg-surface px-3 py-2 text-sm placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring aria-[invalid=true]:border-danger",
        className,
      )}
      {...p}
    />
  ),
);
Textarea.displayName = "Textarea";

export function Label({ className, ...p }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cn("text-sm font-medium text-navy-900", className)} {...p} />;
}

export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="text-xs text-danger">
      {message}
    </p>
  );
}

export const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, ...p }, ref) => (
    <select
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md border border-border bg-surface px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      {...p}
    />
  ),
);
Select.displayName = "Select";

// ---------------------------------------------------------------- Alert

const alertIcons = { info: Info, success: CheckCircle2, warning: TriangleAlert, danger: AlertCircle };
const alertTones = {
  info: "border-blue-200 bg-info-soft text-blue-900",
  success: "border-emerald-200 bg-primary-soft text-emerald-900",
  warning: "border-amber-200 bg-warning-soft text-amber-900",
  danger: "border-red-200 bg-danger-soft text-red-900",
};
export function Alert({
  tone = "info",
  title,
  children,
  className,
}: {
  tone?: keyof typeof alertTones;
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  const Icon = alertIcons[tone];
  return (
    <div role={tone === "danger" ? "alert" : "status"} className={cn("flex gap-3 rounded-md border p-3 text-sm", alertTones[tone], className)}>
      <Icon className="mt-0.5 size-4 shrink-0" aria-hidden />
      <div className="space-y-1">
        {title && <p className="font-medium">{title}</p>}
        {children && <div className="text-[13px] leading-relaxed opacity-90">{children}</div>}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------- Progress / Skeleton / Separator

export function Progress({ value, className, label }: { value: number; className?: string; label?: string }) {
  return (
    <ProgressPrimitive.Root
      aria-label={label}
      value={value}
      className={cn("relative h-2 w-full overflow-hidden rounded-full bg-muted", className)}
    >
      <ProgressPrimitive.Indicator
        className="h-full bg-primary transition-all"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </ProgressPrimitive.Root>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return <div aria-hidden className={cn("animate-pulse rounded-md bg-muted", className)} />;
}

export function Separator({ className }: { className?: string }) {
  return <div role="separator" className={cn("h-px w-full bg-border", className)} />;
}

// ---------------------------------------------------------------- Dialog

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

export function DialogContent({
  className,
  children,
  title,
  description,
}: {
  className?: string;
  children: React.ReactNode;
  title: string;
  description?: string;
}) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-navy-950/40 backdrop-blur-[1px]" />
      <DialogPrimitive.Content
        className={cn(
          "fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border border-border bg-surface p-6 shadow-xl focus:outline-none",
          className,
        )}
      >
        <DialogPrimitive.Title className="text-lg font-semibold text-navy-900">{title}</DialogPrimitive.Title>
        {description ? (
          <DialogPrimitive.Description className="mt-1 text-sm text-muted-foreground">{description}</DialogPrimitive.Description>
        ) : (
          <DialogPrimitive.Description className="sr-only">{title}</DialogPrimitive.Description>
        )}
        <div className="mt-4">{children}</div>
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm text-muted-foreground hover:text-foreground" aria-label="Close">
          <X className="size-4" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

// ---------------------------------------------------------------- Tabs

export const Tabs = TabsPrimitive.Root;
export function TabsList({ className, ...p }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return <TabsPrimitive.List className={cn("inline-flex h-10 items-center gap-1 rounded-md bg-muted p-1", className)} {...p} />;
}
export function TabsTrigger({ className, ...p }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "inline-flex items-center justify-center rounded px-3 py-1.5 text-sm font-medium text-muted-foreground transition-all data-[state=active]:bg-surface data-[state=active]:text-navy-900 data-[state=active]:shadow-sm",
        className,
      )}
      {...p}
    />
  );
}
export const TabsContent = TabsPrimitive.Content;

// ---------------------------------------------------------------- Table

export function Table({ className, ...p }: React.TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="w-full overflow-x-auto">
      <table className={cn("w-full caption-bottom text-sm", className)} {...p} />
    </div>
  );
}
export function THead(p: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className="border-b border-border bg-muted/50" {...p} />;
}
export function TBody(p: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className="divide-y divide-border" {...p} />;
}
export function TR({ className, ...p }: React.HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={cn("hover:bg-muted/40", className)} {...p} />;
}
export function TH({ className, ...p }: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return <th className={cn("h-10 px-3 text-left align-middle text-xs font-semibold uppercase tracking-wide text-muted-foreground", className)} {...p} />;
}
export function TD({ className, ...p }: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className={cn("px-3 py-3 align-middle", className)} {...p} />;
}

// ---------------------------------------------------------------- Composite helpers

export function EmptyState({
  icon,
  title,
  description,
  action,
}: {
  /** A rendered icon element (elements, unlike components, can cross the RSC boundary). */
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border bg-surface px-6 py-12 text-center">
      {icon && <div className="rounded-full bg-muted p-3 text-muted-foreground [&_svg]:size-6">{icon}</div>}
      <div className="space-y-1">
        <p className="font-medium text-navy-900">{title}</p>
        {description && <p className="max-w-md text-sm text-muted-foreground">{description}</p>}
      </div>
      {action}
    </div>
  );
}

export function Stat({
  label,
  value,
  hint,
  className,
}: {
  label: string;
  value: React.ReactNode;
  hint?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-lg border border-border bg-surface p-4", className)}>
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="tabular mt-1 text-2xl font-semibold text-navy-900">{value}</p>
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

export function Spinner({ className }: { className?: string }) {
  return (
    <svg className={cn("size-4 animate-spin", className)} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
  );
}
