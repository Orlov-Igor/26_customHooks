import { useState, useEffect } from 'react';

export function useOnlineStatus() {
  const [status, setStatus] = useState('checking...')
  const isOnline = require('is-online');
  
  useEffect(() => {
	isOnline().then(online => {
		if(online){
			setStatus(true)	  
		}else{
			setStatus(false)
		}
	})
})

  return status;
}

export default useOnlineStatus

