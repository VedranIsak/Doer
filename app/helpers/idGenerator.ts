const multArray = Array.from(Array(100000).keys());
const addArray = Array.from(Array(10000000).keys());

function generateId(): number {
  return (
    Date.now() * multArray[Math.floor(Math.random() * multArray.length)] +
    addArray[Math.floor(Math.random() * addArray.length)]
  );
}

export default generateId;
