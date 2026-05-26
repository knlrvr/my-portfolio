import Image from "next/image";
import { Reveal } from "./effects/reveal";
import WorkCard from "./work-card";
import { Container } from "./container";
import { LuBriefcase } from "react-icons/lu";

export default function WorkGrid() {
    return (
        <Reveal delay={0.16}>
            <Container
                title="Work"
                icon={<LuBriefcase size={20} />}
                iconColor="text-violet-500"
            >
                <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
                    <Reveal delay={0.24} className="pb-8">
                        <WorkCard
                            role="QA Engineer"
                            company="Rather Outdoors"
                            img="/ro-logo.png"
                            period="2025 - Present"
                            featured={true}
                            desc="Building infrastructure & tools that help teams trust what they ship."
                        />
                    </Reveal>

                    <Reveal delay={0.32} className="pt-8">
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
            </Container>
        </Reveal>
    )
}