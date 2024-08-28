"use client";
import MapView from "@/components/map-view";
import hydra, { initHydraRegistration } from "@/hydra-client";
import { HydraChat } from "hydra-ai";
import { ReactElement, useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    initHydraRegistration();
  }, []);

  const [hydraComponent, setHydraComponent] = useState<ReactElement | null>(
    <MapView />
  );

  const handleHydraComponentUpdate = (component: ReactElement) => {
    setHydraComponent(component);
  };

  return (
    <main className="flex h-full flex-row p-24">
      <div className="z-10 w-[350px] bg-white rounded-md shadow-md text-black h-full">
        <HydraChat
          hydraClient={hydra}
          initialMessages={[]}
          inputBackgroundColor="#343437"
          inputTextColor="white"
          inputPlaceholder="Ask about a place or time in history..."
          loadingIconColor="gray"
          aiIconColor="#70bfae"
          aiName="Hydra"
          handleComponent={handleHydraComponentUpdate}
        />
      </div>
      {hydraComponent}
    </main>
  );
}
