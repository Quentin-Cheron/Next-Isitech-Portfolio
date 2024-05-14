// Components

import Content from "@/components/parts/Content";
import Presentation from "./Presentation";

export default function Information() {
  return (
    <Content className="grid mbPresentation">
      <Presentation title="Nom" content="Chéron" />
      <Presentation title="Prénom" content="Quentin" />
      <Presentation title="Age" content="19" />
      <Presentation title="Métier" content="Alternant Developpeur Web" />
    </Content>
  );
}
