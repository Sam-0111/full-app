/** @jsx h */
import { h } from 'preact';
import { Header, HeaderProps } from '../components/Header/Header';
import { headerMock } from '../mock-data/Header';


const title = 'Header';
export default {
  title,
  component: Header,
};

export const ProductMainPromoBlockStory: any = (args: any) => {
  const storyProps: HeaderProps = {
    ...headerMock,
  };
  return <Header {...storyProps} />;
};

ProductMainPromoBlockStory.storyName = title;
