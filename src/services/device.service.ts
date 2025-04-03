import { TuyaClient } from "../lib/tuya.client";

export class DeviceService {
  tuyaClient: TuyaClient;

  constructor(tuyaClient: TuyaClient) {
    this.tuyaClient = tuyaClient;
  }

  send(deviceId: string, body: any) {
    return this.tuyaClient.send(deviceId, {
      properties: body,
    });
  }
  query(deviceId: string) {
    return this.tuyaClient.query(deviceId);
  }
}
