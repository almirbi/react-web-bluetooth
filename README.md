# React Hooks for Web Bluetooth

This is a package that provides a hooks wrapper around the new [Web Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)

It is an experimental feature implemented under a flag in Chrome. In order to use this feature in Chrome, enable:

chrome://flags/#enable-experimental-web-platform-features

The `getDevices` method requires also to enable the new permissions backend experimental feature.

chrome://flags/#enable-web-bluetooth-new-permissions-backend

`getDevices` is used to retrieve already paired Bluetooth devices from the browser, for example after a refresh instead of pairing a device again `getDevices` can be used to connect to it without pairing.

# Example

```
const { onClick, device } = useRequestDevice({
  acceptAllDevices: true,
});

// ...

return <>
  {!device && <button onClick={onClick}>Connect</button>}
  {device && <span>{device.name}</span>}
</>
```
