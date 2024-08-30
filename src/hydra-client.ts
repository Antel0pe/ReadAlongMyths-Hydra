import { HydraClient } from "hydra-ai";
import MapView from "./components/map-view";

const hydra = new HydraClient(process.env.OPENAI_MODEL ?? "gpt-4o");

export const initHydraRegistration = async () => {
  await Promise.all([
    hydra.registerComponent(
      "Map",
      `A map that displays a map centered at a specified location, with a specified zoom level.`,
      MapView,
      {
        centerLatLon: JSON.stringify({
          type: "number[]",
          description: "The latitude and longitude of the center of the map.",
          default: [0, 0],
          required: false,
        }),
        zoom: JSON.stringify({
          type: "number",
          description: "The zoom level of the map.",
          default: 3,
          required: false,
        }),
        markers: JSON.stringify({
          type: "object[]",
          description: "An object with lat and lon properties. Each object represents a marker on the map.",
          default: [],
          required: false,
        }),
      }
    ),
  ]);
};

export default hydra;
