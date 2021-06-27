import Link from 'next/link'
import { showCurrentDate } from '../common/Util'
import TextContainer from '../common/TextContainer'
import { Post } from './ForumAPI'
import React from 'react'
import DisplayName from '../profile/DisplayName'

const PostListItem = ({ post }: { post: Post }): JSX.Element => {
  const tags = post.tags
  const date = showCurrentDate(post.edited_date)
  const title = post.title
  const maxLength = 175
  const content = post.content
  const trimmedContent = post.content.substring(0, maxLength) + '...'

  return (
    <Link href={`/forum/${post.id}`}>
      <div className="cursor-pointer w-full block h-full my-2">
        <TextContainer>
          <div className="hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-3 flex flex-col">
            <div className="flex flex-row justify-between text-grey-600 dark:text-gray-300 text-xs font-thin">
              <DisplayName author_id={post.author_id} />
              <span data-cy="date">{date}</span>
            </div>
            <span className="text-indigo-500 dark:text-indigo-400 text-base font-bold">
              {title}
            </span>
            <p className="text-gray-500 dark:text-gray-300 font-normal text-sm">
              {content.length > maxLength ? trimmedContent : content}
            </p>
            <div className="flex flex-wrap justify-starts items-center mt-2">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="text-xs m-1 py-1 px-2 text-gray-600 bg-blue-100 rounded-2xl">
                  #{tag}
                </div>
              ))}
            </div>
          </div>
        </TextContainer>
      </div>
    </Link>
  )
}

export default PostListItem
