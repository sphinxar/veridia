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
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[background-color,border-color,box-shadow,filter,color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Lilac gradient pill with a soft violet glow (primary action).
        default:
          "bg-[linear-gradient(135deg,#e6d3ff_0%,#c4a1ff_45%,#a98bff_100%)] text-primary-foreground shadow-[0_10px_30px_-8px_rgb(167_139_250/0.65)] hover:brightness-110 hover:shadow-[0_12px_36px_-8px_rgb(167_139_250/0.8)]",
        // Deep violet pill for secondary-but-prominent actions.
        navy: "border border-accent/30 bg-navy-800 text-foreground hover:border-accent/60 hover:bg-navy-700",
        // Transparent pill with a violet outline (secondary action).
        outline: "border border-accent/55 bg-white/[0.03] text-foreground hover:border-accent/90 hover:bg-accent/10",
        ghost: "text-muted-foreground hover:bg-white/[0.06] hover:text-foreground",
        danger: "border border-danger/40 bg-danger-soft text-danger hover:border-danger/70 hover:bg-danger/20",
        link: "rounded-none px-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 px-3.5 text-xs",
        default: "h-10 px-5",
        lg: "h-12 px-7 text-base",
        icon: "h-10 w-10",
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

/** Glass panel: translucent violet surface, hairline border, faint top highlight. */
export function Card({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.08] bg-surface/80 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.05)]",
        className,
      )}
      {...p}
    />
  );
}
export function CardHeader({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-1 p-5 pb-3", className)} {...p} />;
}
export function CardTitle({ className, ...p }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-base font-semibold tracking-tight text-foreground", className)} {...p} />;
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
        neutral: "border-white/10 bg-white/[0.05] text-muted-foreground",
        success: "border-success/30 bg-success-soft text-success",
        warning: "border-warning/30 bg-warning-soft text-warning",
        danger: "border-danger/30 bg-danger-soft text-danger",
        info: "border-info/30 bg-info-soft text-info",
        navy: "border-accent/35 bg-primary-soft text-accent",
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
        "flex h-11 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-foreground transition-colors placeholder:text-muted-foreground/60 hover:border-white/20 focus-visible:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:opacity-50 aria-[invalid=true]:border-danger",
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
        "flex min-h-[96px] w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground/60 hover:border-white/20 focus-visible:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 aria-[invalid=true]:border-danger",
        className,
      )}
      {...p}
    />
  ),
);
Textarea.displayName = "Textarea";

export function Label({ className, ...p }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cn("text-sm font-medium text-foreground", className)} {...p} />;
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
        "flex h-11 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 text-sm text-foreground transition-colors hover:border-white/20 focus-visible:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 [&>option]:bg-surface-raised",
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
  info: "border-info/25 bg-info-soft",
  success: "border-success/25 bg-success-soft",
  warning: "border-warning/25 bg-warning-soft",
  danger: "border-danger/30 bg-danger-soft",
};
const alertIconTones = { info: "text-info", success: "text-success", warning: "text-warning", danger: "text-danger" };
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
    <div role={tone === "danger" ? "alert" : "status"} className={cn("flex gap-3 rounded-xl border p-3.5 text-sm text-foreground", alertTones[tone], className)}>
      <Icon className={cn("mt-0.5 size-4 shrink-0", alertIconTones[tone])} aria-hidden />
      <div className="space-y-1">
        {title && <p className="font-medium">{title}</p>}
        {children && <div className="text-[13px] leading-relaxed text-foreground/80">{children}</div>}
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
      className={cn("relative h-2 w-full overflow-hidden rounded-full bg-white/10", className)}
    >
      <ProgressPrimitive.Indicator
        className="h-full rounded-full bg-[linear-gradient(90deg,#a98bff,#e6d3ff)] transition-all"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </ProgressPrimitive.Root>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return <div aria-hidden className={cn("animate-pulse rounded-xl bg-white/[0.07]", className)} />;
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
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm" />
      <DialogPrimitive.Content
        className={cn(
          "fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-surface-raised p-6 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.8)] focus:outline-none",
          className,
        )}
      >
        <DialogPrimitive.Title className="text-lg font-semibold tracking-tight text-foreground">{title}</DialogPrimitive.Title>
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
  return <TabsPrimitive.List className={cn("inline-flex h-11 items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1", className)} {...p} />;
}
export function TabsTrigger({ className, ...p }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-all hover:text-foreground data-[state=active]:bg-primary-soft data-[state=active]:text-accent",
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
  return <thead className="border-b border-white/10 bg-white/[0.03]" {...p} />;
}
export function TBody(p: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className="divide-y divide-white/[0.06]" {...p} />;
}
export function TR({ className, ...p }: React.HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={cn("transition-colors hover:bg-white/[0.04]", className)} {...p} />;
}
export function TH({ className, ...p }: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return <th className={cn("h-11 px-3 text-left align-middle text-xs font-medium text-muted-foreground", className)} {...p} />;
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
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-accent/25 bg-white/[0.02] px-6 py-14 text-center">
      {icon && <div className="rounded-full bg-primary-soft p-3.5 text-accent [&_svg]:size-6">{icon}</div>}
      <div className="space-y-1.5">
        <p className="text-base font-medium text-foreground">{title}</p>
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
    <div className={cn("rounded-2xl border border-white/[0.08] bg-surface/80 p-4 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.05)]", className)}>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="tabular mt-1 text-2xl font-semibold tracking-tight text-foreground">{value}</p>
      {hint && <div className="mt-1 text-xs text-muted-foreground">{hint}</div>}
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
