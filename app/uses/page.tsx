import { Metadata } from "next";
import { Reveal } from "../components/effects/reveal";
import { SectionStripSm } from "../components/section-strip";

export const metadata: Metadata = {
    title: 'Kane Lariviere | Uses',
    description: 'Kane Lariviere • Software Engineer • Uses',
  }

export default function Uses() {
    return (
        <div className="max-w-sm mx-auto">
            <section
                id="hero"
                className="pt-32"
            >
                <div className="flex flex-col gap-10">
                    <Reveal delay={0.08}>
                        <h1 className="text-[clamp(52px,8vw,80px)] font-light leading-[0.98] tracking-[-0.03em]">
                            <span className="bg-orange text-white not-italic px-2 ml-1">
                                Uses.
                            </span>
                        </h1>
                    </Reveal>

                    <div className="pb-1.5">
                        <Reveal delay={0.16}>
                            <p className="text-[14px] leading-[1.75] text-neutral-600 dark:text-neutral-400 mb-8">
                                The tools behind my day-to-day.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            <div className="text-sm">

                <div>
                    <Reveal delay={0.16}>
                        <SectionStripSm label="office" number="001" />
                        <ul className="text-neutral-600 dark:text-neutral-400">
                            <li>M4 Macbook Air</li>
                            <li>27&quot; Samsung Curved Monitor</li>
                            <li>24&quot; Dell Monitor</li>
                            <li>55&quot; Adjustable Standing Desk</li>
                            <li>Secretlab TITAN Evo Chair</li>
                        </ul>
                    </Reveal>
                </div>

                <div>
                    <Reveal delay={0.16}>
                        <SectionStripSm label="coding" number="002" />
                        <ul className="text-neutral-600 dark:text-neutral-400">
                            <li><strong>Editor</strong>: VSCode & Neovim</li>
                            <li><strong>Terminal</strong>: Ghostty with tmux</li>
                        </ul>
                    </Reveal>
                </div>

                <div>
                    <Reveal delay={0.16}>
                        <SectionStripSm label="productivity" number="003" />
                        <ul className="text-neutral-600 dark:text-neutral-400">
                            <li>Raycast</li>
                            <li>Obsidian</li>
                            <li>Notion <em>(sometimes)</em></li>
                        </ul>
                    </Reveal>
                </div>

                <div>
                    <Reveal delay={0.16}>
                        <SectionStripSm label="gaming" number="004" />
                        <ul className="text-neutral-600 dark:text-neutral-400">
                            <li>Windows 10</li>
                            <li>Intel Core i5 9400F</li>
                            <li>MSI MAG B365M MORTAR</li>
                            <li>16GB T-Force Delta DDR4</li>
                            <li>NVIDIA GeForce GTX 1660 SUPER</li>
                            <li>Corsair K55 RGB Pro Keyboard</li>
                            <li>Corsair M65 RGB ULTRA Mouse</li>
                            <li>Corsair VOID RGB ELITE Headset</li>
                        </ul>
                    </Reveal>
                </div>

                <div>
                    <Reveal delay={0.16}>
                        <SectionStripSm label="audio / video" number="005" />
                        <ul className="text-neutral-600 dark:text-neutral-400">
                            <li>PreSonus Eris 3.5 Monitors</li>
                            <li>Scarlett 4i4 Interface</li>
                            <li>Mackie HM-4 Headphone Amplifier</li>
                            <li>Shure SM7B Microphone</li>
                            <li>Elgato Wave Mic Arm</li>
                            <li>Logitech C920 Webcam</li>
                            <li>Logic Pro X</li>
                            <li>Final Cut Pro</li>
                        </ul>
                    </Reveal>
                </div>

                <div>
                    <Reveal delay={0.16}>
                        <SectionStripSm label="music" number="006" />
                        <ul className="text-neutral-600 dark:text-neutral-400">
                            <li>Gibson Les Paul</li>
                            <li>Orange Crush Pro 120 Amp Head + Orange FS2</li>
                            <li>Peavey 5150 4 x 12 Cabinet</li>
                            <li>Akai MPK Mini MKIII</li>
                        </ul>
                    </Reveal>
                </div>

            </div>
        </div>
    )
}