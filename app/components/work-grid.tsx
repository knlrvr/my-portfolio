import { GridLayout, GridRow, GridSpacer } from "./gridlayout";
import WorkCard from "./work-card";

export default function HeroSection() {
  return (
    <section className="">
      <GridLayout>

        <GridSpacer height="h-24" />

        <GridRow className="relative">
          <p className="text-[11px] text-neutral-500 mx-2">
            work.
          </p>
        </GridRow>

        <GridRow className="py-8">
            <WorkCard
                role="QA Engineer"
                company="Rather Outdoors"
                img="/ro-logo.png"
                period="2025 - Present"
                featured={true}
                desc="Building infrastructure & tools that help teams trust what they ship."
            />
        </GridRow>

        <GridRow className="py-8">
            <WorkCard
                role="Software Engineer + Product"
                company="eraWorks Studio"
                img="/era.png"
                period="2022 - 2025"
                featured={false}
                desc="Partnered with a range of small to medium businesses on product direction & 0-to-1 development."
            />
        </GridRow>
      </GridLayout>
    </section>
  );
}