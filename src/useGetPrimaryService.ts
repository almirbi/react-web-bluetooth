import React from "react";

function useGetPrimaryService(
  server: BluetoothRemoteGATTServer | undefined,
  bluetoothServiceUUID: BluetoothServiceUUID
) {
  const [service, setService] = React.useState<BluetoothRemoteGATTService>();

  React.useEffect(() => {
    async function getPrimaryService() {
      if (server) {
        const service = await server.getPrimaryService(bluetoothServiceUUID);
        setService(service);
      }
    }

    getPrimaryService();
  }, [server, bluetoothServiceUUID]);

  return service;
}

export default useGetPrimaryService;
