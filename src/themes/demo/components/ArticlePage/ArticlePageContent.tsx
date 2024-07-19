import Fragment from "@components/Fragment"
import { Heading } from "@components/Heading"
import h from "@utils/jsxFactory"

const level = (index: number) => (index === 0 ? 1 : 2)

export const pageContent = (
  section: { title: string; content: string[] }[],
  idSlug: string
) => {
  return section.map(({ title, content }, index) => (
    <Fragment>
      <Heading
        headingId={idSlug}
        level={level(index)}
        index={index}
      >
        {title}
      </Heading>
      {content.map((p) => (
        <p>{p}</p>
      ))}
    </Fragment>
  ))
}