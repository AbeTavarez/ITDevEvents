import Layout from "@/components/Layout"
import { API_URL } from '@/config/index'

export default function HomePage({events}) {
  // this console.log will show on the browser console
  console.log(events); // client side
  return (
    <Layout>
      <h1>Upcoming Events</h1>

      
    </Layout>
  )
}

//* ====== This function run server side
// first we fetch the data then we return the data in the props
// now we have access to the data (events) in the HomePage function props
export async function getServerSideProps() {
  // api_url comes from the config/index.js file
  const res = await fetch(`${API_URL}/api/events`) // fetch data locally
  const events = await res.json() // create events on json format

  // this console.log will show on the vscode terminal
  // console.log(events); //server side

  //return events
  return {
    props: {events},
    revalidate: 1
  }
}