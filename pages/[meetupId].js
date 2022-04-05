import { useRouter } from "next/router";
import MeetupDetail from "../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

// our-domain.com/detail-meetup

function MeetupDetailing(props) {
  const router = useRouter();
  console.log(props.meetupData.title);
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}
export default MeetupDetailing;

export async function getStaticPaths() {
  const mongoClient = await MongoClient.connect(
    "mongodb+srv://somePassword:somePassword@cluster0.nhwnb.mongodb.net/meetups?retryReads=true&w=majority"
  );

  const db = mongoClient.db();
  const collections = db.collection("meetups");

  // const allPaths = await collections.find().toArray();

  const meetups = await collections.find().toArray();

  mongoClient.close();

  return {
    fallback: "blocking",
    paths: meetups.map((value) => ({
      params: { meetupId: value._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const pageId = context.params.meetupId;

  const mongoClient = await MongoClient.connect(
    "mongodb+srv://somePassword:somePassword@cluster0.nhwnb.mongodb.net/meetups?retryReads=true&w=majority"
  );

  const db = mongoClient.db();
  const collections = db.collection("meetups");

  const selectedMeetup = await collections.findOne({ _id: ObjectId(pageId) });

  return {
    props: {
      meetupData: {
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        id: selectedMeetup._id.toString(),
        description: selectedMeetup.description,
        image: selectedMeetup.image,
      },
    },
  };
}

// return {
//   props: {
//     id: "m1",
//     image:
//       "https://www.thinkgeoenergy.com/wp-content/uploads/2017/09/LosAlamosNationalLab.jpg",
//     title: "Los Alamaos",
//     address: "1st NW avenue",
//     description: "This is the first meeetup",
//   },
// };

// paths: [
//   {
//     params: {
//       meetupId: "m1",
//     },
//   },
//   {
//     params: {
//       meetupId: "m2",
//     },
//   },
// ],
