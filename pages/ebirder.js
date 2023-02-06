export default function EBirder() {
    return (
     <>
      <h1>EBirder</h1>
      <h3>Browse a random Ebird.org list and explore</h3>
      <button onClick={() => window.open("https://ebird.org/checklist" + randomLink())}>Visit Site</button>
     </>
    )
  }

function randomLink() {
  return "/S" + "10" + Math.floor(Math.random() * 10000000);
}