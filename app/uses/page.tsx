import { Metadata } from "next";
import PageTop from "../components/page-top";

export const metadata: Metadata = {
    title: 'Kane Lariviere | Uses',
    description: 'Kane Lariviere • Software Developer • Uses',
  }

export default function Uses() {
    return (
        <div className="max-w-2xl mx-auto">
            <PageTop
                title="Kane Lariviere"
                desc="Tech That I Use"
            />

        <div className="py-8 space-y-8 max-w-3xl mx-auto text-sm">
            <div className="flex flex-col gap-2">
                <p className="font-medium tracking-tight">Office</p>
                <ul className="*:text-neutral-500">
                    <li>M1 Macbook Air (2020)</li>
                    <li>M1 Mac Mini (2020)</li>
                    <li>Apple Magic Keyboard</li>
                    <li>Apple Magic Mouse</li>
                    <li>27&quot; Samsung Curved Monitor</li>
                    <li>24&quot; Dell Monitor</li>
                    <li>Secretlab TITAN Evo Chair</li>
                </ul>
            </div>

            <div className="flex flex-col gap-2">
                <p className="font-medium tracking-tight">Coding</p>
                <ul className="*:text-neutral-500">
                    <li><strong>Editor</strong>: VSCode & Neovim</li>
                    <li><strong>Terminal</strong>: Ghostty with tmux</li>
                </ul>
            </div>

            <div className="flex flex-col gap-2">
                <p className="font-medium tracking-tight">Productivity</p>
                <ul className="*:text-neutral-500">
                    <li>Raycast</li>
                    <li>Obsidian</li>
                    <li>Notion <em>(sometimes)</em></li>
                </ul>
            </div>

            <div className="flex flex-col gap-2">
                <p className="font-medium tracking-tight">Gaming</p>
                <ul className="*:text-neutral-500">
                    <li>Windows 10</li>
                    <li>Intel Core i5 9400F</li>
                    <li>MSI MAG B365M MORTAR</li>
                    <li>16GB T-Force Delta DDR4</li>
                    <li>NVIDIA GeForce GTX 1660 SUPER</li>
                    <li>Corsair K55 RGB Pro Keyboard</li>
                    <li>Corsair M65 RGB ULTRA Mouse</li>
                    <li>Corsair VOID RGB ELITE Headset</li>
                </ul>
            </div>

            <div className="flex flex-col gap-2">
                <p className="font-medium tracking-tight">Audio / Video</p>
                <ul className="*:text-neutral-500">
                    <li>PreSonus Eris 3.5 Monitors</li>
                    <li>Scarlett 4i4 Interface</li>
                    <li>Mackie HM-4 Headphone Amplifier</li>
                    <li>Shure SM7B Microphone</li>
                    <li>Elgato Wave Mic Arm</li>
                    <li>Logitech C920 Webcam</li>
                    <li>Logic Pro X</li>
                    <li>Final Cut Pro</li>
                </ul>
            </div>

            <div className="flex flex-col gap-2">
                <p className="font-medium tracking-tight">Music</p>
                <ul className="*:text-neutral-500">
                    <li>Gibson Les Paul</li>
                    <li>Orange Crush Pro 120 Amp Head + Orange FS2</li>
                    <li>Peavey 5150 4 x 12 Cabinet</li>
                    <li>Akai MPK Mini MKIII</li>
                </ul>
            </div>
        </div>
        </div>
    )
}