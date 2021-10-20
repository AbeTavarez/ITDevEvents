import {useRouter} from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import {FaPenAlt, FaPencilAlt, FaTimes} from 'react-icons/fa'
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import styles from '@/styles/Event.module.css'


export default function EventPage({evt}) {
  const router = useRouter()
  // console.log(router);

  const deleteEvent = e => {
    console.log('delete');
  }
  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
            <Link href={`/events/edit/${evt.id}`}>
              <a>
                <FaPenAlt /> Edit Event
              </a>
            </Link>
            <a href='#' className={styles.delete} onClick={deleteEvent}>
              <FaTimes /> Delete Event
            </a>
        </div>
      </div>
      
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
