import RenderHTML from "react-native-render-html";
import { useWindowDimensions } from "react-native";

export const RenderHTMLContent = ({ html }:  {html: string}) => {
  const { width } = useWindowDimensions();

  return (
    <RenderHTML
      contentWidth={width}
      source={{ html: html || "<p>No Comic Description</p>" }}
      tagsStyles={{
        div: { color: "#f1f1f1" },
        p: {
          color: "#f1f1f1",
          fontSize: 14,
          fontWeight: "400",
          lineHeight: 22,
        },
        b: { fontWeight: "700", color: "#f1f1f1" },
        strong: { fontWeight: "700", color: "#f1f1f1" },
        span: { color: "#f1f1f1" },
        em: { fontStyle: "italic", color: "#f1f1f1" },
        i: {color: "#f1f1f1" },
        ul: {color: "#f1f1f1" },
        ol: {color: "#f1f1f1" },
        li: {color: "#f1f1f1" },
        u: {color: "#f1f1f1" },
        h1: {color: "#f1f1f1" },
        h2: {color: "#f1f1f1" },
        h3: {color: "#f1f1f1" },
        h4: {color: "#f1f1f1" },
        h5: {color: "#f1f1f1" },
        h6: {color: "#f1f1f1" },
        a: { color: "#f1f1f1", textDecorationLine: "underline" },
      }}
    />
  );
};
