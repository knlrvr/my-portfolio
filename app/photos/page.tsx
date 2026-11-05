import { Metadata } from "next";
import PageTop from "../components/page-top";
import Gallery from "../components/gallery";

export const metadata: Metadata = {
    title: 'Kane Lariviere | Photos',
    description: 'Kane Lariviere • Software Engineer • Photos',
  }

export default function Photos() {
    return (
        <div className="mb-12">
            <div className="max-w-md mx-auto">
                <PageTop
                    title="Photos"
                    description="A few things I liked seeing."
                    back={false}
                />
            </div>

            <Gallery />
        </div>
    )
}
