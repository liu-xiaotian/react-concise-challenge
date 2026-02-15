/*
  1. Bind the input/select to the states
  2. Change the circle styles based on the states

  tips: circle size and rotate style:
  height: 0px,
  width: 0px,
  lineHeight: 0px,
  transform: `rotate(0deg)`,
*/

function MyApp() {
  const [isPurple, setIsPurple] = React.useState("");
  const [textColor, setTextColor] = React.useState("");
  const [size, setSize] = React.useState(150);
  const [rotate, setRotate] = React.useState(0);

  const circleStyle = {
    width: `${size}px`,
    height: `${size}px`,
    lineHeight: `${size}px`,
    transform: `rotate(${rotate}deg)`,
  };
  return (
    <main>
      <label>
        Purple
        <input
          type="checkbox"
          value={isPurple}
          onChange={() => setIsPurple(!isPurple)}
        />
      </label>

      <label>
        text color
        <select
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        >
          <option value="" selected>
            White
          </option>
          <option value="text-black">Black</option>
          <option value="text-orange">Orange</option>
        </select>
      </label>

      <label>
        Circle Size
        <input
          type="number"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
      </label>

      <label>
        Circle Rotate
        <input
          type="number"
          value={rotate}
          onChange={(e) => setRotate(e.target.value)}
        />
      </label>
      <div
        className={`circle ${isPurple ? "purple" : ""} ${textColor} ${circleStyle}`}
        style={circleStyle}
      >
        Hi!
      </div>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);
