import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import { getAge } from '@/lib/age'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    "👋 Hey, I’m Archie! I'm a 22 year software developer and game designer from the UK, and I go by SirArchibald online.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            👋 Hey, I’m Archie!
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m a {getAge()} year software developer and game designer
              from the UK, and I go by SirArchibald online. I&apos;ve been
              coding since I was 14 years old, starting out teaching myself HTML
              and JavaScript in my bedroom, and now I have a BSc in Software
              Engineering and an MA in Game Design.
            </p>
            <p>
              I&apos;ve been pursuing software development for almost a decade,
              teaching myself a variety of languages and frameworks on top of my
              formal studies at college and university. I&apos;ve mainly focused
              on full-stack web development and game design, but I&apos;ve
              dabbled with a wide range of other technologies.
            </p>
            <p>
              I&apos;m currently pursuing a career in software engineering, with
              a focus on full-stack web development. I am also working as the
              Co-Founder and Technical Lead for MontGo Studios, a Roblox game studio,
              and several sides projects.
            </p>
            <p>
              In my spare time, I enjoy playing FPS and survival games, watching
              VALORANT esports and F1, reading (and sometimes writing) fantasy
              and sci-fi novels, and walking my dogs.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/SirArchibald97" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://github.com/SirArchibald97"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/archiemargretts"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:archiemargretts@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              archiemargretts@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
