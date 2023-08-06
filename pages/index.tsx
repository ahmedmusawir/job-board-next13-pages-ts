import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Layout from '@/components/Layout';
import { Box, Container, Row } from '@/components/layouts';
import CheckboxGroupSalary from '@/components/ui-ux/CheckboxGroupSalary';
import CheckboxGroup from '@/components/ui-ux/CheckboxGroup';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next Starter Home</title>
        <meta name="description" content="This is the demo page" />
      </Head>
      {/* <Container className={"border border-gray-500"} FULL={false}> */}
      <Container className={''} FULL={false}>
        <Row className="prose max-w-3xl mx-auto">
          <h1 className="h1">
            This is a starting point for ... Next.js 13 (no App router){' '}
          </h1>
          <h2 className="h2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </h2>
          <h3 className="h3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </h3>
          <p>
            Possimus et, ex eum rem mollitia totam eius ad, sapiente eos maiores
          </p>
        </Row>
        <Row className={'prose flex flex-wrap justify-around'}>
          {/* p-5 CLASS WILL BREAK EVERYTHING */}
          <Box className={'p-3 w-[32rem]'}>
            <h3>This is box one w/ prose class</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
              explicabo expedita neque voluptas exercitationem eum quia, nostrum
              inventore itaque accusamus doloremque. Ipsam ratione repellendus
              nulla libero doloremque non commodi tempore.
            </p>
          </Box>
          <Box className={'p-3 w-[32rem]'}>
            <div className="text-lg font-semibold leading-6 text-gray-400 py-5">
              Salary Range
            </div>
            <CheckboxGroup />
          </Box>
        </Row>
      </Container>
    </Layout>
  );
}
