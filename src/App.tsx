import Gallery from "./components/gallery/Gallery";
import TreeView from "./components/tree-view/TreeView";
import { useEffect, useState } from "react";
import "./App.css";

type Tree = {name: string, species_name: string, image: string};

function App() {
  const [trees, setTrees] = useState<Tree[]>([]);

  useEffect(() => {
    fetch(
      "https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json"
    )
      .then((response) => response.json())
      .then((json) => json["trees"])
      .then(setTrees);
  }, []);

  return (
    <div className="App">
      <Gallery>{buildTreeViews(trees)}</Gallery>
    </div>
  );
}

function buildTreeViews(trees: Tree[]): JSX.Element[] {
  return trees.map((tree, index) => (
    <TreeView
      name={tree.name}
      species_name={tree.species_name}
      image={tree.image}
      key={index}
    ></TreeView>
  ));
}

export default App;
