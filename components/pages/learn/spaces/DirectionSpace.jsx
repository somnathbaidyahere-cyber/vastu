"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Grid3X3,
  ArrowRight,
} from "lucide-react";

const directions = [
  {
    code: "N",
    name: "North",
    character: "Open and receptive",
    light: "Cool, even light",
    movement: "Easy outward flow",
    experiences: ["Work", "Study", "Entry"],
    summary:
      "North-facing spaces can support alert, outward-looking activity and benefit from a clear edge.",
  },
  {
    code: "NE",
    name: "North-East",
    character: "Quiet and lucid",
    light: "Soft morning light",
    movement: "Slow arrival",
    experiences: ["Reflection", "Prayer", "Water"],
    summary:
      "The north-east is most legible when it remains light, calm and visually unburdened.",
  },
  {
    code: "E",
    name: "East",
    character: "Fresh and active",
    light: "Direct morning light",
    movement: "Beginnings",
    experiences: ["Learning", "Welcome", "Daily ritual"],
    summary:
      "Eastern spaces receive the day first, making them natural settings for routines and learning.",
  },
  {
    code: "SE",
    name: "South-East",
    character: "Focused and energetic",
    light: "Bright, warming light",
    movement: "Purposeful activity",
    experiences: ["Cooking", "Making", "Utility"],
    summary:
      "The south-east can support concentrated activity where heat, tools or transformation are present.",
  },
  {
    code: "S",
    name: "South",
    character: "Protected and inward",
    light: "Strong filtered light",
    movement: "Measured retreat",
    experiences: ["Rest", "Storage", "Privacy"],
    summary:
      "Southern spaces can work well with shade, depth and a stronger sense of enclosure.",
  },
  {
    code: "SW",
    name: "South-West",
    character: "Grounded and still",
    light: "Dense afternoon shade",
    movement: "Low circulation",
    experiences: ["Deep rest", "Stability", "Holding"],
    summary:
      "The south-west suits spaces that feel grounded, stable and less oriented toward constant movement.",
  },
  {
    code: "W",
    name: "West",
    character: "Reflective and contained",
    light: "Warm evening light",
    movement: "Return and closure",
    experiences: ["Dining", "Storage", "Conversation"],
    summary:
      "Western spaces receive the final light of the day and can suit slower, concluding activities.",
  },
  {
    code: "NW",
    name: "North-West",
    character: "Social and changing",
    light: "Moving lateral light",
    movement: "Arrival and departure",
    experiences: ["Guests", "Gathering", "Transition"],
    summary:
      "The north-west can accommodate people and activities that arrive, connect and move onward.",
  },
];

const gridPositions = {
  NW: "col-start-1 row-start-1",
  N: "col-start-2 row-start-1",
  NE: "col-start-3 row-start-1",
  W: "col-start-1 row-start-2",
  E: "col-start-3 row-start-2",
  SW: "col-start-1 row-start-3",
  S: "col-start-2 row-start-3",
  SE: "col-start-3 row-start-3",
};

export default function DirectionSpace() {
  const [selectedDirection, setSelectedDirection] = useState(
    directions.find((direction) => direction.code === "NE")
  );

  return (
    <section
      id="direction-space"
      className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="section-badge">
            Direction × space
          </p>

          <h2 className="section-heading">
            Direction gives space a character
          </h2>

          <p className="section-description">
            Explore how orientation changes the relationship between
            light, movement and spatial experience.
          </p>
        </div>

        {/* Explorer */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-stretch">
          {/* Direction Grid */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto grid aspect-square max-w-xl grid-cols-3 grid-rows-3 gap-2 border border-border/60 bg-secondary/30 p-3 sm:gap-3 sm:p-5">
              {directions.map((direction) => {
                const active =
                  selectedDirection.code === direction.code;

                return (
                  <button
                    key={direction.code}
                    type="button"
                    onClick={() =>
                      setSelectedDirection(direction)
                    }
                    aria-pressed={active}
                    aria-label={`Explore ${direction.name}`}
                    className={`${
                      gridPositions[direction.code]
                    } flex h-full w-full flex-col items-center justify-center rounded-sm border transition ${
                      active
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border/60 bg-card text-foreground hover:border-primary/40 hover:bg-secondary"
                    }`}
                  >
                    <span className="text-xl font-medium sm:text-2xl">
                      {direction.code}
                    </span>

                    <span
                      className={`hidden text-xs sm:block ${
                        active
                          ? "text-primary-foreground/75"
                          : "text-muted-foreground"
                      }`}
                    >
                      {direction.name}
                    </span>
                  </button>
                );
              })}

              {/* Centre */}
              <div className="col-start-2 row-start-2 flex flex-col items-center justify-center border border-primary/30 bg-background text-center">
                <Grid3X3 className="h-5 w-5 text-primary" />

                <span className="mt-2 text-xs font-medium">
                  Space
                </span>

                <span className="hidden text-[10px] text-muted-foreground sm:block">
                  at the centre
                </span>
              </div>
            </div>
          </div>

          {/* Information Panel */}
          <div
            className="flex min-h-[30rem] flex-col justify-between rounded-lg border border-border/60 bg-card p-7 sm:p-10 lg:col-span-6"
            aria-live="polite"
          >
            <div>
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">
                    Selected orientation
                  </p>

                  <h3 className="mt-3 text-3xl font-medium">
                    {selectedDirection.name}
                  </h3>
                </div>

                <span className="text-6xl font-medium text-primary/15">
                  {selectedDirection.code}
                </span>
              </div>

              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                {selectedDirection.summary}
              </p>

              <dl className="mt-10 divide-y divide-border/60 border-y border-border/60">
                <div className="grid grid-cols-2 py-4">
                  <dt className="text-sm text-muted-foreground">
                    Spatial character
                  </dt>

                  <dd className="text-right text-sm font-medium">
                    {selectedDirection.character}
                  </dd>
                </div>

                <div className="grid grid-cols-2 py-4">
                  <dt className="text-sm text-muted-foreground">
                    Light
                  </dt>

                  <dd className="text-right text-sm font-medium">
                    {selectedDirection.light}
                  </dd>
                </div>

                <div className="grid grid-cols-2 py-4">
                  <dt className="text-sm text-muted-foreground">
                    Movement
                  </dt>

                  <dd className="text-right text-sm font-medium">
                    {selectedDirection.movement}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Experience Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {selectedDirection.experiences.map((experience) => (
                <span
                  key={experience}
                  className="rounded-full border border-border bg-secondary/50 px-4 py-2 text-xs"
                >
                  {experience}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Redirection */}
        <div className="mt-8">
          <Link
            href="/learn/directions"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            Explore directions
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}