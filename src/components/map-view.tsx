"use client";

import { ReactNode, useMemo } from 'react';
import dynamic from "next/dynamic";
import { LatLngExpression } from 'leaflet';
import { Dispatch } from 'react';

type Props = {
  centerLatLon?: [number, number];
  zoom?: number;
}


export default function MapView({ centerLatLon, zoom }: Props) {
    const Map = useMemo(() => dynamic(
      () => import('@/components/map'),
      { 
        loading: () => <p>A map is loading</p>,
        ssr: false
      }
    ), [])
  
    return (
        <div className="w-full h-full">
            <Map centerLatLon={centerLatLon} zoom={zoom} />
        </div>
    )
  }