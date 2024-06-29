"use client";
import { useAuthContext } from "../hooks/useAuthContext";
import { CogIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import React, { useEffect } from "react";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Vision", href: "#vision" },
  { name: "Features", href: "#features" },
  { name: "Contact", href: "#contact" },
];

function speakText(text: string) {
  const synth = window.speechSynthesis;
  if (synth.speaking) {
    synth.cancel(); // Cancel any ongoing speech
  }
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}

export default function Hero() {
  const [settingsDialogOpen, setSettingsDialogOpen] = useState(false);
  const [fontSize, setFontSize] = useState("16px");
  const [textAlign, setTextAlign] = useState("left");
  const [colorContrast, setColorContrast] = useState("#000000"); // Default black
  const { state } = useAuthContext();
  const applySettings = () => {
    document.documentElement.style.setProperty("--font-size", fontSize);
    document.documentElement.style.setProperty("--text-align", textAlign);
    document.documentElement.style.setProperty(
      "--color-contrast",
      colorContrast
    );
  };

  useEffect(() => {
    const elements =
      document.querySelectorAll<HTMLElement>("[data-hover-read]");
    const handleMouseEnter = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const text = target.getAttribute("data-hover-read");
      if (text) {
        speakText(text);
      }
    };

    elements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
      });
    };
  }, []);

  return (
    <div className="bg-white" style={{ color: `var(--color-contrast)` }}>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 lg:justify-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
                data-hover-read={item.name}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-6">
            {state.user && (
              <a
                href="/login"
                className="text-sm font-semibold leading-6 text-gray-900"
                data-hover-read="log in"
              >
                Log out <span aria-hidden="true">&rarr;</span>
              </a>
            )}

            <button
              className="text-gray-700 p-2.5 rounded-md"
              data-hover-read="Settings"
              onClick={() => setSettingsDialogOpen(true)}
            >
              <span className="sr-only">Settings</span>
              <CogIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
        {settingsDialogOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-60 md:w-2/3 h-70 md:h-3/4 p-8 rounded shadow-lg">
              <h3 className="text-lg font-semibold mb-2 text-center">
                Personalized Settings
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span>Font Size</span>
                  <input
                    type="number"
                    value={parseInt(fontSize)}
                    className="border p-1 rounded"
                    onChange={(e) => setFontSize(`${e.target.value}px`)}
                  />
                </li>
                <li className="flex justify-between items-center">
                  <span>Text Align</span>
                  <select
                    value={textAlign}
                    className="border p-1 rounded"
                    onChange={(e) => setTextAlign(e.target.value)}
                  >
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                    <option value="justify">Justify</option>
                  </select>
                </li>
                <li className="flex justify-between items-center">
                  <span>Color Contrast</span>
                  <input
                    type="color"
                    value={colorContrast}
                    className="border p-1 rounded"
                    onChange={(e) => setColorContrast(e.target.value)}
                  />
                </li>
              </ul>
              <div className="flex justify-between mt-8">
                <button
                  className="bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded hover:bg-gray-400 transition"
                  onClick={() => setSettingsDialogOpen(false)}
                >
<<<<<<< HEAD
                  Close
                </button>
                <button
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"
                  onClick={applySettings}
=======
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" data-hover-read=" Enhance your learning with Accessibility">
                            Enhance your learning with Accessibility
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600" data-hover-read=' we ensure that our content is accessible and engaging for everyone. By fostering an inclusive environment, we aim to enhance comprehension and participation, making learning a seamless and enriching experience for all.'>
                        we ensure that our content is accessible and engaging for everyone. By fostering an inclusive environment, we aim to enhance comprehension and participation, making learning a seamless and enriching experience for all.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#features"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" data-hover-read="Features"
                            >
                                Features
                            </a>
                            <a href="#vision" className="text-sm font-semibold leading-6 text-gray-900" data-hover-read="Explore">
                                Explore <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
>>>>>>> 990d6d7c06a7d066f293619ba325adfbc9dd9bf0
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
      <div
        className="relative isolate px-6 pt-14 lg:px-8"
        style={{ fontSize: `var(--font-size)`, textAlign: `var(--text-align)` }}
      >
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              data-hover-read=" Enhance your learning with Accessibility"
            >
              Enhance your learning with Accessibility
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#features"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                data-hover-read="Features"
              >
                Features
              </a>
              <a
                href="#vision"
                className="text-sm font-semibold leading-6 text-gray-900"
                data-hover-read="Explore"
              >
                Explore <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
