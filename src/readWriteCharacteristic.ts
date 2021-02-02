import React from "react";

function writeValue(
  characteristic: BluetoothRemoteGATTCharacteristic | undefined,
  value: BufferSource
) {
  async function writeValue() {
    try {
      await characteristic?.writeValue(value);
    } catch (e) {
      console.log(e.message);
    }
  }

  writeValue();
}

function useReadValue(
  characteristic: BluetoothRemoteGATTCharacteristic | undefined
) {
  const [value, setValue] = React.useState<DataView>();
  React.useEffect(() => {
    async function readValue() {
      try {
        if (characteristic) {
          setValue(await characteristic.readValue());
        }
      } catch (e) {
        console.log(e.message);
      }
    }

    readValue();
  }, [characteristic]);

  return value;
}

export { writeValue, useReadValue };
