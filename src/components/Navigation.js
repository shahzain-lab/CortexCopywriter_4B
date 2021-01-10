import React, { useRef, useEffect } from "react";

export const Navigation = () => {
  const rainbowChar0 = useRef(null);
  const rainbowChar1 = useRef(null);
  const rainbowChar2 = useRef(null);
  const rainbowChar3 = useRef(null);
  const rainbowChar4 = useRef(null);
  const rainbowChar5 = useRef(null);
  const rainbowChar6 = useRef(null);
  const rainbowChar7 = useRef(null);
  const rainbowChar8 = useRef(null);
  const rainbowChar9 = useRef(null);
  const rainbowChar10 = useRef(null);
  const rainbowChar11 = useRef(null);
  const rainbowChar12 = useRef(null);
  const rainbowChar13 = useRef(null);
  const rainbowChar14 = useRef(null);
  const rainbowChar15 = useRef(null);
  const rainbowChar16 = useRef(null);
  useEffect(() => {
    const rainbowKeyframes = [
      [{ filter: "hue-rotate(0deg)" }, { filter: "hue-rotate(360deg)" }],
      [{ filter: "hue-rotate(25deg)" }, { filter: "hue-rotate(385deg)" }],
      [{ filter: "hue-rotate(50deg)" }, { filter: "hue-rotate(410deg)" }],
      [{ filter: "hue-rotate(75deg)" }, { filter: "hue-rotate(435deg)" }],
      [{ filter: "hue-rotate(100deg)" }, { filter: "hue-rotate(460deg)" }],
      [{ filter: "hue-rotate(125deg)" }, { filter: "hue-rotate(485deg)" }],
      [{ filter: "hue-rotate(150deg)" }, { filter: "hue-rotate(510deg)" }],
      [{ filter: "hue-rotate(175deg)" }, { filter: "hue-rotate(535deg)" }],
      [{ filter: "hue-rotate(200deg)" }, { filter: "hue-rotate(560deg)" }],
      [{ filter: "hue-rotate(225deg)" }, { filter: "hue-rotate(585deg)" }],
      [{ filter: "hue-rotate(250deg)" }, { filter: "hue-rotate(610deg)" }],
      [{ filter: "hue-rotate(275deg)" }, { filter: "hue-rotate(635deg)" }],
      [{ filter: "hue-rotate(300deg)" }, { filter: "hue-rotate(660deg)" }],
      [{ filter: "hue-rotate(325deg)" }, { filter: "hue-rotate(685deg)" }],
      [{ filter: "hue-rotate(350deg)" }, { filter: "hue-rotate(710deg)" }],
      [{ filter: "hue-rotate(375deg)" }, { filter: "hue-rotate(735deg)" }],
      [{ filter: "hue-rotate(400deg)" }, { filter: "hue-rotate(760deg)" }],
    ];

    const properties = {
      duration: 3000,
      iterations: Infinity,
    };
    for (const key in rainbowKeyframes) {
      if (rainbowKeyframes.hasOwnProperty(key)) {
        const rainbowKeyframe = rainbowKeyframes[key];
        // eslint-disable-next-line
        eval(`rainbowChar${key}`).current.animate(rainbowKeyframe, properties);
        // eslint-disable-next-line
      }
    }
  });
  return (
    <div
      className="topbar-desktop"
     
    >
      <div className="topbar-sticky">
        <div className="topbar-desktop-text">
          <span className="rainbow-animation rainbow-char1" ref={rainbowChar0}>
            S
          </span>
          <span className="rainbow-animation rainbow-char2" ref={rainbowChar1}>
            w
          </span>
          <span className="rainbow-animation rainbow-char3" ref={rainbowChar2}>
            i
          </span>
          <span className="rainbow-animation rainbow-char4" ref={rainbowChar3}>
            t
          </span>
          <span className="rainbow-animation rainbow-char5" ref={rainbowChar4}>
            c
          </span>
          <span className="rainbow-animation rainbow-char6" ref={rainbowChar5}>
            h
          </span>
          <span className="space"> </span>
          <span className="rainbow-animation rainbow-char7" ref={rainbowChar6}>
            e
          </span>
          <span className="rainbow-animation rainbow-char8" ref={rainbowChar7}>
            x
          </span>
          <span className="rainbow-animation rainbow-char9" ref={rainbowChar8}>
            p
          </span>
          <span className="rainbow-animation rainbow-char10" ref={rainbowChar9}>
            e
          </span>
          <span
            className="rainbow-animation rainbow-char11"
            ref={rainbowChar10}
          >
            r
          </span>
          <span
            className="rainbow-animation rainbow-char12"
            ref={rainbowChar11}
          >
            i
          </span>
          <span
            className="rainbow-animation rainbow-char13"
            ref={rainbowChar12}
          >
            e
          </span>
          <span
            className="rainbow-animation rainbow-char14"
            ref={rainbowChar13}
          >
            n
          </span>
          <span
            className="rainbow-animation rainbow-char15"
            ref={rainbowChar14}
          >
            c
          </span>
          <span
            className="rainbow-animation rainbow-char16"
            ref={rainbowChar15}
          >
            e
          </span>

          <span className="space"> </span>
          <span
            className="rainbow-animation rainbow-char17"
            ref={rainbowChar16}
          >
            ▾
          </span>
        </div>
          </div>
          </div>
  );
};
