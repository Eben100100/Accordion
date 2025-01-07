import Accordion from "./Accordion";
const faq = [
  {
    question:
      "What is the future of software developement with the Introduction Of AI",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquam necessitatibus possimus molestiae nobis numquam, sunt amet similique quaerat quam sint quisquam facilis dolores aspernatur! Corporis eum alias eos qui",
    id: 1,
  },
  {
    question: "can you help me build a functioning website?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquam necessitatibus possimus molestiae nobis numquam, sunt amet similique quaerat quam sint quisquam facilis dolores aspernatur! Corporis eum alias eos qui",
    id: 2,
  },
  {
    question: "How good are you at programming?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, consequatur omnis. Repudiandae blanditiis error quod reiciendis, debitis amet autem excepturi incidunt, dignissimos sint magni consequuntur ipsum mollitia saepe eos totam repellat minima iste nulla quo officia. Accusamus saepe inventore ut quia dolore numquam totam voluptatem fugiat facere. A, non officii",
    id: 3,
  },
];
function App() {
  return (
    <div className="app">
      <div>
        <span
          style={{
            marginBottom: "2rem",
            display: "inline-block",
            textAlign: "center",
            fontWeight: 500,
            marginLeft: "40%",
            fontSize: "2rem",
            borderBottom: "2px solid grey",
          }}
        >
          FAQ
        </span>
        <Accordion faq={faq} />
      </div>
    </div>
  );
}

export default App;
