import { Metadata } from "next";
import Page from "@/components/Page";

export const metadata: Metadata = {
  title: "Deena's Portfolio - About",
  description: "About me",
};

export default function About() {
  return (
		<Page image="/me.png" title="About" description={"Hello world..."}>
			<div className="flex flex-col gap-4">
				<p>
					Hi, I&apos;m Deena, a rising junior at UC Berkeley studying Electrical
					Engineering and Computer Science and Business Administration under the
					M.E.T. Program!
				</p>

				<p>Here&apos;s a little more about me:</p>
				<ul className="indent-bullets list-disc list-inside max-w-5xl space-y-2 font-mono">
					<li>
						I&apos;m a member of Machine Learning @ Berkeley, UC Berkeley&apos;s premier
						machine learning organization.
					</li>
					<li>
						I&apos;m also a research assistant at Stanford AI Laboratory and Berkeley
						AI Research, where I&apos;m investigating how frontier AI agents will
						shape the future of cybersecurity.
          </li>
          <li>
            This summer, I&apos;m interning at Uber as a software and GenAI engineer on the AI Solutions team.
          </li>
					<li>
						I will be serving on CS 189/289 course staff in Fall 2025.
					</li>
				</ul>

				<p>
					My current passions are agentic AI, computer vision, and astronautics. In my free time, I like to learn jazz piano, rock climb, and visit art museums.
				</p>

				<p>Thanks for visiting my portfolio! I look forward to sharing more of my moonshots with you!</p>
			</div>
		</Page>
	);
}