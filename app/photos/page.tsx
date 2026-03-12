import { Metadata } from "next";
import PageTop from "../components/page-top";
import PhotosGrid from "../components/photos-grid";

export const metadata: Metadata = {
    title: 'Kane Lariviere | Photos',
    description: 'Kane Lariviere • Software Engineer • Photos',
}

export default function Photos() {
    return (
        <div className="max-w-2xl mx-auto">
            <PageTop
                title="Photos"
                desc="Some of my favorite photos."
            />
            <PhotosGrid />
        </div>
    )
}