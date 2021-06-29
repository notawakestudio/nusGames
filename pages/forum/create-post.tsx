import Head from 'next/head'
import NewPost from '../../components/forum/NewPost'

export default function CreatePost(): JSX.Element {
  return (
    <>
      <Head>
        <title>New Post | NUS Connect</title>
        <meta name="description" content="Forum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex-grow flex-col">
        <div className="ml-4 mt-10">
          <div className="rounded-lg">
            <NewPost />
          </div>
        </div>
      </div>
    </>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const questions = await fetchAllQuestions()
//   const questionList = questions.map((question) => {
//     return { label: renderMdToHtml(question['question']), value: question['id'] }
//   })
//   return {
//     props: {
//       questionList,
//     },
//   }
// }
