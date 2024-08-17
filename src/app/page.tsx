"use client";
import Map from "@/components/map";
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
    <main className="flex min-h-screen flex-row p-24">
      <div className="z-10 w-[350px] bg-white rounded-md shadow-md">
        <HydraChat
          hydraClient={hydra}
          initialMessages={[]}
          inputBackgroundColor="#343437"
          inputTextColor="white"
          inputPlaceholder="Ask about a place or time in history..."
          loadingIconColor="gray"
          aiIconColor="#70bfae"
          aiName="Hydra"
          handleComponent={handleComponent}
        />
      </div>
      <Map />
    </main>
  );
}
