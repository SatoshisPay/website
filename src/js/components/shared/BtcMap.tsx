import * as React from 'react';

interface Props {
  className?: string;
  height: number | string;
  width: number | string;
}

const BtcMap = ({ className, height, width }: Props) => (
  <iframe
    id="btcmap"
    title="BTC Map"
    className={className}
    src="https://btcmap.org/map"
    allow="geolocation"
    width={width}
    height={height}
    style={{ border: 0 }}
    allowFullScreen={false}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
);

export default BtcMap;
