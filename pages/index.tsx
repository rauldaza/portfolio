import {LeftMenu} from '@/components/LeftMenu' 
import {MainContent} from '@/components/MainContent' 
import { RightMenu } from '@/components/RightMenu';
const Index = () => {
  return <main>
    <LeftMenu/>
    <div className='w-[22%]'></div>
    <MainContent/>
    <RightMenu/>
  </main>;
};
export default Index;
