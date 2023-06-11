import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export const QRCodeReader = ({ setQRCode, cam, setCam }) => {


  const handleCam = () => {

    if (cam === 'user')
      setCam('environment');

    else
      setCam('user');
  }

  const handleScan = (data) => {
   
    if (data) {
      setQRCode(data);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div className='mx-auto my-5 rounded-xl border-gray-800 bg-slate-100 border-2  p-1 w-4/5 h-4/5 max-h-[480px] max-w-[480px]'>

      <QrReader
        className='w-full h-full'
        scanDelay={500}
        constraints={{
          facingMode: cam
        }}
        onResult={(result, error) => {
          if (!!result) {
            console.info('data', result?.text);
            setQRCode(JSON.parse(result?.text));

          }

          if (!!error) {
            console.info('error');
          }
        }}
      // delay={300}
      // onError={handleError}
      // onScan={handleScan}
      // facingMode="environment"
      // style={{ width: '50%' }}
      />
      <button
        className='hover:text-[#f89a16] hover:bg-gray-100 h-2 text-lg mt-2 w-full text-center'
        onClick={handleCam}
      ><i className="fa-solid fa-camera-rotate"></i>
      </button>

    </div>
  );
};
