import SingleCardCSS from "./SingleCard.css";
export default function SingleCard({ card, handleChoice, flipped }) {
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" alt="card front" src={card.src} />
        <img
          className="back"
          src="/img/cover.png"
          alt="card back"
          onClick={() => handleChoice(card)}
        />
      </div>
    </div>
  );
}
