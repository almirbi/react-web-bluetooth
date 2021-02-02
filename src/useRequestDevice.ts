import React from "react";

function useRequestDevice(options?: RequestDeviceOptions) {
  const [device, setDevice] = React.useState<BluetoothDevice | undefined>(
    undefined
  );
  const onClick = React.useCallback(() => {
    async function getDevice() {
      let device = await navigator.bluetooth.requestDevice(options);

      setDevice(device);
    }

    getDevice();
  }, [options]);

  return { device, onClick };
}

export default useRequestDevice;
