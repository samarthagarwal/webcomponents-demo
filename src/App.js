import "./App.css";
import "./qb-button";
import QBTitle from "./title";
import logo from "./logo.svg";

function App() {
  return (
    <div className="container">
      <qb-button color="salmon" hoverColor="darksalmon">
        <img
          slot="logo"
          src="https://emoji.slack-edge.com/TR84SSEKB/quill/d8c11c0a56e27814.png"
        />
        <span slot="seperator">|</span>
        <QBTitle slot="text" content="Check Now" />
      </qb-button>
    </div>
  );
}

export default App;
