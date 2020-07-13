import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import { getImagePost } from "../lib/api";
import React, { useEffect } from "react";
import { CMS_NAME } from "../lib/constants";
import useSlider from "../components/slider/useSlider";
import Grid from "../components/slider/Gird";

export default function Index({ response: { prueba, clases }, preview }) {
  const { images, setImages, renderImages } = useSlider();

  const img1 = prueba[0];
  const img2 = prueba[1];

  useEffect(() => {
    setImages(prueba);
  }, []);

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Grid >
          {renderImages()}
        </Grid>
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
