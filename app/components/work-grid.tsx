import WorkCard from "./work-card";

export default function WorkGrid() {
    return (
        <div className="pt-4 divide-y divide-neutral-200 dark:divide-neutral-800">

            <WorkCard
                role="QA Engineer"
                company="Rather Outdoors"
                period="2025 - Present"
                featured={true}
                desc="Building infrastructure & tools that help teams ship faster."
            />

            <WorkCard
                role="Software Engineer + Product"
                company="eraWorks Studio"
                period="2022 - 2025"
                featured={false}
                desc={`Partnered with a range of small to medium businesses on product direction & 0-to-1 development.`}
            />

        </div>
    )
}