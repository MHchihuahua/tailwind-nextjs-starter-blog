import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 rounded-lg bg-primary-500 px-2 py-0.5 text-xs font-medium uppercase text-primary-100 hover:bg-primary-600 dark:hover:bg-primary-400"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
