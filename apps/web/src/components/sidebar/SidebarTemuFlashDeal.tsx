import { msg, T, useGT, useMessages, Var } from "gt-react";
import { GiftIcon, TagIcon, XIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "../ui/button";
import { toastManager } from "../ui/toast";

const TEMU_COUPON_REWARDS = [
  {
    title: msg("$100.00 Token Bundle Unlocked!"),
    description: msg("Just bring your own API key and invite 47 coworkers in 00:09:59."),
  },
  {
    title: msg("FREE Express Shipping on Git Worktrees!"),
    description: msg("Factory-direct branches arriving in 4 to 47 business sprints."),
  },
  {
    title: msg("Mystery Box PR Coupon Applied!"),
    description: msg("May contain 12 console.logs, 1 TODO, and a surprisingly clean diff."),
  },
  {
    title: msg("VIP Billionaire Coder Tier Unlocked!"),
    description: msg("You saved $0.00 today by running local agents on your own machine."),
  },
] as const;

function launchTemuConfetti() {
  void import("canvas-confetti")
    .then(({ default: confetti }) =>
      confetti({
        particleCount: 110,
        spread: 95,
        startVelocity: 34,
        gravity: 1.4,
        ticks: 130,
        origin: { x: 0.14, y: 0.85 },
        colors: ["#fb7701", "#ffd100", "#e5191f", "#ffffff", "#ff9a3d"],
        disableForReducedMotion: true,
      }),
    )
    .catch(() => undefined);
}

export function SidebarTemuFlashDeal() {
  const gt = useGT();
  const m = useMessages();
  const [dismissed, setDismissed] = useState(false);
  const [spinCount, setSpinCount] = useState(0);

  if (dismissed) {
    return null;
  }

  const handleClaimCoupon = () => {
    const reward = TEMU_COUPON_REWARDS[spinCount % TEMU_COUPON_REWARDS.length]!;
    setSpinCount((count) => count + 1);
    launchTemuConfetti();
    toastManager.add({
      type: "success",
      title: m(reward.title),
      description: m(reward.description),
      timeout: 5_000,
    });
  };

  return (
    <div
      data-temu-flash-deal
      className="mb-1.5 rounded-lg border border-dashed border-primary/65 bg-primary/10 px-2.5 py-2 text-xs"
    >
      <div className="flex items-center justify-between gap-1.5">
        <span className="inline-flex items-center gap-1 font-semibold tracking-tight text-primary">
          <TagIcon className="size-3 shrink-0" aria-hidden />
          <T>FLASH DEAL · 99% OFF</T>
        </span>
        <Button
          aria-label={gt("Dismiss flash deal")}
          onClick={() => setDismissed(true)}
          size="icon-xs"
          variant="ghost"
        >
          <XIcon className="size-3" aria-hidden />
        </Button>
      </div>
      <p className="mt-0.5 text-2xs leading-snug text-muted-foreground">
        <T>Code like a billionaire. Free shipping on worktrees.</T>
      </p>
      <Button className="mt-1.5 w-full" onClick={handleClaimCoupon} size="xs">
        <GiftIcon className="size-3 shrink-0" aria-hidden />
        {spinCount === 0 ? (
          <T>Claim $100 Coupon</T>
        ) : (
          <T>
            Spin Again (<Var>{spinCount}</Var> claimed)
          </T>
        )}
      </Button>
    </div>
  );
}
