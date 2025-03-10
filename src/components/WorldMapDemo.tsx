
import { WorldMap } from "./ui/world-map";
import { motion } from "framer-motion";

export function WorldMapDemo() {
  return (
    <div className="py-8 bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl text-black">
          Network{" "}
          <span className="text-neutral-400">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Expert Network Cabling & Fiber Optic Installation Services in Al Ain & Abu Dhabi
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: { lat: 24.2, lng: 54.37 }, // Abu Dhabi
            end: { lat: 24.19, lng: 55.76 }, // Al Ain
          },
          {
            start: { lat: 24.2, lng: 54.37 }, // Abu Dhabi
            end: { lat: 25.276987, lng: 55.296249 }, // Dubai
          },
          {
            start: { lat: 24.19, lng: 55.76 }, // Al Ain
            end: { lat: 25.276987, lng: 55.296249 }, // Dubai
          },
          {
            start: { lat: 24.2, lng: 54.37 }, // Abu Dhabi
            end: { lat: 24.4664, lng: 54.3667 }, // Abu Dhabi outskirts
          },
          {
            start: { lat: 24.19, lng: 55.76 }, // Al Ain
            end: { lat: 24.1, lng: 55.8 }, // Al Ain outskirts
          },
        ]}
        lineColor="#1EAEDB"
      />
    </div>
  );
}
