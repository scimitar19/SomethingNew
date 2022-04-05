// our-domain.com
import MeetupList from "../components/meetups/MeetupList.js";
import { Fragment } from "react";
import { MongoClient } from "mongodb";
import Head from "next/head";

function MainPage(kleps) {
  return (
    <Fragment>
      <h1>The Main Page</h1>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active meetups!"
        />
      </Head>
      <MeetupList meetups={kleps.dummyMeetups} />
    </Fragment>
  );
}

export default MainPage;

export async function getStaticProps() {
  const mongoClient = await MongoClient.connect(
    "mongodb+srv://somePassword:somePassword@cluster0.nhwnb.mongodb.net/meetups?retryReads=true&w=majority"
  );
  const db = mongoClient.db();
  const collections = db.collection("meetups");
  // const allData = await collections.json();
  const allMeetups = await collections.find().toArray();

  mongoClient.close();

  return {
    props: {
      dummyMeetups: allMeetups.map((value) => ({
        title: value.title,
        address: value.address,
        image: value.image,
        id: value._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps() {
//   return {
//     props: {
//       dummyMeetups: DUMMY_MEETUPS,
//     },
//   };
// }
