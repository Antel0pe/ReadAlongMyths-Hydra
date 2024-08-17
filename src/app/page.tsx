"use client";
import hydra from "@/hydra-client";
import { HydraChat } from "hydra-ai";
import { ReactElement, useState } from "react";

export default function Home() {
  const [hydraComponent, setCanvasComponent] = useState<ReactElement | null>(
    null
  );

  const handleComponent = (component: ReactElement) => {
    setCanvasComponent(component);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HydraChat
        hydraClient={hydra}
        initialMessages={[]}
        inputBackgroundColor="#343437"
        inputTextColor="white"
        loadingIconColor="gray"
        aiIconColor="#70bfae"
        aiName="Hydra"
        handleComponent={handleComponent}
      />
    </main>
  );
}
