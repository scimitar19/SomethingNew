//our-domain.com/new-meetup
import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
  const router = useRouter();

  const addMeetupHandler = async (props) => {
    console.log(props);

    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(props),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    console.log(data);
    if (response.ok) {
      router.replace("/");
    }
  };
  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities!"
        />
      </Head>
      <h1>New Meetup Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetup;
