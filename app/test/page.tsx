//break this out into another component
//page should handle the api call to get the data of the right half if needed, its state

import EditorPanel from "../layout_components/editorPanel"
import TwoPanelLayout from "../layout_components/twoPanelLayout"

export default function Page() {
  //TODO: make api call and pass into editor panel
  return (
    <TwoPanelLayout>
      <div className="left-panel">
        <p>something</p>
      </div>
      <EditorPanel />
    </TwoPanelLayout>
  )
}