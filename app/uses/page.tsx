import { Metadata } from "next";
import { LgIconContainer, NoIconContainer } from "../components/container";
import { BiCoffeeTogo } from "react-icons/bi";

export const metadata: Metadata = {
    title: 'Kane Lariviere | Uses',
    description: 'Kane Lariviere • Software Engineer • Uses',
  }

export default function Uses() {
    return (
        <div className="max-w-sm mx-auto mt-28">
            <LgIconContainer
                title="Uses"
                icon={<BiCoffeeTogo size={28} />}
                iconColor="text-taupe-500"
                >
                <div className="text-neutral-700 dark:text-neutral-300">
                    The tools behind my day-to-day.
                </div>
            </LgIconContainer>

            <div className="text-sm">

                <NoIconContainer
                    title="Office"
                >
                    <ul className="">
                        <li>M4 Macbook Air</li>
                        <li>27&quot; Samsung Curved Monitor</li>
                        <li>24&quot; Dell Monitor</li>
                        <li>55&quot; Adjustable Standing Desk</li>
                        <li>Secretlab TITAN Evo Chair</li>
                    </ul>
                </NoIconContainer>

                <NoIconContainer
                    title="Coding"
                >
                    <ul className="">
                        <li><strong>Editor</strong>: VSCode & Neovim</li>
                        <li><strong>Terminal</strong>: Ghostty with tmux</li>
                    </ul>  
                </NoIconContainer>

                <NoIconContainer
                    title="Productivity"
                >
                    <ul className="">
                        <li>Raycast</li>
                        <li>Obsidian</li>
                        <li>Notion <em>(sometimes)</em></li>
                    </ul>
                </NoIconContainer>

                <NoIconContainer
                    title="Gaming"
                >
                    <ul className="">
                        <li>Windows 10</li>
                        <li>Intel Core i5 9400F</li>
                        <li>MSI MAG B365M MORTAR</li>
                        <li>16GB T-Force Delta DDR4</li>
                        <li>NVIDIA GeForce GTX 1660 SUPER</li>
                        <li>Corsair K55 RGB Pro Keyboard</li>
                        <li>Corsair M65 RGB ULTRA Mouse</li>
                        <li>Corsair VOID RGB ELITE Headset</li>
                    </ul>
                </NoIconContainer>

                <NoIconContainer
                    title="Audio/Video"
                >
                    <ul className="">
                        <li>PreSonus Eris 3.5 Monitors</li>
                        <li>Scarlett 4i4 Interface</li>
                        <li>Mackie HM-4 Headphone Amplifier</li>
                        <li>Shure SM7B Microphone</li>
                        <li>Elgato Wave Mic Arm</li>
                        <li>Logitech C920 Webcam</li>
                        <li>Logic Pro X</li>
                        <li>Final Cut Pro</li>
                    </ul>
                </NoIconContainer>

                <NoIconContainer
                    title="Music"
                >
                    <ul className="">
                        <li>Gibson Les Paul</li>
                        <li>Orange Crush Pro 120 Amp Head + Orange FS2</li>
                        <li>Peavey 5150 4 x 12 Cabinet</li>
                        <li>Akai MPK Mini MKIII</li>
                    </ul>
                </NoIconContainer>
            </div>
        </div>
    )
}