import EventImageComponent from "components/EventImageComponent/EventImageComponent";
import { GetStaticProps, NextPage } from "next";

type Props = {
  buildTime: number;
};

const IndexPage: NextPage<Props> = () => {
  return <EventImageComponent />;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      buildTime: Date.now()
    }
  };
};

export default IndexPage;
