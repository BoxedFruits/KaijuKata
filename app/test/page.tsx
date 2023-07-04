//page should handle the api call to get the data of the right half if needed, its state

import EditorPanel from "../common_components/editorPanel";
import TwoPanelLayout from "../common_components/twoPanelLayout";

export default function Page() {
  //TODO: make api call and pass into editor panel
  return (
    <TwoPanelLayout>
      <div className="left-panel">
        <p>something</p>
      </div>
      <EditorPanel />
    </TwoPanelLayout>
  );
}