import PageTop from "../components/page-top";
import PhotosGrid from "../components/photos-grid";

export default function Photos() {
    return (
        <div className="max-w-2xl mx-auto">
            <PageTop
                title="Kane Lariviere"
                desc="Photos"
            />
            <PhotosGrid />
        </div>
    )
}