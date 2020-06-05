import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to Allies for Racial Justice.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>Subject line: People for Racial Justice - Invitation to Show Your Solidarity

Dear [___]

Around the world, people are united in grief and outrage at the murder of George Floyd by Minneapolis police on May 25. Sadly, his death is one of too many in a long line of appalling acts of public racism and police brutality towards Black, Brown, Indigenous, Asian and other people of colour both in the U.S. and here in Canada.

Locally, many of us have come together with strangers, friends and family to express our shock, condemnation, righteous anger, pain and deep compassion for those who have been targeted and those who live in fear for themselves, their loved ones, their children. This moment of heightened attention gives us the opportunity to act with resolve, to stand up and speak out against anti-Black racism in particular, and racism and exclusion more generally.

Feeling compelled to take action, a small group of Nelsonites has initiated an act of solidarity for social change. We are writing to invite you to take part in it by expressing your commitment to racial justice by way of a short share-able response to two questions:

1) What do you think needs to change to move our community towards racial equality and justice?

2) Have you experienced racism here that you feel comfortable sharing? (Please describe.)
OR, If you have not experienced racism, what is one thing you will commit to doing to increase racial justice here?

The goal is to exert pressure and build commitment to action. We plan to share this widely within the community. We all have a part to play, particularly those of us who are in positions of authority and bear the greatest responsibility to ensure racial justice.

The technology we are using is VideoAsk. You can access it here. [Detailed instructions at link.] Please choose either a short self-recorded video, audio, or text-based response. Check out our growing collection at [Video Ask site].

This invitation to participate is open to everyone. We encourage you to share it broadly. If you have any questions about this action, please ask.

Thank you for considering our invitation. Your voice matters. And thank you for caring.

Sincerely,

Wendy Brown Kelly - wendykkelly@gmail.com
Shelina Musaji – shelinamusaji@hotmail.com
Madelyn MacKay – madelynbmackay@gmail.com
Jennie Barron – jenniebarron@netidea.com</p>

    <Link to="/page-2">Link to first sample video</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
