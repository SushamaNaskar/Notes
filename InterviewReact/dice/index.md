import "./styles.css";

const Dice = ({ num }) => {
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const answers = [
    [4],
    [0, 8],
    [0, 4, 8],
    [0, 2, 6, 8],
    [0, 2, 4, 6, 8],
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
  ];
  const selected = answers[num - 1];

  return (
    <div className="box">
      <div className="wrapper">
        {arr.map((row) => {
          return (
            <div>
              {row.map((col) => {
                const curr = selected?.includes(col);
                return <div className={`${curr ? "dots" : "hide_dot"}`}></div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Dice num={3} />
    </div>
  );
}
