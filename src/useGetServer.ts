import React from 'react'

function useGetServer(device: BluetoothDevice | undefined) {
  const [server, setServer] = React.useState<BluetoothRemoteGATTServer | undefined>()

  React.useEffect(() => {
    async function getServer() {
      if (device && !server) {
        setServer(await device.gatt?.connect())
      }
    }

    getServer()
  }, [device, server])

  return server
}

export default useGetServer
