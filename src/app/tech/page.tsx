import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Metadata } from 'next'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-6">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata: Metadata = {
  title: '💻 Tech Stack',
  description:
    'Software I work with, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="💻 Tech Stack"
      intro="I work with a lot of different tools and technologies to build software and stay productive, so here is a list of my favourite stuff!"
    >
      <div className="space-y-20">
        <ToolsSection title="🛠️ Software">
          <Tool title="Web Development">
            Most of the work I do is in web development. I work a lot with
            <b>Javascript and Typescript</b>, primarily using <b>SvelteKit</b>,
            but I have also used <b>React and Next.js</b>. I love using{' '}
            <b>TailwindCSS</b> for my styling needs, and I have also
            experimented with the <b>shadcn</b> and <b>DaisyUI</b> component
            libraries.
          </Tool>
          <Tool title="Game Development">
            The majority of my game dev work is done as a part of MontGo Studios
            where we work with <b>Roblox Studio</b> and <b>Lua</b>. As part of
            my Master's degree, I have also used <b>Unreal Engine</b> and its
            blueprint system. For my own projects into Minecraft modding and
            plugin development, I have used <b>Java</b> and <b>Kotlin</b> with
            the Fabric and Paper frameworks.
          </Tool>
          <Tool title="Databases">
            I've worked with a handful of different databases, both relational
            and document-based. I started off making projects with local{' '}
            <b>SQLite</b> databases, before moving on to <b>MySQL</b> and{' '}
            <b>Postgres</b> servers, as well as <b>MongoDB</b>.
          </Tool>
          <Tool title="DevOps">
            Arguably my weakest skill, but I am slowly learning. I run most of
            my web projects through my own VPS running <b>Linux</b>. From there,
            I deploy using <b>Docker</b> and <b>pm2</b>. I have also designed
            and deployed my own REST APIs using <b>Express</b> and <b>nginx</b>.
          </Tool>
        </ToolsSection>
        <ToolsSection title="👨‍💻 Development Tools">
          <Tool title="IDEs">
            I use a handful of different IDEs and love to experiment with new
            ones. Primarily I use <b>VSCode</b>, but have also been enjoying{' '}
            <b>Zed</b>. I also use <b>IntelliJ</b> for Java and Kotlin and{' '}
            <b>Datagrip</b> for database work.
          </Tool>
          <Tool title="Git">
            The #1 software tool for developers, I use Git and GitHub for
            version control and collaboration across basically all of my
            projects.
          </Tool>
          <Tool title="Termius">
            A great piece of software for remote access with SSH and SFTP. I use
            this all the time to manage and deploy my projects on my Linux VPS.
          </Tool>
        </ToolsSection>
        <ToolsSection title="⚙️ Hardware">
          <Tool title="Workstation">
            I built my own PC back in 2021 for work and play. It has a Ryzen 5
            3600X, Nvidia RTX 4070, and 16GB of RAM. It's slightly outdated in
            2025, but it's powerful enough for my needs. My next upgrades will
            be more memory, more storage and a new case for better cooling.
          </Tool>
          <Tool title='2019 MacBook Air 13"'>
            My reliable old machine I used for university, it's (somehow) still
            going fairly strong, although I'm considering upgrading to an M chip
            machine soon. I use this for coding on the go.
          </Tool>
          <Tool title="Peripherals">
            I've always had double monitors since I built my workstation,
            starting with dual 24" 1080p 144Hz screens, but I have recently
            upgraded my main monitor to a 27" 1440p 180Hz screen. I also have a
            Kono 87 TKL keyboard, a SteelSeries Aerox 3 mouse, a basic USB
            microphone and some simple IEMs. I used to use the SteelSeries
            Arctis 7 headset but found IEMs to be far more comfortable.
          </Tool>
        </ToolsSection>
        <ToolsSection title="📝 Productivity">
          <Tool title="Notion">
            I absolutely love the Notion app, as well as Notion Calendar. I've
            used it for all my note-taking through university and still use it
            now to manage my projects and personal life.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
