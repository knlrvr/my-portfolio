import WorkCard from "./work-card";

export default function WorkGrid() {
    return (
        <div>

            <WorkCard
                img="/ro-logo.png"
                role="QA Engineer"
                company="@ Rather Outdoors"
                period="2025 - Present"
                description="Architecting the systems that make shipping boring — testing infrastructure, developer tools, and the automation that lets teams move fast without breaking things."
                tags={[]}
                featured={true}
            />

            <WorkCard
                img="/era-logo.png"
                role="Software Engineer + Product"
                company="@ eraWorks Studio"
                period="2022 - 2025"
                description="Worked with a range of small to medium businesses, agencies, start-ups, and individuals to build products, experiences, and improve technical direction."
                tags={[]}
                featured={false}
            />

        </div>
    )
}