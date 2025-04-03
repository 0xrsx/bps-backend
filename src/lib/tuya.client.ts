import {
  TuyaContext,
  TuyaOpenApiClientRequestBodyBase,
} from "@tuya/tuya-connector-nodejs";
import { config } from "../configs/config";

export class TuyaClient {
  instance: TuyaContext;

  constructor(baseUrl: string, accessKey: string, secretKey: string) {
    this.instance = new TuyaContext({
      baseUrl: baseUrl,
      accessKey: accessKey,
      secretKey: secretKey,
    });
  }

  async send(deviceId: string, body: TuyaOpenApiClientRequestBodyBase) {
    const response = await this.instance.request({
      method: "POST",
      path: `/v2.0/cloud/thing/${deviceId}/shadow/properties/issue`,
      body: body,
    });
    return response;
  }

  async query(deviceId: string, codes?: string) {
    const response = await this.instance.request({
      method: "GET",
      path: `/v2.0/cloud/thing/${deviceId}/shadow/properties`,
      query: { codes },
    });
    return response;
  }
}

const tuya = Object.freeze(
  new TuyaClient(
    config.TUYA_BASE_URL,
    config.TUYA_ACCESS_KEY,
    config.TUYA_SECRET_KEY
  )
);

export { tuya };
