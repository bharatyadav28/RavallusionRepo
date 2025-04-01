"use client";
import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

function CustomDialog({ open, close, children }) {
  // useEffect(() => {
  //   if (open) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }

  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, [open]);
  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogTitle className="hidden"></DialogTitle>
      <DialogDescription className="hidden"></DialogDescription>
        <DialogContent
          className="h-screen overflow-y-auto border-none w-full outline-none">
          {children}
        </DialogContent>
    </Dialog>
  );
}

export default CustomDialog;