import BlueText from '../misc/BlueText';
import SecondaryHeadline from '../misc/SecondaryHeadline';
import TrendingCard from '../misc/TrendingCard';
import '../styles/Trending.css';

const Trending = () => {
  return (
    <div className='trending-container padding-container ' >
    <BlueText secondary={true} text="WHAT'S TRENDING" />
    <SecondaryHeadline text="Latest Blogs & Posts" secondary={true} />
    <TrendingCard/>
    </div>
  )
}

export default Trending