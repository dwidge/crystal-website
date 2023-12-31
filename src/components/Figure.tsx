import React from "react";
import "../styles/home.css";

export function Figure({
  src,
  href,
  title,
  text = " ",
}: {
  src: string;
  href: string;
  title: string;
  text?: string;
}) {
  return (
    <a className="dark flex center" href={href} title={title}>
      <figure className="flex center">
        <img src={src} title={title} alt={""} />
        <figcaption className="center hover absolute-stretch semidark pad">
          <div>
            <b>{title}</b>
          </div>
          <div>{text}</div>
        </figcaption>
      </figure>
    </a>
  );
}
