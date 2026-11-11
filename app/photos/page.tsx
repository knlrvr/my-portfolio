import { Metadata } from "next";
import PageTop from "../components/page-top";
import Gallery from "../components/gallery";
import { Reveal } from "../components/effects/reveal";

export const metadata: Metadata = {
    title: 'Kane Lariviere | Photos',
    description: 'Kane Lariviere • Software Engineer • Photos',
  }

export default function Photos() {
    return (
        <main>
            <PageTop
                title="Photos"
                description="A few things I liked seeing."
                back={false}
            />

            {/* Edge to edge within the frame, like the home strip. */}
            <Reveal delay={0.24} className="-mx-6 border-t border-(--rule)">
                <Gallery />
            </Reveal>
        </main>
    )
}
