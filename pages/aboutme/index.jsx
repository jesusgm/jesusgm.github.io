import React from "react";
import Link from "next/link";
import { Title, Button } from "@jesusgm/react-lib-ui/";
import Layout from "../../components/layout";

function AboutMe(props) {
  return (
    <Layout>
      <Title level={3}>Sobre mi</Title>
      <Button type="primary">prueba</Button>
      <Button type="secondary">prueba</Button>
      <Button type="tertiary">prueba</Button>
    </Layout>
  );
}

export default AboutMe;
