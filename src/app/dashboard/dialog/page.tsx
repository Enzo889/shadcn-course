"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Copy } from "lucide-react";
import { useState } from "react";

export default function DialogPage() {
  const shadcnInstallationLink: string =
    "https://ui.shadcn.com/docs/installation";
  const [copy, setCopy] = useState(shadcnInstallationLink);

  const { toast } = useToast();
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Share</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                defaultValue={copy}
                onChange={(e) => setCopy(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              size="sm"
              className="px-3"
              onClick={() => {
                navigator.clipboard.writeText(copy);
                toast({
                  title: "Copied to clipboard",
                  description: "Link copied to clipboard",
                  variant: "default",
                });
              }}
            >
              <span className="sr-only">Copy</span>
              <Copy />
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>{" "}
    </div>
  );
}
