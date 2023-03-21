import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchFromAPI } from '../utils/fetchFromAPI';

import { ChannelCard, VideoCard } from './'


const ChanelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  
  const { id } = useParams();

  //console.log(channelDetails, videos)

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then(data => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&=order=data`)
      .then(data => setVideos(data?.items));
  }, [id])

  
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
          zIndex: 10,
          height: '300px'
        }}/>
        <ChannelCard channelDetail={channelDetail} marginTop='-93px' />
      </Box>
    </Box>
  )
}

export default ChanelDetail