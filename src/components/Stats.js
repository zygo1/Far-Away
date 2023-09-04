export default function Stats({ items }) {
  const numItems = items.length;

  if (numItems === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items on your list!</em>
      </footer>
    );
  }

  const numPacked = items.filter((item) => item.packed === true).length;
  const percentagePacked =
    items.length !== 0 && numPacked !== 0
      ? Math.round((numPacked / numItems) * 100)
      : 0;

  return (
    <footer className="stats">
      {percentagePacked === 100 ? (
        <em> You got everything! Ready to go ✈️</em>
      ) : (
        <em>
          👜You have {numItems} items on your list and you already packed{" "}
          {numPacked} ({percentagePacked}%)
        </em>
      )}
    </footer>
  );
}
