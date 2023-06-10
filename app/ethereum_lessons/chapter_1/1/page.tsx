import LayoutButtons from "@/app/layout_components/layoutButtons"
import EditorPanel from "../../../layout_components/editorPanel"
import TwoPanelLayout from "../../../layout_components/twoPanelLayout"

export default function Page() {
  //TODO: make api call and pass into editor panel
  return (
    <TwoPanelLayout>
      <div>
        <div className="lesson">
          <p>something</p>
        </div>
        <LayoutButtons
          prevRoute="/ethereum_lessons/chapter_1"
          nextRoute="/ethereum_lessons/chapter_1/2" />
      </div>
      <EditorPanel />
    </TwoPanelLayout>
  )
}