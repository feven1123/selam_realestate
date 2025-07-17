import Header from "@/components/Header";
import TopBar from '@/components/TopBar';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import How from '@/components/How';
import Why from '@/components/Why';
import Feature from '@/components/Feature';
import Came from '@/components/Came';
import Completed from '@/components/Completed';
import Ongoing from '@/components/Ongoing';
import Sister from '@/components/Sister';
export default function Home() {
  return (
 <div>
  <TopBar />
<Header />
<Banner />
<How />
<Why/>
<Feature />
<Came />
<Completed />
<Ongoing />
<Sister />
<Footer />
 </div>
  );
}
