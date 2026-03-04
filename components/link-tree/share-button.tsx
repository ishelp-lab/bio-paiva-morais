"use client";

import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

export function ShareButton() {
  function handleShare() {
    const url = window.location.href;

    // exemplo simples: copia o link
    navigator.clipboard?.writeText(url);
    alert("Link copiado!");
  }

  return (
    <Button aria-label="Compartilhar" onClick={handleShare} variant="ghost" size="icon">
      <Share2 />
    </Button>
  );
}