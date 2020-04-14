import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3661901753717!2d90.36084591528484!3d23.805574084562263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d9ae523a79%3A0x1648b46bce5571e5!2z4Ka24KeH4KawLeCmhy3gpqzgpr7gpoLgprLgpr4g4Kac4Ka-4Kak4KeA4Kav4Ka8IOCmleCnjeCmsOCmv-CmleCnh-CmnyDgprjgp43gpp_gp4fgpqHgpr_gpq_gprzgpr7gpq4!5e0!3m2!1sbn!2sbd!4v1586792077725!5m2!1sbn!2sbd" 
        title="myFrame"
        width="100%"
         height="600px" 
         frameBorder="0"
        allowFullScreen="" 
        ariaHidden="false" 
        tabIndex="0"></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;