export interface Props {
    imgSrc: string;
    imgAlt: string;
    subTitle: string;
    content: string;
   
  }
export const cardsContent:Props[] = [
  { imgSrc: "/assets/comment.svg", imgAlt: "comment", subTitle: "Comment anywhere", content: "Comment anywhere, on any page and any website" },
  { imgSrc: "/assets/incognito.svg", imgAlt: "incognito", subTitle: "Comment privately", content: "Comment privately, anytime, with full confidentiality" },
  { imgSrc: "/assets/wave.svg", imgAlt: "voic wave", subTitle: "Voice your opinion", content: "Voice your opinion, make your thoughts heard, you matter" },
];
