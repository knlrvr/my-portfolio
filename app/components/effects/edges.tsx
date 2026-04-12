export default function Edges() {
    return (
        <>
            <div className="fixed top-0 left-0 right-0 h-[clamp(60px,6vh,100px)] pointer-events-none z-40"
                style={{ background: "linear-gradient(to bottom, var(--edge) 2%, transparent 100%)" }} />
            <div className="fixed bottom-0 left-0 right-0 h-[clamp(40px,6vh,80px)] pointer-events-none z-40"
                style={{ background: "linear-gradient(to top, var(--edge) 2%, transparent 100%)" }} />
        </>
    )
}