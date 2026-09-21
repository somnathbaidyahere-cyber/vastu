"use client";

import { Check, MessageCircle } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

export default function ConsultationSuccess({
  open,
  onOpenChange,
  resetForm,
}) {
  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        onOpenChange(value);

        if (!value) {
          resetForm();
        }
      }}
    >
      <DialogContent className="max-w-xl rounded-none border-border bg-background p-8 sm:p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-secondary text-primary">
          <Check className="h-5 w-5" aria-hidden="true" />
        </div>

        <DialogHeader className="mt-4 text-left">
          <DialogTitle className="text-3xl font-medium">
            Your request is with us.
          </DialogTitle>

          <DialogDescription className="mt-3 text-base leading-relaxed">
            Thank you for sharing your space. Continue the conversation on
            WhatsApp, or explore Vastu while you wait.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-7 flex-col gap-3 sm:flex-row sm:justify-start sm:space-x-0">
          <Button asChild className="rounded-full px-6">
            <a
              href="https://wa.me/YOURNUMBER"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle
                className="h-4 w-4"
                aria-hidden="true"
              />
              WhatsApp us
            </a>
          </Button>

          <DialogClose asChild>
            <Button
              asChild
              variant="outline"
              className="rounded-full px-6"
            >
              <a href="/learn">Continue exploring Vastu</a>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}