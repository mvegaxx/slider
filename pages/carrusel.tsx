import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import { getImagePost } from "../lib/api";
import React, { useEffect, ReactElement } from "react";
import { CMS_NAME } from "../lib/constants";
import useSlider from "../components/slider/useSlider";
import Grid from "../components/slider/Grid";

interface IScreen{
  response: IWData;
  preview: boolean;
}

interface IWData{
  prueba: [];
  clases: string;
}

export default function Index({ response, preview }: IScreen): ReactElement {
  const { images, setImages, renderImages } = useSlider();
  const { prueba, clases }: IWData = response;

  useEffect(() => {
    setImages(prueba);
  }, []);

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Grid 
          imageList={renderImages()} 
          elementsHeight="30vh"
          // colLayout={[2, 5, 2, 2, 1, 3, 2, 3, 2, 2, 3, 3]}
          rowLayout={[2, 2, 2, 2, 1, 3, 2, 3, 2, 2, 2, 3]}
          colLayout={[1, 2, 2, 2, 1, 3, 2, 3, 2, 2, 2, 3]}
          
          gap="20px"
          columns={3}
        />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const response = await getImagePost();
  console.log("esta es la respuesta del servidor", response);
  return {
    props: { response, preview },
  };
}
