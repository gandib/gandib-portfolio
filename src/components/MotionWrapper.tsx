"use client";
import { motion, DOMMotionComponents } from "framer-motion";
import { forwardRef } from "react";

interface MotionWrapperProps {
  type?: keyof DOMMotionComponents;
  children: React.ReactNode;
}

const MotionWrapper = forwardRef<HTMLDivElement, MotionWrapperProps>(
  ({ type = "div", children, ...props }, ref) => {
    const Component = (motion as any)[type] || motion.div; // Ensuring TS understands dynamic access

    return (
      <Component ref={ref} {...props}>
        {children}
      </Component>
    );
  }
);

export default MotionWrapper;
