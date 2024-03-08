import dummyPoster from "../assets/dummy-poster.jpg";

interface Event {
  id: number;
  poster: string;
  title: string;
  description: string;
  form_link: string;
  button: boolean
}

const events: Event[] = [
  {
    id: 1,
    poster: dummyPoster,
    title: "event-title-1",
    description: `🔍 CoDecode: Decode the Challenge!
    🎓 INFINITY 2k24 of Osmania University presents CoDecode, a thrilling technical event to test your Cryptological intuition!
    
    🔐 Event Details:
    
    Date: 22nd-23rd March
    Time: 10AM onwards
    Venue: CSE Department, Osmania University
    
    📜 Event Rules:
    
    Round 1: Participants will be tasked with demonstrating their logical reasoning skills.
    
    Round 2 : Contestants will be challenged with both cryptography puzzles and debugging tasks to test their coding proficiency.
    
    Form teams of up to 2 members.
    Solve encrypted messages using ciphers or examples.
    Each decoded message earns points.
    The team with the highest score wins.
    In case of a tie, the team that finishes first secures victory.
    
    🎁 Perks:
    
    Enhance your cryptography skills.
    Receive a participation certificate from Osmania University.
    Win Exciting prizes 🎁
    
    💰 Registration:
    
    Registration Amount: Rs. 199/- per team
    Register here:
    https://forms.gle/kFhz5LxBy3STcHWeA
    Payment Details:
    Phone Number: 9515064759
    UPI ID: allanisaisri@oksbi
    
    📞 Contact for Queries:
    
    A. Saisri: 9515064759
    Srinija: 6305633746
    
    Spot registrations are available!!🎉🎉
    
    Don't miss out on this chance to decode and win! Register now and put your cryptological skills to the test!
    
    `,
    form_link: "http-link",
    button: true,
  },
  {
    id: 2,
    poster: dummyPoster,
    title: "event-title-1",
    description: '<div> hkjhjkgjhghj <br/> jsfldkj </div>',
    form_link: "http-link",
    button: true,
  },
  {
    id: 3,
    poster: dummyPoster,
    title: "event-title-1",
    description: "event description",
    form_link: "http-link",
    button: true,
  },
  {
    id: 4,
    poster: dummyPoster,
    title: "event-title-1",
    description: "event description",
    form_link: "http-link",
    button: true,
  },
];

export default events;