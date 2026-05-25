import Image from "next/image";
import { Reveal } from "./effects/reveal";
import WorkCard from "./work-card";

export default function WorkGrid() {
    return (
        <div className="pt-4 divide-y divide-neutral-200 dark:divide-neutral-800">

            <Reveal delay={0.16} className="pb-4">
                <WorkCard
                    role="QA Engineer"
                    company="Rather Outdoors"
                    img="/ro-logo.png"
                    period="2025 - Present"
                    featured={true}
                    desc="Building infrastructure & tools that help teams trust what they ship."
                />
            </Reveal>

            <Reveal delay={0.32} className="pt-4">
                <WorkCard
                    role="Software Engineer + Product"
                    company="eraWorks Studio"
                    img="/era.png"
                    period="2022 - 2025"
                    featured={false}
                    desc="Partnered with a range of small to medium businesses on product direction & 0-to-1 development."
                />
            </Reveal>

        </div>
    )
}