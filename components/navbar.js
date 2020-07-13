import Link from "next/link";
import React from "react";

export default function NavBar({ urls }) {
  function createMenu() {
    let urlArray = [];

    for (let index = 0; index < urls.length; index++) {
       let label =  urls[index].url
       let path = label.replace('https://admin.creativamente.xyz', '') 
      urlArray.push(
        <Link href={path}>
          <a className="hover:underline">{urls[index].label}</a>
        </Link>
      );
    }
    return urlArray;
  }

  console.log("urls:::::::::", urls);
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      {createMenu()}
    </h2>
  );
}
