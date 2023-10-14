export const content = {
  problem: {
    title: "problem",
    paragraph1:
      "People who enjoy solo outdoor sports (such as running, walking, hiking, etc.) are in greater danger if they are to fall ill, injure themselves, or feel that they are alone in an unsafe environment.",
    paragraph2:
      "EMS response times average between 10-15 minutes in France, which can be far too long to result in positive outcomes for certain injuries (such as heart attack). Additionally, in order to receive medical help, someone must first see that you are in need of help, then call 112. This can result in even higher overall EMS response time.",
  },
  onboarding: {
    title: "onboarding",
    paragraph1:
      "Unlike a typical onboarding flow, the one I designed for Bevalix held a lot more weight.",
    paragraph2:
      "The onboarding screens for Bevalix had to convey a sense of duty & responsibility to the community, as well as clearly defining the functionality of the app and the important role you could take in it as a new user.",
  },
  signup: {
    title: "signup",
    paragraph1:
      "There were 2 critical questions in the sign up flow that we did not want the user to miss, and that we wanted to encourage them to complete.",
    paragraph2:
      "In addition to a standard sign up flow, asking the user for their emergency contacts was an important request. Even more important, however, was the opt-in as a community responder - this opt-in is critical to building a network of citizens that are willing to come to the aid of another, and potentially save a life.",
  },
  branding: {
    title: "branding",
    paragraph1:
      "In addition to being the sole product designer on the project, I was also given the responsibility of continuing to develop and evolve their brand voice.",
    paragraph2:
      "As Bevalix is a startup, they did not yet have a developed brand.",
  },
  discovery: {
    title: "discovery",
    paragraph1:
      "In collaboration with product stakeholders and industry experts, I worked to fully understand the MVP (and beyond) goals of the Bevalix application.",
    paragraph2:
      "We worked through goals, pain points, user personas, jobs to be done, journey mapping as well as competitive analysis before moving on to wireframing and initial concepts.",
  },
  primaryUsers: [
    {
      title: "primary users",
      paragraph1: "🏃 Athletes",
      paragraph2:
        "Individuals utilizing the app to keep themselves safe while exercising alone",
    },
    {
      paragraph1: "🙋 Responders",
      paragraph2:
        "A community network of individuals who have committed to providing assistance when called upon. They also may have the willingness to perform CPR, if necessary",
    },
  ],
  mvp: [
    {
      title: "mvp",
      paragraph1:
        "Due to time and budget constraints, a few features were de-scoped from MVP. This can often happen with new products that are still seeking funding, while also trying to get their idea off the ground to generate more support.",
      paragraph2:
        "When rescoping for MVP to align with budget & time constraints, we went back to the primary goal of the app: keeping users safe by connecting them with a network of community responders. While Bevalix is also an exercise tracking app - its primary goal is saving lives and harnessing the power of community to do so.",
    },
    {
      paragraph1: "✅ MVP features",
      paragraph2: "placeholder",
      bulletPoints: [
        "Exercise tracking (running, walking, cycling)",
        "Fall detection & auto 112 notification",
        "Community response beacon/alert",
        "Learning library (paid/free resources)",
      ],
    },
    {
      paragraph1: "🚫 De-scoped from MVP",
      paragraph2: "placeholder",
      bulletPoints: [
        "Community Map",
        "Past exercise session details",
        "Additional exercise types",
        "Session safety rating & warning (based on weather details, proximity of Responders)",
        "Music app integration",
      ],
    },
  ],
  blurb1: {
    paragraph1:
      "I designed an exercise session pre-start screen as well as an animated countdown to active session.",
    paragraph2:
      "While the app’s primary goal is safety, I wanted to inject a bit of fun where possible, so I tried to do that with a pre-exercise countdown after the user taps start (demarrer).",
  },
  blurb2: {
    paragraph1:
      "I created a focused & simplified activity screen that balanced providing relevant session details with the highest priority feature - the SOS swipe gesture.",
    paragraph2:
      "The most important component on the active session screen is the ability for the user to perform the SOS swipe gesture, notifying the nearby community that they feel unsafe.\nDuring an active exercise session, the app also tracks simple yet standard workout metrics that are specific to the exercise being performed, in addition to displaying other key items: exercise safety rating, number of responders in proximity, music integration, map display, settings, and the ability to stop or pause the session.",
  },
  blurb3: {
    paragraph1:
      "When a user falls and is unresponsive, Bevalix will automatically (after a 15 second delay to allow for user cancellation in the event of a false alarm) perform a few key actions that I needed to account & design for.",
    // numbers with text
  },
  blurb4: {
    paragraph1:
      "I chose to use the swipe gesture to confirm critical actions in 4 different places within the alert/response flow.",
    paragraph2:
      "Utilizing the swipe gesture ensures that critical decisions are not made accidentally – especially when action, or in-action, can mean life or death.",
    // numbers with text
  },
  blurb5: {
    paragraph1:
      "I designed a screen that clearly shows the Responder user where the injured athlete is located in relation to themselves.",
    paragraph2:
      "When a Responder receives a call for help (in the form of a notification), they must utilize a swipe gesture to confirm that they are on the way. This definitive action, in turn, notifies the injured user that help is incoming, with an ETA. If they are conscious, they can interact with the Responder.",
  },
  blurb6: {
    paragraph1:
      "Once the Responder confirms they can help, they are first instructed to notify EMS.",
    paragraph2:
      "Once this confirmation modal is dismissed, a step by step real-time map guiding them to the injured athlete will take over the screen.",
  },
  blurb7: {
    paragraph1:
      "One of the most important stages of this entire journey that I needed to conceptualize, and design for, is the arrival of the Responder to the location of the injured Athlete.",
    paragraph2:
      "The design had to be big, bold, and simple - as the Responder in this situation would be highly focused on the injured party and in a potentially hectic environment.\nIn the most dire situations, the Responder would have to perform a few key health-related checks of the injured Athlete. In collaboration with stakeholders, we created a compression rhythm concept that combined a pulsing visual indicator as well as the option to play music with a beat that matched the required beat-per-minute rhythm that CPR must be performed at.",
  },
  blurb8: {
    paragraph1:
      "At the end of the day, Bevalix is focused on saving lives, harnessing the power of an active community to do so.",
    paragraph2:
      "Once EMS arrives, the Responder’s job is complete. A thank you message is displayed, and, in a later version of the app, it is the goal of the Bevalix team to find ways to reward the responding community for their service.",
  },
  challenges: {
    title: "challenges",
    paragraph1:
      "This was by far one of the most challenging products I have ever worked on, not only because of the complexity of the touchpoints between user types, but the gravity of the actions being performed.",
    paragraph2:
      "Never has it been more important to put myself in the position of the user(s) as they are interacting with a product.",
  },
  numberedList1: [
    {
      number: 1,
      text: "Send out a beacon & request help from all nearby Responders (consider: what does the Responder community see on their end?)",
    },
    {
      number: 2,
      text: "Send out a beacon & request help from all nearby Responders (consider: what does the Responder community see on their end?)",
    },
    {
      number: 3,
      text: "Send out a beacon & request help from all nearby Responders (consider: what does the Responder community see on their end?)",
    },
    {
      number: 4,
      text: "Send out a beacon & request help from all nearby Responders (consider: what does the Responder community see on their end?)",
    },
  ],
  numberedList2: [
    {
      number: 1,
      text: "Calling 112",
    },
    {
      number: 2,
      text: "Cancelling an active call for help when no longer necessary.",
    },
    {
      number: 3,
      text: "Requesting help because the user feels unsafe",
    },
    {
      number: 4,
      text: "Accepting/responding to a call for help",
    },
  ],
};
