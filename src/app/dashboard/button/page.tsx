import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2, PiggyBank } from "lucide-react";

export default function ButtonPage() {
  return (
    <div className="grid grid-cols-5 gap-4">
      <Button>Button</Button>
      <Button variant={"destructive"}>Destructive</Button>
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"link"}>link</Button>
      <Button variant={"outline"}>outline</Button>
      <Button variant={"secondary"}>secondary</Button>

      <Button variant="default" size="icon">
        <ChevronRight />
      </Button>

      <Button variant="link" size="icon">
        <PiggyBank className="h-4 w-4" /> Piggy bank for saving money
      </Button>

      <Button disabled>
        <Loader2 className="animate-spin" />
        Please wait...
      </Button>
    </div>
  );
}
