import React from 'react'

import './Galleries.scss'

import scss from '../variables.scss';
import GalleryLink from '../components/GalleryLink'

export const Galleries = ({
  colorBackground
}) => {
  return (
    <div className="galleries" style={colorBackground ? {background: scss.bluecolor} : null }>
      <GalleryLink title={"Landscapes"} link={"/portfolio/landscapes/"} image={"https://res.cloudinary.com/dw2p9qk1k/image/upload/v1587665263/web-portfolio/landscapes/031720_AMP_2666_mymdwh.jpg"}/>
      <GalleryLink title={"Adventures"} link={"/portfolio/adventures/"} image={"https://res.cloudinary.com/dw2p9qk1k/image/upload/v1587490785/web-portfolio/adventures/091517_050719_AMP_09841-2_efj9wo.jpg"}/>
      <GalleryLink title={"People"} link={"/portfolio/people/"} image={"https://res.cloudinary.com/dw2p9qk1k/image/upload/v1588472714/web-portfolio/people/aaa_121619_AMP_1275_wspoqd.jpg"}/>
      <GalleryLink title={"Film"} link={"/portfolio/film/"} image={"https://res.cloudinary.com/dw2p9qk1k/image/upload/v1588469463/web-portfolio/film/AMP_AE-1_043_haf8rs.jpg"}/>
      <GalleryLink title={"Nature"} link={"/portfolio/nature/"} image={"https://res.cloudinary.com/dw2p9qk1k/image/upload/v1587491791/web-portfolio/nature/060716_AMP_1139_vmhozi.jpg"}/>
      <GalleryLink title={"Drone"} link={"/portfolio/drone/"} image={"https://res.cloudinary.com/dw2p9qk1k/image/upload/v1588468978/web-portfolio/drone/061618_AMP_0171_qmw587.jpg"}/>
    </div>
  )
}

export default Galleries
