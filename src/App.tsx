import Gallery from "./components/gallery/Gallery";
import TreeView from "./components/tree-view/TreeView";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [trees, setTrees] = useState<JSX.Element[]>([]);

  useEffect(() => {
    fetch(
      "https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json"
    )
      .then((response) => response.json())
      .then(buildTreeViews)
      .then(setTrees);
  }, []);

  return (
    <div className="App">
      <Gallery>{trees}</Gallery>
    </div>
  );
}

function buildTreeViews(
  json: Record<string, Record<string, string>[]>
): JSX.Element[] {
  return json["trees"].map((tree, index) => (
    <TreeView
      name={tree["name"]}
      species_name={tree["species_name"]}
      image={tree["image"]}
      key={index}
    ></TreeView>
  ));
}

export default App;
