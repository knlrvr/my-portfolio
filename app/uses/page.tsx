import { Metadata } from "next";
import { Reveal } from "../components/effects/reveal";
import PageTop from "../components/page-top";
import Section from "../components/section";

export const metadata: Metadata = {
    title: 'Kane Lariviere | Uses',
    description: 'Kane Lariviere • Software Engineer • Uses',
  }

interface Item {
    name: React.ReactNode
    /** Short muted annotation shown on the right. */
    note?: string
}

const groups: { label: string; items: Item[] }[] = [
    {
        label: "office.",
        items: [
            { name: "M4 Macbook Air" },
            { name: <>27&quot; Samsung Curved Monitor</> },
            { name: <>24&quot; Dell Monitor</> },
            { name: <>55&quot; Adjustable Standing Desk</> },
            { name: <>An awful, inadequate chair that <em>just hurts</em></> },
        ],
    },
    {
        label: "coding.",
        items: [
            { name: "VSCode & Neovim", note: "editor" },
            { name: "Ghostty with tmux", note: "terminal" },
        ],
    },
    {
        label: "productivity.",
        items: [
            { name: "Raycast" },
            { name: "Obsidian" },
            { name: "Notion", note: "sometimes" },
        ],
    },
    {
        label: "gaming.",
        items: [
            { name: "Windows 10" },
            { name: "AMD Ryzen 9 5900XT" },
            { name: "GIGABYTE B550 Eagle" },
            { name: "16GB T-Force Delta DDR4" },
            { name: "NVIDIA GeForce GTX 1660 SUPER" },
            { name: "Logitech G515 LIGHTSPEED TKL" },
            { name: "Logitech G502 LIGHTSPEED" },
            { name: "Corsair VOID RGB ELITE Headset" },
        ],
    },
    {
        label: "audio / video.",
        items: [
            { name: "PreSonus Eris 3.5 Monitors" },
            { name: "Scarlett 4i4 Interface" },
            { name: "Mackie HM-4 Headphone Amplifier" },
            { name: "Shure SM7B Microphone" },
            { name: "Elgato Wave Mic Arm" },
            { name: "Logitech C920 Webcam" },
            { name: "Logic Pro X" },
            { name: "Final Cut Pro" },
        ],
    },
    {
        label: "music.",
        items: [
            { name: "Gibson Les Paul" },
            { name: "Orange Crush Pro 120 Amp Head + Orange FS2" },
            { name: "Peavey 5150 4 x 12 Cabinet" },
            { name: "Akai MPK Mini MKIII" },
        ],
    },
]

export default function Uses() {
    return (
        <main>
            <PageTop
                title="Uses"
                description="The tools behind my day-to-day."
                back={false}
            />

            {groups.map((group, g) => (
                <Section key={group.label} index={String(g + 1).padStart(3, "0")} label={group.label} dense>
                    <Reveal delay={0.16}>
                        <ul>
                            {group.items.map((item, i) => (
                                <li
                                    key={i}
                                    className={`flex items-baseline justify-between gap-4 text-[13px] text-neutral-700 dark:text-neutral-300
                                        ${i === 0 ? "pb-2.5" : "py-2.5"}
                                        ${i < group.items.length - 1 ? "border-b border-(--rule)" : ""}`}
                                >
                                    <span>{item.name}</span>
                                    {item.note && (
                                        <span className="shrink-0 font-mono text-[11px] tracking-tighter text-neutral-400 dark:text-neutral-600">
                                            {item.note}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </Section>
            ))}
        </main>
    )
}
