"use client"
import React, { useTransition, useState } from "react"
import Image from "next/image"
import TabButton from "./TabButton"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>ReactJS</li>
        <li>NextJS</li>
        <li>WordPress</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>County College of Morris</li>
        <li>Randolph, NJ</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Web Development Certificate</li>
        <li>MS Word 2016</li>
        <li>Excel 2016</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition()

  const handleTabChange = id => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/setup.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg mb-3">My first actual solicited project was, naturally enough, for family. The Irish side of the family tree had a stack of family history items scattered about, and much of it kept getting lost and then reappearing. I was asked to compile and preserve this material, and a website seemed to be the perfect vehicle for this request.</p>
          <p className="text-base lg:text-lg"> My next experience with web design and development came via a request from a friend to help him with a book project. He has since built his own site with Wix, but the experience for me was invaluable. We shared ideas, and I built a prototype site for him. I have kept this site as part of my portfolio and update it regularly with new ideas and layouts.</p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              {" "}
              Education{" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find(t => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
