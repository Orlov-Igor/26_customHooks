import { useState, useEffect } from 'react';

export function useOnlineStatus() {
  const [status, setStatus] = useState('checking...')
  const isOnline = require('is-online');
  
	useEffect(() => {
		let connectionChecker = setInterval(() => {
			isOnline().then(online => {
				if(online){
					setStatus(true)	  
				}else{
					setStatus(false)
				}
			})
		}, 1000);

		return () => {
			clearInterval(connectionChecker);
		}
		
	}, [])

  return status;
}

export default useOnlineStatus

