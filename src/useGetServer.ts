import React from "react";

function useGetServer(device: BluetoothDevice | undefined) {
  const [server, setServer] = React.useState<
    BluetoothRemoteGATTServer | undefined
  >();

  React.useEffect(() => {
    async function getServer() {
      if (device && !server) {
        const server = await device.gatt?.connect();
        setServer(server);
      }
    }

    getServer();
  }, [device, server]);

  return server;
}

export default useGetServer;
