"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

type Props = {
  centerLatLon?: [number, number];
  zoom?: number;
};

export default function MapView({ centerLatLon, zoom }: Props) {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <div className="w-full h-full " style={{ zIndex: 1 }}>
      <Map centerLatLon={centerLatLon} zoom={zoom} />
    </div>
  );
}
