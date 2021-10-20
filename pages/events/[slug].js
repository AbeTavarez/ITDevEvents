import {useRouter} from 'next/router'
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

export default function EventPage({evt}) {
  const router = useRouter()
  // console.log(router);
  return (
    <Layout>
      <h1>{evt.name}</h1>
      
    </Layout>
  )
}

//* ============ Static way (for static websites) - which uses both getStaticPaths and getStaticProps
export async function getStaticPaths() { 
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  //* Creates all the paths with the slugs
  // return array of objects  that was a params object with a slug object
  const paths = events.map(evt => ({
    params: {slug: evt.slug}
  }))
  return {
    paths,
    fallback: true
  }
 }

export async function getStaticProps({params: {slug}}) { 
  // console.log(slug);

  // make request to the api using the slug from the query object
  const res = await fetch(`${API_URL}/api/events/${slug}`)
  // events is an array of events
  const events = await res.json()
  return {
    props: {
      evt: events[0]
    },
    revalidate: 1
  }
 }





//* ===========================
// export async function getServerSideProps({query: {slug}}) { 
//   // console.log(slug);

//   // make request to the api using the slug from the query object
//   const res = await fetch(`${API_URL}/api/events/${slug}`)
//   // events is an array of events
//   const events = await res.json()
//   return {
//     props: {
//       evt: events[0]
//     }
//   }
//  }
