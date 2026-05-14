import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";

/**
 * Shared FormField component for Phase 3 Form UX improvements.
 * Integrates with react-hook-form and provides consistent styling,
 * accessibility, and micro-animations for error states.
 */

export const FormField = ({
  name,
  label,
  type = "text",
  placeholder,
  required = false,
  options = [], // For Select type
  rows = 4,      // For Textarea type
  className,
  description,
}) => {
  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();

  const error = errors[name];
  const value = watch(name);

  const isSelect = type === "select";
  const isTextarea = type === "textarea";

  return (
    <div className={cn("space-y-2 w-full", className)}>
      <div className="flex justify-between items-center">
        <Label 
          htmlFor={name}
          className="text-[11px] font-bold uppercase tracking-[0.1em] text-mentor-muted flex items-center gap-1"
        >
          {label}
          {required && <span className="text-mentor-blue" aria-hidden="true">*</span>}
        </Label>
      </div>

      <div className="relative group">
        {isSelect ? (
          <Select
            onValueChange={(val) => setValue(name, val, { shouldValidate: true })}
            value={value}
          >
            <SelectTrigger 
              id={name}
              aria-invalid={!!error}
              aria-describedby={error ? `${name}-error` : description ? `${name}-description` : undefined}
              className={cn(
                "h-12 rounded-xl border-mentor-line bg-white/50 backdrop-blur-sm transition-all focus:ring-2 focus:ring-mentor-blue/20",
                error && "border-red-500 focus:ring-red-500/20"
              )}
            >
              <SelectValue placeholder={placeholder || "Select an option"} />
            </SelectTrigger>
            <SelectContent>
              {options.map((opt) => (
                <SelectItem key={opt.value || opt} value={opt.value || opt}>
                  {opt.label || opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : isTextarea ? (
          <Textarea
            id={name}
            placeholder={placeholder}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : description ? `${name}-description` : undefined}
            className={cn(
              "min-h-[120px] rounded-2xl border-mentor-line bg-white/50 backdrop-blur-sm transition-all focus:ring-2 focus:ring-mentor-blue/20 resize-none",
              error && "border-red-500 focus:ring-red-500/20"
            )}
            {...register(name)}
          />
        ) : (
          <Input
            id={name}
            type={type}
            placeholder={placeholder}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : description ? `${name}-description` : undefined}
            className={cn(
              "h-12 rounded-xl border-mentor-line bg-white/50 backdrop-blur-sm transition-all focus:ring-2 focus:ring-mentor-blue/20",
              error && "border-red-500 focus:ring-red-500/20"
            )}
            {...register(name)}
          />
        )}

        {/* Focus border animation */}
        <div className="absolute inset-0 rounded-xl border border-mentor-blue scale-[1.02] opacity-0 pointer-events-none transition-all duration-300 group-focus-within:opacity-100 group-focus-within:scale-100" />
      </div>

      {description && !error && (
        <p id={`${name}-description`} className="text-[11px] text-mentor-muted/70 px-1">{description}</p>
      )}

      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            id={`${name}-error`}
            role="alert"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-[11px] font-medium text-red-500 px-1"
          >
            {error.message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};
