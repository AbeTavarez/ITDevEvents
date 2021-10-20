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

export async function getServerSideProps({query: {slug}}) { 
  // console.log(slug);

  // make request to the api using the slug from the query object
  const res = await fetch(`${API_URL}/api/events/${slug}`)
  // events is an array of events
  const events = await res.json()
  return {
    props: {
      evt: events[0]
    }
  }
 }
